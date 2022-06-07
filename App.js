import { useState } from 'react/cjs/react.development';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

const isAndroid = Platform.OS === 'android';
export default function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SafeAreaView style={{
        flex: '1',
        flexDirection: 'column',
        marginTop: isAndroid ? StatusBar.currentHeight : 0,

      }}>
        <View style={{
          backgroundColor: 'lightgreen',
          padding: 16,
        }}>
          <Searchbar
            placeholder='Restaurants'
            onChangeText={(query) => { setSearchQuery(query); console.log(searchQuery) }}
            value={searchQuery}
          />
        </View>
        <View style={{
          backgroundColor: 'lightblue',
          padding: 16,
          flex: 1,
        }}>
          <Text>List</Text>
        </View>
      </SafeAreaView >
      <ExpoStatusBar style='auto' />
    </>

  );
}

const styles = StyleSheet.create({

});
