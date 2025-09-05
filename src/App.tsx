import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import Config from 'react-native-config';

import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';

export const App = () => {
  return (
    <Auth0Provider
      domain={Config.AUTH0_DOMAIN ?? ''}
      clientId={Config.AUTH0_CLIENT_ID ?? ''}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Auth0Provider>
  );
};
