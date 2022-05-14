import React from "react";
import { connect } from 'react-redux';
import {
  PhantomWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletProvider,
  ConnectionProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

const ConnectWallet = (props) => {
  const wallets = useMemo(
    () => [
        new PhantomWalletAdapter(),
    ],
    [props.network]
  );
  //useMemo(() => clusterApiUrl(network), [network]);
return(
  <ConnectionProvider endpoint={props.network} >
  <WalletProvider wallets={wallets} autoConnect >
  <WalletModalProvider >
  {props.children}
  </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
)
};

export default connect(
  (state) => ({ network: state.app.solanaNetwork }),
  null,
  null,
)(ConnectWallet);
