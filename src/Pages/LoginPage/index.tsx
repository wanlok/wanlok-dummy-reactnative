import {useState} from 'react';
import {View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {WButton} from '../../Component/WButton';

export const LoginPage = () => {
  const {authorize} = useAuth0();
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
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
      {/* {error && <Text>{error.message}</Text>} */}
      <WButton title={'Login'} loading={loading} onPress={onLogin} />
    </View>
  );
};
