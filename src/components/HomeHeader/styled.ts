import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  min-height: 150px;

  justify-content: center;
  align-items: flex-end;
  background-color: #74b9ff;

  flex-direction: row;
`;

export const SectionText = styled.View`
  margin-bottom: 10px;
  padding: 25px;
`;

export const SectionImage = styled.View`
  flex: 1;
  padding: 25px;
  align-items: center;
  width: 120px;
`;

export const Text = styled.Text`
  font-family: Inter_400Regular;
  font-size: 14px;
`;

export const Title = styled.Text`
  font-family: Inter_500Medium;
  margin-top: 5px;
  font-size: 18px;
`;

export const Image = styled.Image`
  width: 80px;
  border-radius: 50px;
  height: 80px;
`;