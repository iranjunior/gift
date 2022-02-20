import React from 'react'
import { Router } from './routes'
import { DataProvider } from './context/data'
import data from './assets/strings.json'
import { ThemeProvider } from 'styled-components'
import { customersTheme } from './themes'

function App() {
  return (
    <DataProvider value={data}>
      <ThemeProvider theme={customersTheme}>
        <div className="App">
          <Router />
        </div>
      </ThemeProvider>
    </DataProvider>
  )
}

export default App
