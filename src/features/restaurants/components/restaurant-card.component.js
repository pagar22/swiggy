import { React } from 'react';
import { Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
        borderRadius: ${(props) => props.theme.sizes.xs};
        shadowColor: ${(props) => props.theme.colors.bg.light};
        padding: ${(props) => props.theme.sizes.xs};
    `;

const CardCover = styled(Card.Cover)`
        margin: ${(props) => props.theme.sizes.xs};
        backgroundColor: ${(props) => props.theme.colors.bg.white};    `;

const CardText = styled.Text`
        padding: 12px;
        fontSize: ${(props) => props.theme.fontSizes.body}
        color: ${(props) => props.theme.colors.text.primary};
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