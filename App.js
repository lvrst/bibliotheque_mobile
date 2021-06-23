import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Book from './Book';

export default function App() {
  const books = [
    {
      title: "Harry Potter à l'école",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius! Ducimus enim cum velit, dicta quam aliquid provident maxime placeat! Id reprehenderit quos maxime?"
    },
    {
      title: "Harry Potter fait le ménache",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eaque veniam, nihil quam dolor qui similique iure perspiciatis!"
    },
    {
      title: "Kirikou est petit",
      description: "Mais c'est mon ami."
    },
    {
      title: "Kirikou n'est pas grand",
      description: "Mais il est vaillant."
    },
    {
      title: "Martine à la plage",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eaque veniam, nihil quam dolor qui similique iure perspiciatis!"
    },
    {
      title: "Martine fait le ménache",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eaque veniam, nihil quam dolor qui similique iure perspiciatis!"
    },
    {
      title: "Pierre à l'âge de Pierre",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eaque veniam, nihil quam dolor qui similique iure perspiciatis!"
    }
  ];

  const [searchInput, setSearchInput] = useState("");

  const booksJSX = booksOutput().map(book => {
    return <Book title={book.title} description={book.description} /> 
  })

  function booksOutput() {
    if (searchInput === '' || searchInput === ' ') {
      return books;
    } else {
      let array = [];
      books.map((book) => {
        if (book.title.toLowerCase().includes(searchInput.toLowerCase())) {
          array = [...array, book];
        }
      })
      return array;
    }
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} >Ma bibliothèque</Text>

        <View style={styles.search}>
          <TextInput style={styles.input} value={searchInput}
          onChangeText={(text) => {setSearchInput(text)}}/>
          <Button title="OK" color="red" />
        </View>
        <ScrollView>
          {booksJSX}
        </ScrollView>

        

        
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    width: '100%'
  },
  title: {
    fontSize: 26,
    color: '#f00',
    alignSelf: 'center',
    margin: 10
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    width: 200,
    marginRight: 10,
    paddingLeft: 10
  },
  search: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  poil: {
    color: '#000',
  }

});
