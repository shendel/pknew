import type { WindowProvider } from 'wagmi/window'

export interface ExtendEthereum extends WindowProvider {
  isSafePal?: true
  isCoin98?: true
  isBlocto?: true
  isMathWallet?: true
  isTrustWallet?: true
  isBlocto?: true
  isBinance?: true
}

declare global {
  interface Window {
    coin98?: true
    SO_LotteryConfig?: any
    mercuryoWidget?: any
    ethereum?: ExtendEthereum
    BinanceChain?: {
      bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
      switchNetwork?: (networkId: string) => Promise<string>
    } & Ethereum
  }
}

export {}
