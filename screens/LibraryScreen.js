import React, {useState} from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';
import { Text, SearchBar, ListItem } from 'react-native-elements';
import {useFonts} from 'expo-font';
import axios from 'axios';


export default function LibraryScreen({navigation}) {

    function goToDetails(item) {
        navigation.navigate('Book detail', {
            book: item,
        });
    }

    let [fontsLoaded] = useFonts({
        'IndieFlower': require('../assets/fonts/IndieFlower-Regular.ttf')
    });

    const [search, setSearch] = useState('');
    

    const [livres, setLivres] = useState([]);

    // const key = 'AIzaSyD_TbRuwlU8QTTi9KX68QAULaSWdsAC4-E';

    function searchContent() {
        if (search.length>0) {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            .then(res => {
                console.log(`${res.data.items[0].volumeInfo.title}`);
                setLivres(res.data.items);
            })
            .catch(() => {
                console.log('Server Error');
              });
        }

    }

    return (
        <View>
                <View>
                {/* <TextInput style={styles.input} value={search}
          onChangeText={(text) => {setSearch(text)}} placeholder="Rechercher un livre" /> */}
                    <SearchBar
                    placeholder="Rechercher un livre"
                    onChangeText={setSearch}
                    value={search}
                    />
                    <Button title="Va chercher" color="red" onPress={searchContent} />
                </View>
                <FlatList 
                data={livres}
                renderItem={({item}) => {         
                    return (
                        <ListItem bottomDivider onPress={goToDetails.bind(this, item)}>
                                <Text>{item.volumeInfo.title}</Text>
                            </ListItem>
                    )}
                }
                keyExtractor={item => item.id.toString()}
                style={styles.list}
                />

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 26,
    color: '#f00',
    alignSelf: 'center',
    margin: 10,
    fontFamily: 'IndieFlower',
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
  list: {
    backgroundColor: 'silver',
    padding: 2,
    width: '100%'
  }
});
