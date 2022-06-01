/* eslint-disable indent */
import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.colors.base.darkness};
  width: 100%;
  padding: 2% 0;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`
export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 90%;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    grid-template-columns: 1fr;
  }
`

export const AboutInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  gap: 1rem;
  width: 60%;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
`
export const AboutInfosImage = styled.div`
  height: 40px;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.base.default};
    }
  }
`
export const AboutInfosTitle = styled.span`
  color: ${({ theme }) => theme.colors.base.light};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutInfosDescription = styled.span`
  color: ${({ theme }) => theme.colors.base.light};
  font-size: ${({ theme }) => theme.font.sizes.xxs};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.spacing.nano} 0;
  }
`

export const AboutRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    font-size: ${({ theme }) => theme.font.sizes.xxs};
    margin: ${({ theme }) => theme.spacing.xxs} 0;
    width: 40%;
    @media (max-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 1px)) {
      width: 75%;
    }
  }
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
`
export const AboutRequestTitle = styled.span`
  color: ${({ theme }) => theme.colors.base.light};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  max-width: 80%;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.lg};
  }
`
export const AboutRequestTitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.base.light};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.highlight};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.lg};
  }
`

export const AboutContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
`
export const AboutContactsTitle = styled.span`
  color: ${({ theme }) => theme.colors.base.light};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
  margin-bottom: ${({ theme }) => theme.spacing.internal};
`
export const AboutContactsPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
export const AboutContactsTitleLocation = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  color: ${({ theme }) => theme.colors.base.light};
  margin-top: ${({ theme }) => theme.spacing.nano};
`
export const AboutContactsPhoneLocation = styled.span`
  color: ${({ theme }) => theme.colors.base.default};
  margin: ${({ theme }) => theme.spacing.nano} 0;
`
export const AboutContactsSocialMedias = styled.div`
  display: flex;
  gap: 1rem;
`
export const AboutContactsSocialMediasLogo = styled.div`
  height: ${({ theme }) => theme.spacing.xxs};
  svg {
    stroke: ${({ theme }) => theme.colors.base.dark};
    fill: ${({ theme }) => theme.colors.base.default};
    path {
      fill: ${({ theme }) => theme.colors.base.default};
      stroke: ${({ theme }) => theme.colors.base.dark};
    }
  }
`

export const Divisor = styled.hr`
  width: 90%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral.darkness};
  margin: 2rem 0;
  border: none;
`

export const AboutSectionsContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 2rem;
    grid-template-columns: 1fr;
  }
`
export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  max-width: 300px;
  flex-grow: 2;
  margin: 1rem 0;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
`
export const AboutSectionTitle = styled.span`
  color: ${({ theme }) => theme.colors.base.light};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutSectionLink = styled.a`
  color: ${({ theme }) => theme.colors.base.default};
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  margin: ${({ theme }) => theme.spacing.nano} 0;
`
export const AboutLegalInformationContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 2fr 2fr;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`
export const AboutLegalInformationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`
export const AboutLegalInformationTitle = styled.span`
  color: ${({ theme }) => theme.colors.base.light};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutLegalInformation = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxs};
  color: ${({ theme }) => theme.colors.base.light};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};
`
