import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary.darkness};
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
export const AboutInfosImage = styled.div`
  height: 40px;
  svg {
    path {
      fill: ${({ theme }) => theme.primary.default};
    }
  }
`
export const AboutInfosTitle = styled.span`
  color: ${({ theme }) => theme.primary.light};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutInfosDescription = styled.span`
  color: ${({ theme }) => theme.primary.light};
  font-size: ${({ theme }) => theme.font.sizes.xxs};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
`

export const AboutRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin: ${({ theme }) => theme.spacing.xxs} 0;
    width: 25%;
  }
`
export const AboutRequestTitle = styled.span`
  color: ${({ theme }) => theme.primary.light};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutRequestTitleHighlight = styled.span`
  color: ${({ theme }) => theme.primary.light};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.highlight}; ;
`

export const AboutContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  gap: 2rem;
`
export const AboutContactsTitle = styled.span`
  color: ${({ theme }) => theme.primary.light};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutContactsPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
export const AboutContactsTitleLocation = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  color: ${({ theme }) => theme.primary.light};
`
export const AboutContactsPhoneLocation = styled.span`
  color: ${({ theme }) => theme.primary.default};
`
export const AboutContactsSocialMedias = styled.div`
  display: flex;
  gap: 1rem;
`
export const AboutContactsSocialMediasLogo = styled.div`
  height: ${({ theme }) => theme.spacing.xxs};
  svg {
    stroke: ${({ theme }) => theme.primary.dark};
    fill: ${({ theme }) => theme.primary.default};
    path {
      fill: ${({ theme }) => theme.primary.default};
      stroke: ${({ theme }) => theme.primary.dark};
    }
  }
`

export const Divisor = styled.hr`
  width: 90%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral.darkness};
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
  color: ${({ theme }) => theme.primary.light};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutSectionLink = styled.a`
  color: ${({ theme }) => theme.primary.default};
  font-size: ${({ theme }) => theme.font.sizes.xxs};
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
  color: ${({ theme }) => theme.primary.light};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const AboutLegalInformation = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxs};
  color: ${({ theme }) => theme.primary.light};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};
`
