import Header from '@/components/Header';
import * as Styled from '@/styles/upload';

export default function Upload() {
  return (
    <>
      <Header
        title='Upload'
      />
      <Styled.Container>
        <Styled.Section>
          <Styled.Text>
            Upload
          </Styled.Text>
        </Styled.Section>
      </Styled.Container>
    </>
  )
}