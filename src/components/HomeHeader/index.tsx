import * as Styled from './styled';

type HomeHeaderProps = {
  name: string;
}

export default function HomeHeader({ name }: HomeHeaderProps) {
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
      <Styled.SectionImage>
        <Styled.Image
          source={require('../../assets/profile.jpg')}
        />
      </Styled.SectionImage>
    </Styled.Container>
  )
}