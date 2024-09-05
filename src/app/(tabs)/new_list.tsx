import Header from '@/components/Header';
import * as Styled from '@/styles/new_list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import Modal from "react-native-modal";

export default function NewList() {

  const [hasList, setHasList] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
            ) :
              <Styled.ContainerList>
                <Styled.InputTitle placeholder="Titulo da lista" />
                <Styled.AddItemContainer>
                  <Styled.RemoveListButton onPress={() => setHasList(false)}>
                    <Styled.Text>Limpar Lista</Styled.Text>
                  </Styled.RemoveListButton>
                  <Styled.AddItemButton onPress={() => setModalVisible(true)}>
                    <Styled.Text>Adicionar Item</Styled.Text>
                  </Styled.AddItemButton>
                </Styled.AddItemContainer>
              </Styled.ContainerList>
          }
        </Styled.Section>
      </Styled.Container>
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <Styled.Container>
          <Styled.Text>12345</Styled.Text>
        </Styled.Container>
      </Modal>
    </>
  )
}