import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import {store } from "./Redux/store/store"
import { CartContextProvider } from './Context/CartContext';
import { PriceContextProvider } from './Context/PriceContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  < BrowserRouter>
    <ChakraProvider>
    <PriceContextProvider>
             <CartContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
                </CartContextProvider>
          </PriceContextProvider>
    </ChakraProvider>
  </ BrowserRouter>
)
