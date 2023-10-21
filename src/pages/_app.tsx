import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { arbitrum, polygon, mainnet } from 'wagmi/chains';

import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const metadata = {
  name: 'ProfilePulse',
  description: 'Your Web2 and Web3 Identity',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, arbitrum, polygon];
const wagmiConfig = defaultWagmiConfig({ 
  chains, 
  projectId: projectId!, 
  metadata: metadata! 
});

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <WagmiConfig config={wagmiConfig}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </WagmiConfig>
    </SessionProvider>
  );
}