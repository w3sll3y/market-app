import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Section = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: white;
  font-family: Inter_500Medium;
  margin-right: 5px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 15px;
  background-color: #0984e3;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
