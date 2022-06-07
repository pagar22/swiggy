import { React } from 'react';
import { useState } from 'react/cjs/react.development';
import { Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-card.component';
import styled from 'styled-components/native';

const TopView = styled.View`
      backgroundColor: purple;
      padding: 16px;
`;

const FullSafeArea = styled.SafeAreaView`
      flex: 1;
      flexDirection: column;
      ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

export const RestaurantScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <FullSafeArea>
        <TopView>
          <Searchbar
            placeholder='Restaurants'
            onChangeText={(query) => { setSearchQuery(query); console.log(searchQuery) }}
            value={searchQuery}
          />
        </TopView>
        <View style={{
          backgroundColor: 'lightblue',
          padding: 16,
          flex: 1,
        }}>
          <RestaurantInfo />
        </View>
      </FullSafeArea >
    </>
  )
}
