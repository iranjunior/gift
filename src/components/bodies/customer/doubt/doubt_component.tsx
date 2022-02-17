import React from 'react'
import {
  Container,
  Header,
  Content,
  Subtitle,
  Title,
  DoubtsContainer,
  DoubtItem,
  DoubtTitle,
  DoubtDescription,
} from './doubt_styles'

type DoubtProps = {
  id?: string
}

const doubts = [
  {
    title: 'Como pedir a Far.me Box? ',
    answer:
      'É só clicar aqui e fazer o seu orçamento para receber o contato de um de nossos vendedores. ',
  },
  {
    title: 'Qual é o preço da Far.me Box? ',
    answer:
      'É só clicar aqui e fazer o seu orçamento para receber o contato de um de nossos vendedores. ',
  },
  {
    title: 'Quais são as formas de pagamento? ',
    answer:
      'É só clicar aqui e fazer o seu orçamento para receber o contato de um de nossos vendedores. ',
  },
  {
    title: 'O que fazer se os remédios acabarem? ',
    answer:
      'É só clicar aqui e fazer o seu orçamento para receber o contato de um de nossos vendedores. ',
  },
  {
    title: 'O que fazer quando o médico alterar a receita? ',
    answer:
      'É só clicar aqui e fazer o seu orçamento para receber o contato de um de nossos vendedores. ',
  },
  {
    title: 'A Far.me Box é segura? Os medicamentos podem vir errados?  ',
    answer:
      'É só clicar aqui e fazer o seu orçamento para receber o contato de um de nossos vendedores. ',
  },
  {
    title: 'Em caso de dúvidas, com quem devo entrar em contato? ',
    answer:
      'É só clicar aqui e fazer o seu orçamento para receber o contato de um de nossos vendedores. ',
  },
]

export const Doubt: React.FC<DoubtProps> = ({ id }) => {
  return (
    <Container id={id}>
      <Header>
        <Subtitle>Dúvidas</Subtitle>
        <Title>Dúvidas frequentes</Title>
      </Header>
      <Content>
        <DoubtsContainer>
          {doubts.map((doubt) => (
            <DoubtItem
              id={doubt.title.replaceAll(' ', '-').toLocaleLowerCase()}
              key={doubt.title}
            >
              <DoubtTitle>{doubt.title}</DoubtTitle>
              <DoubtDescription>{doubt.answer}</DoubtDescription>
            </DoubtItem>
          ))}
        </DoubtsContainer>
      </Content>
    </Container>
  )
}
