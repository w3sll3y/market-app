import HomeHeader from '@/components/HomeHeader';
import * as Styled from '@/styles/home';

import Loading from '@/components/loading';

import { useEffect, useState } from 'react';
import { User, UserServer } from '@/server/user-server';

export default function Home() {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  async function getUser() {
    const data = await UserServer.handleGetUserData();
    setUser(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) :
        <Styled.Container>
          <HomeHeader
            name={user?.name ? user.name : ''}
          />
          <Styled.Section>
            <Styled.Text>
              Gastos dos últimos 30 dias
            </Styled.Text>
            <Styled.Price>
              R$765,87
            </Styled.Price>
          </Styled.Section>
        </Styled.Container>
      }
    </>
  )
}