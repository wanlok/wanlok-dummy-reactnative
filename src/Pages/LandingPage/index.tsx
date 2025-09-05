import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useAuth0} from 'react-native-auth0';
import {AuthenticatedRootStackParamList} from '../../AppStack';

const styles = StyleSheet.create({
  list: {
    height: '100%',
  },
  itemPressable: {
    backgroundColor: 'white',
  },
  item: {
    padding: 16,
  },
  itemName: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});

const screens: {
  name: string;
  screen: any;
}[] = [
  {
    name: 'Starter',
    screen: 'Starter',
  },
  {
    name: 'Payment',
    screen: 'Payment',
  },
  {
    name: 'Rive',
    screen: 'Rive',
  },
  {
    name: 'Rive 2',
    screen: 'Rive2',
  },
  {
    name: 'Loan List',
    screen: 'LoanList',
  },
];

const LandingPage = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AuthenticatedRootStackParamList>;
}) => {
  const {clearSession} = useAuth0();

  const onLogout = async () => {
    try {
      await clearSession();
      // navigation.replace('Login');
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
            style={styles.list}
            data={screens}
            renderItem={({item, index}) => (
              <Pressable
                android_ripple={{color: 'blue'}}
                onPress={() => {
                  navigation.navigate(item.screen);
                }}
                style={styles.itemPressable}>
                {index > 0 && <View style={styles.separator} />}
                <View style={styles.item}>
                  <Text style={styles.itemName}>{item.name}</Text>
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
