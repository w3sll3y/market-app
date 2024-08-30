import Header from '@/components/Header';
import * as Styled from '@/styles/history';

export default function History() {
  return (
    <>
      <Header
        title='Histórico'
      />
      <Styled.Container>
        <Styled.Section>
          <Styled.Text>
            Histórico
          </Styled.Text>
        </Styled.Section>
      </Styled.Container>
    </>
  )
}