import { listStorage } from '@/storage/list';
import { useState } from 'react';
import * as Styled from './styled';
import { ToastMessage } from '@/utils/toastMessages';

type ModalProps = {
  onCloseModal(): void;
}

export function ModalItem({ onCloseModal }: ModalProps) {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [priceUnity, setPriceUnity] = useState(0);

  async function handleAddList() {
    if (product === "") {
      return ToastMessage.errorToast("Adicione um produto!🛒")
    }
    if (quantity === 0) {
      return ToastMessage.errorToast("Adicione uma quantidade! 🔢")
    }
    if (priceUnity === 0) {
      return ToastMessage.errorToast("Adicione um preço! 💰")
    }
    const newItem = {
      id: String(Date.now()),
      product,
      quantity,
      priceUnity,
    }
    try {
      await listStorage.save(newItem);
      onCloseModal();
    } catch (error) {
      console.error("Erro ao salvar o item:", error);
    }
  }

  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.Label>
          Produto:
        </Styled.Label>
        <Styled.Input
          onChangeText={setProduct}
          value={product}
          autoCapitalize='none'
          type="text"
        />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>
          Quantidade:
        </Styled.Label>
        <Styled.Input
          onChangeText={setQuantity}
          value={quantity}
          autoCapitalize='none'
          type="numeric"
          keyboardType='numeric'
        />
      </Styled.Section>
      <Styled.Section>
        <Styled.Label>
          Valor por unidade:
        </Styled.Label>
        <Styled.Input
          onChangeText={setPriceUnity}
          value={priceUnity}
          autoCapitalize='none'
          type="numeric"
          keyboardType='numeric'
        />
      </Styled.Section>
      <Styled.AddItemButton onPress={handleAddList}>
        <Styled.TextButton>Adicionar Item</Styled.TextButton>
      </Styled.AddItemButton>
    </Styled.Container>
  )
}