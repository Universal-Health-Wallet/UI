import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import routes from './routes';
import { filterRoutes } from './helpers/utils';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  PhantomWalletAdapter
} from '@solana/wallet-adapter-wallets';
import {
  initWallet,
  WalletProvider,
  ConnectionProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

import 'library/styles/index.scss';
import 'library/styles/solana_wallet.scss';

const App = ({ platform, solanaNetwork }) => {
  const network = "https://api.devnet.solana.com";
  const wallets = [new PhantomWalletAdapter()];
  const endpoint = network;//useMemo(() => clusterApiUrl(network), [network]);
  return (
    <ConnectionProvider endpoint={endpoint}>
  <WalletProvider wallets={wallets} autoConnect onError={error=> {console.log(error)}} >
  <WalletModalProvider >
    <div>
      <Switch>
        {filterRoutes(routes, platform).map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
    </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
  );
};

App.propTypes = {
  platform: PropTypes.string.isRequired,
};

export default connect(
  (state) => ({ platform: state.app.platform, solanaNetwork: state.app.solanaNetwork }),
  null,
  null,
)(App);
