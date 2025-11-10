// src/components/ui/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7c948',
      500: '#f0b429',
      900: '#1a202c',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
