import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: #b2bec3;

  flex-direction: row;
  margin: 10px 15px;
  border-radius: 10px;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  width: 50%;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin-left: 15px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #000;
`;
