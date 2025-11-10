import { extendTheme,  type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false, // ensures it ignores system preference
};

const theme = extendTheme({
  config,
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
