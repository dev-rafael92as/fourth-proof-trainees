import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { Routes } from './routes'
import theme from './styles/theme'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { RegionalizationProvider } from './hooks/regionalization'

const client = new ApolloClient({
  uri: 'https://trainees-fourth-proof-igode.ondigitalocean.app/graphql',
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RegionalizationProvider>
        <Routes />
      </RegionalizationProvider>
    </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
