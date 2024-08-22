import * as Styled from './styled';

type HeaderProps = {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.SectionText>
        <Styled.Text>
          {title}
        </Styled.Text>
      </Styled.SectionText>
    </Styled.Container>
  )
}