import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FC, useEffect, useReducer, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import MyTextField from '../component/MyTextField';
import MyButton from '../component/MyButton';
import axios from 'axios';

interface Student {
  name: string;
  course: string;
}

interface a {
  data: Student[] | null;
  errorMessage: string | null;
  downloading: boolean;
}

const initialState: a = {
  data: null,
  errorMessage: null,
  downloading: false,
};

interface Action {
  type: 'DOWNLOAD' | 'SUCCESS' | 'ERROR';
  payload?: any;
}

const reducer = (state: a, action: Action) => {
  switch (action.type) {
    case 'DOWNLOAD':
      return {
        ...state,
        data: null,
        errorMessage: null,
        downloading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: null,
        downloading: false,
      };
    case 'ERROR':
      return {
        ...state,
        data: null,
        error: action.payload,
        downloading: false,
      };
    default:
      return state;
  }
};

const download = (dispatch: React.Dispatch<Action>) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3YW5sb2siLCJleHAiOjE3MjE0NzM1Nzl9.XIXv-myWHjLifZXuUqhWs2a7YlPbNKYgsyU3JT0tVuY';
  dispatch({type: 'DOWNLOAD'});
  const serverAddress = 'http://10.0.2.2:8000/student/';
  console.log(serverAddress);
  axios
    .get(serverAddress, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      console.log(response.data);
      dispatch({type: 'SUCCESS', payload: response.data});
    })
    .catch(error => {
      dispatch({type: 'ERROR', payload: error.message});
    });
};

const LandingScreen: FC<{
  navigation: NativeStackNavigationProp<RootStackParamList, 'LandingScreen'>;
}> = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {data, errorMessage, downloading} = state;
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'blue'}}>
        {downloading && <Text>Downloading</Text>}
        {!downloading && errorMessage && <Text>{errorMessage}</Text>}
        {!downloading &&
          data &&
          data.map((student: Student, index: number) => (
            <Text key={index}>{student.name}</Text>
          ))}
        <Button title="Button" onPress={() => download(dispatch)} />
      </View>
    </View>
  );
};

export default LandingScreen;
