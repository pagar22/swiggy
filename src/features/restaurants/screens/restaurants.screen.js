import { React } from 'react';
import { useState } from 'react/cjs/react.development';
import { Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-card.component';
import styled from 'styled-components/native';

const FullSafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space.m};

`;

const ListView = styled.View`
    padding: ${(props) => props.theme.space.m};
`;
export const RestaurantScreen = () => {

  return (
    <>
      <FullSafeArea>
        <SearchContainer>
          <Searchbar placeholder='Restaurants' />
        </SearchContainer>
        <ListView>
          <RestaurantInfoCard />
        </ListView>
      </FullSafeArea >
    </>
  )
}
