import LandingPageDesktop from './pages/homepage/desktop/index.jsx';

const routes = [
  {
    id: 'landingpage',
    path: '/home',
    name: 'Landing',
    defaultComponent: LandingPageDesktop,
    mobileComponent: LandingPageDesktop
  }
];

export default routes;
