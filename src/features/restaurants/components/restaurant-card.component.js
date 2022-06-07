import { React } from 'react';
import { Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

export const RestaurantInfo = () => {

    return (
        <>
            <Card style={{ padding: 10, }}>
                <Card.Cover style={{}} source={require('../../../../assets/tfw02.jpeg')} />
                <Card.Content style={{ padding: 10, }}>
                    <Paragraph>Flour Works</Paragraph>
                </Card.Content>
            </Card>
        </>
    )
}