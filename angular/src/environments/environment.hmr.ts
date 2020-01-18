export const environment = {
  production: false,
  hmr: true,
  application: {
    name: 'PDFGenius',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44353',
    clientId: 'PDFGenius_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'PDFGenius',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44353',
    },
  },
  localization: {
    defaultResourceName: 'PDFGenius',
  },
};
