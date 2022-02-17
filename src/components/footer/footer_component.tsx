import React from 'react'

import ImageLogo from '../../assets/logo_yellow.svg'
import ImageLinkedinLogo from '../../assets/linkedin_logo.svg'
import ImageInstagramLogo from '../../assets/instagram_logo.svg'
import ImageFacebookLogo from '../../assets/facebook_logo.svg'

import {
  AboutContactsContainer,
  AboutContactsPhoneContainer,
  AboutContactsPhoneLocation,
  AboutContactsSocialMedias,
  AboutContactsSocialMediasLogo,
  AboutContactsTitle,
  AboutContactsTitleLocation,
  AboutContainer,
  AboutInfosContainer,
  AboutInfosDescription,
  AboutInfosImage,
  AboutInfosTitle,
  AboutLegalInformation,
  AboutLegalInformationContainer,
  AboutLegalInformationSection,
  AboutLegalInformationTitle,
  AboutRequestContainer,
  AboutRequestTitle,
  AboutRequestTitleHighlight,
  AboutSection,
  AboutSectionLink,
  AboutSectionsContainer,
  AboutSectionTitle,
  Container,
  Divisor,
  RequestOrderButton,
} from './footer_styles'

type FooterProps = {
  id?: string
}

const contacts = [
  {
    location: 'Belo Horizonte - MG',
    phone: '31 2528 4229 | 31 98372 3906',
  },
  {
    location: 'São Paulo - SP',
    phone: '11 3289 8232',
  },
]

const sections = [
  {
    title: 'Serviços',
    links: [
      {
        title: 'Far.me Box',
        href: 'https://google.com',
      },
      {
        title: 'Página Inicial',
        href: 'https://google.com',
      },
      {
        title: 'Far.me Mensal',
        href: 'https://google.com',
      },
    ],
  },
  {
    title: 'Serviços 3',
    links: [
      {
        title: 'Far.me Box',
        href: 'https://google.com',
      },
      {
        title: 'Página Inicial',
        href: 'https://google.com',
      },
      {
        title: 'Far.me Mensal',
        href: 'https://google.com',
      },
    ],
  },
  {
    title: 'Serviços 4',
    links: [
      {
        title: 'Far.me Box',
        href: 'https://google.com',
      },
      {
        title: 'Página Inicial',
        href: 'https://google.com',
      },
      {
        title: 'Far.me Mensal',
        href: 'https://google.com',
      },
    ],
  },
  {
    title: 'Serviços 2',
    links: [
      {
        title: 'Far.me Box',
        href: 'https://google.com',
      },
      {
        title: 'Página Inicial',
        href: 'https://google.com',
      },
      {
        title: 'Far.me Mensal',
        href: 'https://google.com',
      },
    ],
  },
]

export const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <Container id={id}>
      <AboutContainer>
        <AboutInfosContainer>
          <AboutInfosImage src={ImageLogo} />
          <AboutInfosTitle>Sobre a a gente</AboutInfosTitle>
          <AboutInfosDescription>
            Criamos soluções para que o tratamento medicamentoso seja seguido e
            as pessoas se sintam mais tranquilas e seguras no dia a dia.
            <br />
            <br />
            Viva seu melhor estar, conte com a Far.me.
          </AboutInfosDescription>
        </AboutInfosContainer>
        <AboutRequestContainer>
          <AboutRequestTitleHighlight>
            Se interessou?
          </AboutRequestTitleHighlight>
          <AboutRequestTitle>
            É só preencher o formulário que te responderemos em breve.
          </AboutRequestTitle>
          <RequestOrderButton>Preencher formulário</RequestOrderButton>
        </AboutRequestContainer>
        <AboutContactsContainer>
          <AboutContactsTitle>Se preferir, liga pra gente!</AboutContactsTitle>
          {contacts.map((contact) => (
            <AboutContactsPhoneContainer key={contact.location}>
              <AboutContactsTitleLocation>
                {contact.location}
              </AboutContactsTitleLocation>
              <AboutContactsPhoneLocation>
                {contact.phone}
              </AboutContactsPhoneLocation>
            </AboutContactsPhoneContainer>
          ))}
          <AboutContactsSocialMedias>
            <AboutContactsSocialMediasLogo src={ImageFacebookLogo} />
            <AboutContactsSocialMediasLogo src={ImageInstagramLogo} />
            <AboutContactsSocialMediasLogo src={ImageLinkedinLogo} />
          </AboutContactsSocialMedias>
        </AboutContactsContainer>
      </AboutContainer>
      <Divisor />
      <AboutSectionsContainer>
        {sections.map((section) => (
          <AboutSection key={section.title}>
            <AboutSectionTitle>{section.title}</AboutSectionTitle>
            {section.links.map((link) => (
              <AboutSectionLink key={link.title} href={link.href}>
                {link.title}
              </AboutSectionLink>
            ))}
          </AboutSection>
        ))}
      </AboutSectionsContainer>
      <Divisor />
      <AboutLegalInformationContainer>
        <AboutLegalInformationSection>
          <AboutLegalInformationTitle>
            Belo Horizonte - MG
          </AboutLegalInformationTitle>
          <AboutLegalInformation>
            Av. Cristiano Machado, 640 - Belo Horizonte - MG
            <br />
            CNPJ 25.228.539/0001-23 Autorização de Funcionamento - Processo:
            355030801-477-000362-1-8
            <br />
            Autorização/MS: 0.12469.2
            <br />
            Farmacêutica Responsável: João Carlos Ribeiro Angelon - CRF SP 74626
            <br />
            Telefone: 11 94052 2689
            <br />
            E-mail: contato@farme.com.br
            <br />
            Horário de funcionamento: Segunda a Sexta de 09:00h às 18:00h
          </AboutLegalInformation>
        </AboutLegalInformationSection>
        <AboutLegalInformationSection>
          <AboutLegalInformationTitle>
            São Paulo - SP
          </AboutLegalInformationTitle>
          <AboutLegalInformation>
            Alameda Joaquim Eugênio de Lima, 198
            <br />
            CNPJ: 03.153.196/0001-42 Alvará Sanitário: 2019080718 Autorização de
            Funcionamento da Empresa (AFE): 7.48850.4
            <br />
            Farmacêutica Responsável: Fernanda Castanheira de Freitas - CRF MG
            40.004
            <br />
            Telefone: 31 98371 9337
            <br />
            E-mail: contato@farme.com.br
            <br />
            Horário de funcionamento: Segunda a Sexta de 09:00h às 18:00h
          </AboutLegalInformation>
        </AboutLegalInformationSection>
      </AboutLegalInformationContainer>
    </Container>
  )
}
