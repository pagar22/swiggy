import { React } from 'react';
import { useState } from 'react/cjs/react.development';
import { Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-card.component';

const isAndroid = Platform.OS === 'android';

export const RestaurantScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SafeAreaView style={{
        flex: '1',
        flexDirection: 'column',
        marginTop: isAndroid ? StatusBar.currentHeight : 0,

      }}>
        <View style={{
          backgroundColor: 'purple',
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
          <RestaurantInfo />
        </View>
      </SafeAreaView >
    </>
  )
}
