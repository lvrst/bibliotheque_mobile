import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-elements';


export default function BookScreen({route}) {
    const book = route.params.book;
    const volumeInfo = book.volumeInfo;
    const title = volumeInfo.title;
    const description = ("description" in volumeInfo ? volumeInfo.description:'Description indisponible');
    
    const imageLinks = ("imageLinks" in volumeInfo ? volumeInfo.imageLinks:{thumbnail: 'https://via.placeholder.com/200x100'});
    const thumbnail = ("thumbnail" in imageLinks ? `${imageLinks.thumbnail}`:'https://via.placeholder.com/200x100');
    
    const author = ("authors" in volumeInfo ? volumeInfo.authors[0]:'Auteur indisponible ou inexistant');

    const publishedDate = ("publishedDate" in volumeInfo ? volumeInfo.publishedDate:'Date indisponible ou inconnue');

    const date = new Date(publishedDate);
    const dateFR = date.toLocaleString('fr-FR',{
        timeZone: 'Europe/Paris',
        day: '2-digit',
        month: 'long',
        year: 'numeric' // Optionnel
    })

    console.log(typeof thumbnail);
    // const imageLinks = volumeInfo.imageLinks;
    // console.log(imageLinks);
    // const thumbnail = volumeInfo.imageLinks.smallThumbnail;

    console.log(volumeInfo);
    return (
        <Card>
        <Card.Title style={styles.title}>{title}</Card.Title>
        <Card.FeaturedSubtitle style={styles.bookCard}>{author}</Card.FeaturedSubtitle>
        <Text style={styles.bookCard}>{dateFR}</Text>
        <Card.Divider/>
        <Card.FeaturedSubtitle style={styles.bookCard}>{description}</Card.FeaturedSubtitle>
        <Card.Image source={thumbnail}>
            <Text></Text>
        </Card.Image> 
             {/* description, auteur, date de parution, image */}
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase'
    },
    bookCard: {
        color: 'black',
        textAlign: 'center'
    }
})