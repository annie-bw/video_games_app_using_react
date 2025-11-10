// src/components/ui/provider.tsx
import { ChakraProvider } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import theme from './theme'; // optional, if you have a custom theme

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
