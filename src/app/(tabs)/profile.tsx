import Header from '@/components/Header';
import * as Styled from '@/styles/new_list';
import { router } from 'expo-router';

export default function Profile() {

  async function handleLogout() {
    router.navigate('/')
  }

  return (
    <>
      <Header
        title='Perfil'
      />
      <Styled.Container>
        <Styled.Section>
          <Styled.Text>
            Profile
          </Styled.Text>
          <Styled.Button onPress={handleLogout}>
            <Styled.Text>
              sair
            </Styled.Text>
          </Styled.Button>
        </Styled.Section>
      </Styled.Container>
    </>
  )
}