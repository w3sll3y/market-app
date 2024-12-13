import React from 'react';

import Header from '@/components/Header';
import { listStorage } from '@/storage/list';
import { userStorage } from '@/storage/user';
import * as Styled from '@/styles/profile';
import { router } from 'expo-router';

export default function Profile() {

  async function handleLogout() {
    await userStorage.remove();
    await listStorage.remove();
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