import {Image, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

const uri = 'https://testbank-uat.payidrec.com.au/#!/testbank';

const injectedJavaScript = `
  document.body.children[0].style.display = "none";
  const mainForm = document.getElementById('mainForm');
  const mainFormFieldset = mainForm.children[0];
  mainFormFieldset.children[0].style.display = "none";
  mainFormFieldset.children[1].style.display = "none";
  const mainFormDiv = mainFormFieldset.children[2];
  mainFormDiv.children[0].children[0].style.display = "none";
  mainFormDiv.children[0].children[1].style.paddingLeft = "0px";
  mainFormDiv.children[0].children[1].style.paddingRight = "0px";
  mainFormDiv.children[0].children[1].children[0].style.display = "none";
  mainFormDiv.children[0].children[1].children[2].style.display = "none";
  mainFormDiv.children[0].children[1].children[1].children[1].children[0].children[3].style.display = "none";
`;

const a = (uri: string) => {
  return (
    <WebView
      source={{uri: uri}}
      style={styles.webview}
      injectedJavaScript={injectedJavaScript}
    />
  );
};

const b = (uri: string) => {
  return (
    <View style={styles.webViewContainer}>
      <WebView
        source={{uri: uri}}
        style={styles.webview}
        injectedJavaScript={injectedJavaScript}
      />
    </View>
  );
};

export default () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16
      }}>
      <Image source={require('./logo.png')} resizeMode="contain" style={{ width: "100%", height: 200 }} />
      <WebView
        source={{uri: uri}}
        style={styles.webview}
        injectedJavaScript={injectedJavaScript}
      />
    </View>
  );
};
