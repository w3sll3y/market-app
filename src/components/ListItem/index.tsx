import React from "react";

import * as Styled from './styles';

import { ItemList } from "@/storage/list";

type ItemListProps = ItemList

export function ListItem({ id, priceUnity, product, quantity }: ItemListProps) {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>
          {product}
        </Styled.Title>
      </Styled.TitleContainer>
      <Styled.PriceContainer>
        <Styled.Title>
          Und: R$ {priceUnity}
        </Styled.Title>
        <Styled.Title>
          Qnt: {quantity}
        </Styled.Title>
      </Styled.PriceContainer>
    </Styled.Container>
  )
}