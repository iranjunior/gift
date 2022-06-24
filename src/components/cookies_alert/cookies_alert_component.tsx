import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { BaseTheme } from '../../themes/base'

export const CookiesAlertComponent = () => {
  const isDesktop = window.innerWidth >= 1024

  return (
    <CookieConsent
      acceptOnScroll
      acceptOnScrollPercentage={80}
      buttonText="Aceitar cookies"
      contentClasses="cookie-consent-content"
      containerClasses={!isDesktop ? 'cookie-consent-container' : ''}
      style={{
        left: isDesktop ? 'calc(100% - 304px - 76px)' : 'calc(50% - 152px)',
        width: '100%',
        maxWidth: '304px',
        borderRadius: '8px',
        backgroundColor: BaseTheme.colors.base.default,
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      contentStyle={{
        flex: '1 0 200px',
        padding: '24px',
        margin: '0',
        paddingBottom: '0',
      }}
      buttonStyle={{
        backgroundColor: 'transparent',
        height: '48px',
        width: '260px',
        border: '1px solid #000',
        margin: '16px auto',
        marginTop: '0',
      }}
      enableDeclineButton
      declineButtonText="X"
      declineButtonStyle={{
        backgroundColor: 'transparent',
        color: '#000',
        top: 0,
        position: 'absolute',
        right: '0',
      }}
    >
      <h4 className="cookie-alert-title">Nosso site usa cookies. </h4>
      <span className="cookie-alert-text">
        Nós armazenamos dados temporários para melhorar a sua experiência de
        navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos
        serviços, você concorda com a nossa{' '}
        <a
          style={{
            color: '#000',
            fontWeight: 'bold',
          }}
          href="https://www.far.me/aviso-de-cookies"
        >
          Política de Privacidade
        </a>
        .
      </span>
    </CookieConsent>
  )
}
