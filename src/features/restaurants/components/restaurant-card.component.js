import { React } from 'react';
import { Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
        margin: ${(props) => props.theme.space.s};
        backgroundColor: ${(props) => props.theme.colors.bg.light};
    `;

const CardCover = styled(Card.Cover)`
        padding: ${(props) => props.theme.space.m};
        backgroundColor: ${(props) => props.theme.colors.bg.light};    `;

const CardText = styled.Text`
        padding: ${(props) => props.theme.space.m};
        color: ${(props) => props.theme.colors.ui.primary};
    `;

export const RestaurantInfo = () => {

    return (
        <>
            <RestaurantCard>
                <CardCover source={require('../../../../assets/tfw02.jpeg')} />
                <CardText>
                    Flour Works
                </CardText>
            </RestaurantCard>
        </>
    );
}