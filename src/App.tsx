import React from 'react'
import { Router } from './routes'
import { DataProvider } from './context/data'
import { SubjectProvider, SubjectContext } from './context/subject'
import data from './assets/strings.json'
import { ThemeProvider } from 'styled-components'
import {
  companiesTheme,
  customersTheme,
  medicalTheme,
  GlobalStyle,
} from './themes'
import { Subject } from './context/subject/subject'
import { Theme } from './themes/interface'
import { CookiesAlertComponent } from './components/cookies_alert'

function App() {
  const getThemeBySubject = (subject: Subject): Theme => {
    if (subject === Subject.customer) return customersTheme
    if (subject === Subject.companies) return companiesTheme
    if (subject === Subject.doctors) return medicalTheme
    return customersTheme
  }
  return (
    <DataProvider value={data}>
      <SubjectProvider>
        <SubjectContext.Consumer>
          {(value) => (
            <ThemeProvider theme={getThemeBySubject(value.subject)}>
              <GlobalStyle />
              <div className="App">
                <Router />
              </div>
              <CookiesAlertComponent />
            </ThemeProvider>
          )}
        </SubjectContext.Consumer>
      </SubjectProvider>
    </DataProvider>
  )
}

export default App
