import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { CartProvider } from '../context/cart';
import { theme } from '../style/theme';

function MyApp({ Component, pageProps }: AppProps){
  return( 
    <ChakraProvider theme={theme} >
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ChakraProvider>
  )
}

export default MyApp
