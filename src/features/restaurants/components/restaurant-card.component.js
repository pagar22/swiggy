import { React } from 'react';
import { Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';
import StarSVG from '../../../../assets/star';


const RestaurantCard = styled(Card)`
        margin: ${(props) => props.theme.space.s};
        borderRadius: ${(props) => props.theme.sizes.xs};
        backgroundColor: ${(props) => props.theme.colors.bg.light};
    `;

const CardCover = styled(Card.Cover)`
        padding: ${(props) => props.theme.space.m};
        backgroundColor: ${(props) => props.theme.colors.bg.light};
`;

const RestaurantInfo = styled.View`
        padding: ${(props) => props.theme.space.m}; 
        color: ${(props) => props.theme.colors.ui.primary};
`;

const Name = styled.Text`
        fontFamily: ${(props) => props.theme.fonts.heading};
        fontSize: ${(props) => props.theme.fontSizes.body};
    `;

const Address = styled.Text`
        fontFamily: ${(props) => props.theme.fonts.body};
        fontSize: ${(props) => props.theme.fontSizes.caption};
`;

const Star = styled(StarSVG)`
        height: 20px;
        width: 20px;
`;

const StarRow = styled.View`
        flexDirection: row;
        paddingTop: ${(props) => props.theme.space.s}; 
        paddingBottom: ${(props) => props.theme.space.s}; 

`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Flour Works',
        photos = [
            'http://www.theflourworks.com/wp-content/uploads/2022/01/tfw02.jpg',
        ],
        address = 'Kalyani Nagar',
        rating = 4.6,
    } = restaurant;


    let i = 1;
    const ratingStars = (Array.from(new Array(Math.round(rating)))).map(() => (<Star key={i++} />));

    return (
        <>
            <RestaurantCard>
                <CardCover source={{ uri: photos[0] }} />
                <RestaurantInfo>
                    <Name>{name}</Name>
                    <StarRow>
                        {ratingStars}
                    </StarRow>
                    <Address>{address}</Address>
                </RestaurantInfo>
            </RestaurantCard>
        </>
    );
}