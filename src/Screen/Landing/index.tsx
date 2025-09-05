import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, screens} from '../../App';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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

const HomeScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}) => {
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

export default HomeScreen;
