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

export const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'Flour Works',
        photos = [
            'http://www.theflourworks.com/wp-content/uploads/2022/01/tfw02.jpg',
        ],
        address = 'Kreuzburg',
        rating = 4,
    } = restaurant;

    return (
        <>
            <RestaurantCard>
                <CardCover source={{ uri: photos[0] }} />
                <CardText>
                    {name}
                </CardText>
            </RestaurantCard>
        </>
    );
}