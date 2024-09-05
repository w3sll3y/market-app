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
  background-color: #6c5ce7;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ContainerList = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const InputTitle = styled.TextInput`
  width: 250px;
  background-color: #dfe6e9;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  color: #4b5563;
`;

export const AddItemContainer = styled.View`
  position: absolute;
  bottom: 25px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const RemoveListButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: #ff7675;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const AddItemButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: #6c5ce7;
  align-items: center;
  width: 50%;
  justify-content: center;
  border-radius: 10px;
`;