import { matchPath } from 'react-router';

const routes = require('../app/routes');
const renderer = require('./renderer');
const fs = require('fs');
const path = require('path');
const { getPlatform, filterRoutes } = require('../app/helpers/utils');
const DEFAULT_NETWORK = "https://api.devnet.solana.com";

const router = (server) => {
  server.get('*', (req, res) => {
    try {
      const activeRoute =
        routes.default.find((route) => matchPath(req.url, route)) || {};
      const platform = getPlatform(req.headers['user-agent']);
      const filteredActiveRoute = filterRoutes([activeRoute], platform);
      const styleSheetPath = path.resolve('build/styles.css');
      const styles = fs.readFileSync(styleSheetPath);
      const initialState = {
        apiUrl: process.env.API_URL,
        gaTrackingId: process.env.GA_TRACKING_ID,
        solanaNetwork: process.env.SOLANA_NETWORK || DEFAULT_NETWORK,
        platform,
      };
      res.send(renderer.default(filteredActiveRoute, initialState, styles));
    } catch (error) {
      console.log(error);
      res.status(400).send('<h1>Internal server error</h1>');
    }
  });
};

export default router;
