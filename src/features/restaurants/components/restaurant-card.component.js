import { React } from 'react';
import { Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantInfo = () => {

    const CardText = styled.Text`
        padding: 12px;
        fontSize: ${(props) => props.theme.fontSizes.body}
        color: ${(props) => props.theme.colors.text.primary};
    `;

    return (
        <>
            <Card style={{ padding: 10, }}>
                <Card.Cover source={require('../../../../assets/tfw02.jpeg')} />
                <CardText>Flour Works</CardText>
            </Card>
        </>
    );
}