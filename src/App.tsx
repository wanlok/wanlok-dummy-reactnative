import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import Config from 'react-native-config';
import {AppStack} from './AppStack';

export const App = () => {
  return (
    <Auth0Provider
      domain={Config.AUTH0_DOMAIN ?? ''}
      clientId={Config.AUTH0_CLIENT_ID ?? ''}>
      <AppStack />
    </Auth0Provider>
  );
};
