import {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {WButton} from '../../Component/WButton';

export const LoginPage = () => {
  const {authorize, error} = useAuth0();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [error]);

  const onLoginButtonCick = useCallback(async () => {
    try {
      setLoading(true);
      await authorize();
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }, [count]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{count}</Text>
      <WButton title={'Login'} loading={loading} onClick={onLoginButtonCick} />
      {!loading && error && (
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
