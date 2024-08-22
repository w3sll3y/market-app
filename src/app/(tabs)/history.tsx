import Header from '@/components/Header';
import * as Styled from '@/styles/new_list';

export default function History() {
  return (
    <>
      <Header
        title='Histórico'
      />
      <Styled.Container>
        <Styled.Section>
          <Styled.Text>
            Historico
          </Styled.Text>
        </Styled.Section>
      </Styled.Container>
    </>
  )
}