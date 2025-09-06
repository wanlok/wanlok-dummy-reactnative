import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {WButton} from '../../Component/WButton';

export const LoginPage = () => {
  const {authorize, error} = useAuth0();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
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
      {error && (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 16,
            padding: 16,
            backgroundColor: 'red',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
            }}>
            {error.message}
          </Text>
        </View>
      )}
    </View>
  );
};
