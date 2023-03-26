import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import style from '../src/style/style';
import news_data from './news_data.json';
import banner_data from './news_banner_data.json';

export default function App() {
  const NewCard = ({item}: any) => {
    console.log(item);

    return (
      <View>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>News</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal={true}>
              {banner_data.map(item => (
                <Image
                  style={styles.banner_image}
                  source={{uri: item.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          data={news_data}
          renderItem={({item}) => <NewCard item={item}></NewCard>}
          keyExtractor={data => data.u_id.toString()}></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  headerTitle: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  image: {
    height: Dimensions.get('window').width / 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop:5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  description: {
    fontSize: 16,
    padding: 5,
    marginBottom: 5,
  },
  author: {
    textAlign: 'right',
  },
  banner_image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
});
