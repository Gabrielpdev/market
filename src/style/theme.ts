import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors : {
    blue: {"500": '#230F5B'},
    white: {"500":'#FFFFFF'},
    black: {"500":'#000000'},
    orange: {"500":'#FFB800'},
    gray: {"500":'#3A3A3A'},
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'white.500',
        color: 'blue.500'
      }
    }
  }
})