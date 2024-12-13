import React from "react";

import * as Styled from './styles';

import { ItemList } from "@/storage/list";

type ItemListProps = ItemList

export function ListItem({ id, priceUnity, product, quantity }: ItemListProps) {
  return (
    <Styled.Container>
      <Styled.Title>
        {product}
      </Styled.Title>
    </Styled.Container>
  )
}