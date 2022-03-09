import React, { useContext } from 'react'

import { ReactComponent as ImageLogo } from '../../assets/images/logo_yellow.svg'
import { ReactComponent as ImageLinkedinLogo } from '../../assets/images/linkedin_logo.svg'
import { ReactComponent as ImageInstagramLogo } from '../../assets/images/instagram_logo.svg'
import { ReactComponent as ImageFacebookLogo } from '../../assets/images/facebook_logo.svg'

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
  AboutSection,
  AboutSectionLink,
  AboutSectionsContainer,
  AboutSectionTitle,
  Container,
  Divisor,
} from './footer_styles'
import { DataContext } from '../../context/data'
import { Button } from '../../ds'

type FooterProps = {
  id?: string
}

export const Footer: React.FC<FooterProps> = ({ id }) => {
  const { footer, units } = useContext(DataContext)

  return (
    <Container id={id}>
      <AboutContainer>
        <AboutInfosContainer>
          <AboutInfosImage>
            <ImageLogo />
          </AboutInfosImage>
          <AboutInfosTitle>{footer.about.title}</AboutInfosTitle>
          <AboutInfosDescription
            dangerouslySetInnerHTML={{ __html: footer.about.text }}
          />
        </AboutInfosContainer>
        <AboutRequestContainer>
          <AboutRequestTitle
            dangerouslySetInnerHTML={{ __html: footer.invite }}
          />
          <Button label="Preencher formulário" />
        </AboutRequestContainer>
        <AboutContactsContainer>
          <AboutContactsTitle>{footer.contacts.title}</AboutContactsTitle>
          {footer.contacts.contacts.map((contact) => (
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
            <AboutContactsSocialMediasLogo>
              <ImageFacebookLogo />
            </AboutContactsSocialMediasLogo>
            <AboutContactsSocialMediasLogo>
              <ImageInstagramLogo />
            </AboutContactsSocialMediasLogo>
            <AboutContactsSocialMediasLogo>
              <ImageLinkedinLogo />
            </AboutContactsSocialMediasLogo>
          </AboutContactsSocialMedias>
        </AboutContactsContainer>
      </AboutContainer>
      <Divisor />
      <AboutSectionsContainer>
        {footer.sections.map((section) => (
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
        {units.map((unit) => (
          <AboutLegalInformationSection key={unit.localization}>
            <AboutLegalInformationTitle>
              {unit.localization}
            </AboutLegalInformationTitle>
            <AboutLegalInformation
              dangerouslySetInnerHTML={{ __html: unit.infos.join('<br />') }}
            />
          </AboutLegalInformationSection>
        ))}
      </AboutLegalInformationContainer>
    </Container>
  )
}
