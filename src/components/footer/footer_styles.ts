import styled from 'styled-components'
import { customersTheme } from '../../themes'

export const Container = styled.div`
  display: flex;
  background-color: ${customersTheme.backgroundColor.darkness};
  width: 100%;
  padding: 5% 0;
  flex-direction: column;
  align-items: center;
`
export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0 5%;
  gap: 2rem;
`

export const AboutInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  gap: 1rem;
  width: 60%;
`
export const AboutInfosImage = styled.img`
  height: 40px;
`
export const AboutInfosTitle = styled.span`
  color: ${customersTheme.color.primaryLight};
  font-size: ${customersTheme.font.sizes.smallMedium};
  font-family: 'Clearface ITC Pro', sans-serif;
`
export const AboutInfosDescription = styled.span`
  color: ${customersTheme.color.primaryLight};
  font-size: ${customersTheme.font.sizes.extraExtraSmall};
  line-height: 20px;
`

export const AboutRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const AboutRequestTitle = styled.span`
  color: ${customersTheme.color.primaryLight};
  font-size: ${customersTheme.font.sizes.extraLarge};
  font-family: 'Clearface ITC Pro', sans-serif;
`
export const AboutRequestTitleHighlight = styled.span`
  font-family: 'Gloria Hallelujah', cursive;
  color: ${customersTheme.color.primaryLight};
  font-size: ${customersTheme.font.sizes.extraLarge};
`
export const RequestOrderButton = styled.button`
  background-color: ${customersTheme.requestOrder.backgroundColor};
  border: none;
  border-radius: 4px;
  height: 48px;
  max-width: 200px;
  margin-top: 1rem;
`

export const AboutContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  gap: 2rem;
`
export const AboutContactsTitle = styled.span`
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Clearface ITC Pro', sans-serif;
  color: ${customersTheme.color.highlightLight};
`
export const AboutContactsPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
export const AboutContactsTitleLocation = styled.span`
  font-size: ${customersTheme.font.sizes.extraSmall};
  color: ${customersTheme.color.highlightLight};
`
export const AboutContactsPhoneLocation = styled.span`
  color: ${customersTheme.color.highlight};
`
export const AboutContactsSocialMedias = styled.div`
  display: flex;
  gap: 1rem;
`
export const AboutContactsSocialMediasLogo = styled.img`
  height: 24px;
`

export const Divisor = styled.hr`
  width: 90%;
  height: 2px;
  background-color: ${customersTheme.color.indicatorActive};
  margin: 5rem 0;
  border: none;
`

export const AboutSectionsContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`
export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  gap: 1.5rem;
`
export const AboutSectionTitle = styled.span`
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Clearface ITC Pro', sans-serif;
  color: ${customersTheme.color.highlightLight};
`
export const AboutSectionLink = styled.a`
  color: ${customersTheme.color.highlight};
  font-size: ${customersTheme.font.sizes.extraExtraSmall};
`
export const AboutLegalInformationContainer = styled.div`
  width: 90%;
  gap: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const AboutLegalInformationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`
export const AboutLegalInformationTitle = styled.span`
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Clearface ITC Pro', sans-serif;
  color: ${customersTheme.color.highlightLight};
`
export const AboutLegalInformation = styled.span`
  font-size: ${customersTheme.font.sizes.extraExtraSmall};
  color: ${customersTheme.color.highlightLight};
  line-height: 25px;
`
