import HomeHeader from '@/components/HomeHeader';
import * as Styled from '@/styles/home';

export default function Home() {

  return (
    <>
      <Styled.Container>
        <HomeHeader />
        <Styled.Section>
          <Styled.Text>
            Gastos dos últimos 30 dias
          </Styled.Text>
          <Styled.Price>
            R$765,87
          </Styled.Price>
        </Styled.Section>
      </Styled.Container>
    </>
  )
}