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

export const Title = styled.Text`
  font-size: 14px;
  color: black;
  font-family: Inter_500Medium;
  font-style: italic;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: red;
  font-family: Inter_500Medium;
  font-style: italic;
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

export const SectionTitle = styled.View`
  position: relative;

  flex-direction: row;
  align-items: center;
`;


export const InputTitle = styled.TextInput`
  width: 250px;
  background-color: #dfe6e9;
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
  color: #4b5563;
`;

export const AddItemContainer = styled.View`
  position: absolute;
  bottom: 10px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const PriceContainer = styled.View`
  position: absolute;
  bottom: 60px;
  z-index: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

export const ListSection = styled.View`
  flex: 1;
  max-height: 72%;
`;

export const DoneListButton = styled.TouchableOpacity`
  padding: 10px 15px;
  background-color: #636e72;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const RemoveListButton = styled.TouchableOpacity`
  position: absolute;
  background-color: #ff7675;

  width: 40px;
  height: 40px;

  right: 25px;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;

export const AddItemButton = styled.TouchableOpacity`
  padding: 10px 15px;
  background-color: #6c5ce7;
  align-items: center;
  width: 50%;
  justify-content: center;
  border-radius: 10px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;