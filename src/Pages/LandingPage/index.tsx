import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useAuth0} from 'react-native-auth0';
import {AuthenticatedRootStackParamList, screens} from '../../AppStack';

const LandingPage = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AuthenticatedRootStackParamList>;
}) => {
  const {clearSession} = useAuth0();

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Logout" onPress={onLogout} />,
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <FlatList
            style={{
              height: '100%',
            }}
            data={screens}
            renderItem={({item, index}) => (
              <Pressable
                android_ripple={{color: 'blue'}}
                onPress={() => {
                  navigation.navigate(item.screen);
                }}
                style={{
                  backgroundColor: 'white',
                }}>
                {index > 0 && (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: 'black',
                    }}
                  />
                )}
                <View
                  style={{
                    padding: 16,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(_, index) => `navigationItem${index}`}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default LandingPage;
