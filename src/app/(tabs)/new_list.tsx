import React, { useEffect } from 'react';

import Header from '@/components/Header';
import { ListItem } from '@/components/ListItem';
import { ModalItem } from '@/components/ModalItem';
import { ItemList, listStorage } from '@/storage/list';
import * as Styled from '@/styles/new_list';
import { FontAwesome6 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FlashList } from "@shopify/flash-list";
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import Modal from "react-native-modal";


export default function NewList() {
  const [hasList, setHasList] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<ItemList[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleGetItems = useCallback(async () => {
    const data = await listStorage.get();
    setItems(data || []);
    setHasList(data && data.length > 0);
  }, []);

  function onCloseModal() {
    setModalVisible(false);
  }

  function calculateTotalPrice() {
    const total = items.reduce((acc, item) => {
      const price = typeof item.priceUnity === 'number' ? item.priceUnity : parseFloat(item.priceUnity) || 0;
      const quantity = typeof item.quantity === 'number' ? item.quantity : parseInt(item.quantity) || 0;
      return acc + price * quantity;
    }, 0);

    setTotalPrice(total);
  }

  function renderItem({ item }: { item: ItemList }) {
    return (
      <ListItem
        id={item.id}
        product={item.product}
        priceUnity={item.priceUnity}
        quantity={item.quantity}
      />
    );
  }

  useFocusEffect(
    useCallback(() => {
      handleGetItems();
    }, [handleGetItems, modalVisible])
  );

  useEffect(() => {
    calculateTotalPrice();
  }, [items]);

  return (
    <>
      <Header title="Nova Lista" />
      <Styled.Container>
        <Styled.Section>
          {!hasList ? (
            <Styled.Button onPress={() => setHasList(true)}>
              <Styled.Text>Nova Lista</Styled.Text>
              <MaterialIcons name="add-box" size={24} color="white" />
            </Styled.Button>
          ) : (
            <Styled.ContainerList>
              <Styled.SectionTitle>
                <Styled.InputTitle placeholder="Titulo da lista" />
                <Styled.RemoveListButton onPress={() => setHasList(false)}>
                  <FontAwesome6 name="trash-can" size={18} color="white" />
                </Styled.RemoveListButton>
              </Styled.SectionTitle>
              <Styled.ListSection>
                <FlashList
                  data={items}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  estimatedItemSize={200}
                />
              </Styled.ListSection>
              <Styled.PriceContainer>
                <Styled.Title>Total:</Styled.Title>
                <Styled.Price>R${totalPrice.toFixed(2)}</Styled.Price>
              </Styled.PriceContainer>
              <Styled.AddItemContainer>
                <Styled.DoneListButton onPress={() => setHasList(false)}>
                  <Styled.Text>Salvar Lista</Styled.Text>
                </Styled.DoneListButton>
                <Styled.AddItemButton onPress={() => setModalVisible(true)}>
                  <Styled.Text>Adicionar Item</Styled.Text>
                </Styled.AddItemButton>
              </Styled.AddItemContainer>
            </Styled.ContainerList>
          )}
        </Styled.Section>
      </Styled.Container>
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <Styled.ModalContainer>
          <ModalItem onCloseModal={onCloseModal} />
        </Styled.ModalContainer>
      </Modal>
    </>
  );
}