import * as Styled from './styled';

export default function HomeHeader() {
  return (
    <Styled.Container>
      <Styled.SectionText>
        <Styled.Text>
          Olá, Wesley!
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