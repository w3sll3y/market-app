import Header from '@/components/Header';
import * as Styled from '@/styles/new_list';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function NewList() {
  return (
    <>
      <Header title='Nova Lista' />
      <Styled.Container>
        <Styled.Section>
          <Styled.Button>
            <Styled.Text>
              Nova Lista
            </Styled.Text>
            <MaterialIcons name="add-box" size={24} color="white" />
          </Styled.Button>
        </Styled.Section>
      </Styled.Container>
    </>
  )
}