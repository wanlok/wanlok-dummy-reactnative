import {Button, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';

export const LoginPage = () => {
  const {authorize} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
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
      {/* {user && <Text>Logged in as {user.name}</Text>}
      {!user && <Text>Not logged in</Text>}
      {error && <Text>{error.message}</Text>} */}

      <Button onPress={onLogin} title={'Log In'} />
    </View>
  );
};
