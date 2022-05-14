export const getPlatform = (userAgent) => {
  let platform = 'desktop';
  if (/iPhone|iPad|iPod|Android/i.test(userAgent)) {
    platform = 'mobile';
  }
  return platform;
};

export const filterRoutes = (routes, platform) => {
  routes.forEach((route) => {
    if (platform === 'mobile' && route.mobileComponent) {
      route.component = route.mobileComponent;
    } else {
      // consider default platform and component to be desktop
      route.component = route.defaultComponent;
    }
  });
  return routes;
};
