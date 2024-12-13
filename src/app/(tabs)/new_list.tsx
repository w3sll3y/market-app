import React from 'react';

import Header from '@/components/Header';
import { ModalItem } from '@/components/ModalItem';
import { ItemList, listStorage } from '@/storage/list';
import * as Styled from '@/styles/new_list';
import { FontAwesome6 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useCallback, useEffect, useState } from 'react';
import Modal from "react-native-modal";
import { FlashList } from "@shopify/flash-list";
import { useFocusEffect } from 'expo-router';
import { ListItem } from '@/components/ListItem';


export default function NewList() {
  const [hasList, setHasList] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<ItemList[]>([]);

  const handleGetItems = useCallback(async () => {
    const data = await listStorage.get();
    setItems(data || []);
    setHasList(data && data.length > 0);
  }, []);

  function onCloseModal() {
    setModalVisible(false);
  }

  function renderItem({ item }: { item: ItemList }) {
    return (
      <ListItem id={item.id} product={item.product} priceUnity={item.priceUnity} quantity={item.priceUnity} />
    );
  }

  useFocusEffect(
    useCallback(() => {
      handleGetItems();
    }, [handleGetItems])
  );

  console.log(items);

  return (
    <>
      <Header title='Nova Lista' />
      <Styled.Container>
        <Styled.Section>
          {
            !hasList ? (
              <Styled.Button onPress={() => setHasList(true)}>
                <Styled.Text>
                  Nova Lista
                </Styled.Text>
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
                <Styled.AddItemContainer>
                  <Styled.DoneListButton onPress={() => setHasList(false)}>
                    <Styled.Text>Salvar Lista</Styled.Text>
                  </Styled.DoneListButton>
                  <Styled.AddItemButton onPress={() => setModalVisible(true)}>
                    <Styled.Text>Adicionar Item</Styled.Text>
                  </Styled.AddItemButton>
                </Styled.AddItemContainer>
              </Styled.ContainerList>
            )
          }
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
