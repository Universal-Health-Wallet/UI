import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import  {WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import './index.scss';

import { useEffect, useState } from "react";

const HomePage = () => {
  const { connect={}, wallet=false } = useWallet();
  const [provider, setProvider] = useState(
    undefined
  );
  const [walletKey, setWalletKey] = useState(
    undefined
  );

  const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      console.log(provider)
      if (provider.isPhantom) return provider;
    }
  };

  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);

  }, []);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  const disconnectWallet = async () => {
    const { solana } = window;

    if (walletKey && solana) {
      await (solana).disconnect();
      setWalletKey(undefined);
    }
  };
  
  return(
  <div className='c-home-page'>
    <div className='c-home-page--wrapper u-text-font--mb'>
    <div className='u-m-t--45'><span className='u-text--alpha u-text-cyan u-text--bold u-text-font--xmb'>UHW</span></div>
    <div className='h-flex u-m-t--45 u-flex--center'>
      <div className='c-home-header'>
        <h1 className='u-text-font--xmb u-text--supreme c-home-header--gradient u-lh--1'>Medical Records on Blockchain</h1>
        {provider && !walletKey &&(<div/>)
        //<span className='c-connect-button u-text-font--mb u-border-radius--8 u-text--gamma u-cursor--pointer' onClick={connectWallet}>Connect Wallet</span>
        }
        <WalletMultiButton className='c-connect-button u-text-font--mb u-border-radius--8 u-text--gamma u-cursor--pointer'/>
        {!provider && (
          <p>
            No provider found. Install{" "}
            <a href="https://phantom.app/">Phantom Browser extension</a>
          </p>
        )}
        {provider && walletKey && (
          <div>
            <p>Connected account {walletKey}</p>

            <button
              style={{
                fontSize: "16px",
                padding: "15px",
                fontWeight: "bold",
                borderRadius: "5px",
                margin: "15px auto",
              }}
              onClick={disconnectWallet}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
      <img width="386px" src='/static/images/doctor.png' />
    </div>
    <img className='c-home-fluid' src="/static/images/liquid.png" />
    </div>
  </div>
);
};

export default HomePage;
