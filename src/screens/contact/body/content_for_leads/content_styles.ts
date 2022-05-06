/* eslint-disable indent */
import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.internal};
  margin-top: calc(${({ theme }) => theme.spacing.xl} * 2.5);
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  align-self: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    margin: 0;
    margin-top: ${({ theme }) => theme.spacing.internal};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 1rem;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`
type LogoProps = {
  compact?: boolean
}

export const Logo = styled.img<LogoProps>`
  height: ${({ compact, theme }) =>
    compact ? theme.font.sizes.xxl : theme.font.sizes.xxxl};
`

export const Form = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  max-width: 420px;
  background-color: ${({ theme }) => theme.primary.light};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    margin-top: ${({ theme }) => theme.spacing.internal};
    width: 90%;
  }

  div {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary.light};
  }
  #rd-form-kql99jlt {
    margin: 0;
    background-color: ${({ theme }) => theme.primary.light};
  }
  #conversion-form-site-contato-site-novo-julho-2021 {
    input {
      background-color: ${({ theme }) => theme.primary.light};
      border: none;
      border-bottom: 1px solid #342b1d;
      &:focus {
        border: none;
      }
    }
    textarea {
      background-color: ${({ theme }) => theme.primary.light};
      border: none;
      border-bottom: 1px solid #342b1d;
      height: 100px;
    }
  }
  .select2-container .form-control .phone-country {
    background-color: ${({ theme }) => theme.primary.light};
    a {
      display: none;
    }
  }

  #rd-form-kql99jlt .with-select-flags > .phone-input-group {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 0fr 8fr;
    justify-items: flex-end;

    div:first-child {
      a {
        background-color: ${({ theme }) => theme.primary.light};
      }
    }
  }

  .bricks--component .bricks--component-button rd-button {
    background-color: ${({ theme }) => theme.primary.default};
  }
  #rd-button-kql99jlv {
    background-color: ${({ theme }) => theme.primary.default};
    border: none;
    padding: 0;
    width: 100%;
  }
  .form__submit {
    width: 100%;
  }
  #rd-form-kql99jlt .bricks-form__fieldset {
    margin: 0;
  }
  .bricks-form__submit {
    height: auto;
  }
  #rdstation-bricks-embeddable-form-bricks-component-SooI1H9K1ScRt2omAoSjVA
    .bricks--component {
    @media (max-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 1px)) {
      height: 50px;
    }
  }
`

export const BlockText = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin-bottom: ${({ theme }) => theme.spacing.internal};
  }
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: ${({ theme }) => theme.spacing.internal};
  display: flex;
  height: calc(100vh - 40px);
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  align-self: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 1rem;
    height: auto;
    flex-wrap: wrap;
  }
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  letter-spacing: 2%;
  width: 100%;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
`
export const TextPrincipal = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  font-weight: normal;
  margin: 0;
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  display: flex;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;

    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }

  img {
    height: 6rem;
  }
`
