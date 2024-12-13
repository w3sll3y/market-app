import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

interface InputProps {
  type: 'text' | 'number';
}

export const Container = styled.View`
  width: ${(width / 2) * 1.8}px;
  height: ${(height / 2)}px;

  padding: 10px 25px;

  background-color: white;
  border-radius: 10px;
`;

export const Section = styled.View`
  width: 90%;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput<InputProps>`
  padding-left: 10px;
  background-color: #dfe6e9;
  border-radius: 10px;
  width: ${({ type }: InputProps) => (type === 'text' ? '250px' : '150px')};
`;

export const AddItemButton = styled.TouchableOpacity`
  padding: 10px 15px;
  background-color: #6c5ce7;
  align-items: center;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
  margin-top: 25px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: white;
  font-family: Inter_500Medium;
`;