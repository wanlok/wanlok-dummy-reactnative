import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {WButton} from '../../Component/WButton';

export const LoginPage = () => {
  const {authorize, error} = useAuth0();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error?.message === 'User cancelled the Auth') {
      setLoading(false);
    }
  }, [error]);

  const onLoginButtonCick = async () => {
    try {
      setLoading(true);
      await authorize();
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <WButton title={'Login'} loading={loading} onClick={onLoginButtonCick} />
    </View>
  );
};
