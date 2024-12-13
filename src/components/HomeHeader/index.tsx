import { router } from 'expo-router';

import * as Styled from './styled';

type HomeHeaderProps = {
  name: string;
}

export default function HomeHeader({ name }: HomeHeaderProps) {

  function handleGoProfile() {
    router.navigate('/(tabs)/profile');
  }

  return (
    <Styled.Container>
      <Styled.SectionText>
        <Styled.Text>
          Olá, {name}!
        </Styled.Text>
        <Styled.Title>
          Gerencie suas compras!
        </Styled.Title>
      </Styled.SectionText>
      <Styled.SectionImage onPress={handleGoProfile}>
        <Styled.Image
          source={require('../../assets/profile.jpg')}
        />
      </Styled.SectionImage>
    </Styled.Container>
  )
}