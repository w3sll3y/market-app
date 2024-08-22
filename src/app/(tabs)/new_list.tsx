import Header from '@/components/Header';
import * as Styled from '@/styles/new_list';

export default function NewList() {
  return (
    <>
      <Header title='Nova Lista' />
      <Styled.Container>
        <Styled.Section>
          <Styled.Text>
            Nova lista
          </Styled.Text>
        </Styled.Section>
      </Styled.Container>
    </>
  )
}