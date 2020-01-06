import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';

export default class Detail extends React.PureComponent {
  render() {
    const images = [
      {id: 1, imgUrl: this.props.dataItem.imageUrl},
      {id: 2, imgUrl: this.props.dataItem.imageUrl},
      {id: 3, imgUrl: this.props.dataItem.imageUrl},
      {id: 4, imgUrl: this.props.dataItem.imageUrl},
    ];
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            source={{uri: this.props.dataItem.imageUrl}}
            style={{width: '100%', height: 180, justifyContent: 'flex-end'}}>
            <View style={{marginHorizontal: 10, marginVertical: 10}}>
              <Text style={{color: 'white', fontSize: 25}}>
                {this.props.dataItem.title}
              </Text>
              <Text style={{color: 'white'}}>
                {this.props.dataItem.address.en}
              </Text>
              <Text style={{color: 'white'}}>
                {this.props.dataItem.coordinate.longitude}
              </Text>
            </View>
          </ImageBackground>
          <View>
            <Text
              style={{fontSize: 15, marginHorizontal: 10, marginVertical: 15}}>
              IMAGE
            </Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Image
                  style={{
                    height: 110,
                    width: 160,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }}
                  source={{uri: item.imgUrl}}
                />
              )}
            />
          </View>
          <View style={{marginHorizontal: 10, marginVertical: 15, top: 10}}>
            <Text style={{fontSize: 15}}>DESCRIPTION</Text>
            <Text style={{color: 'gray', marginVertical: 10}}>
              {this.props.dataItem.subtitle.en}
            </Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 15}}>SOCIAL</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginVertical: 15,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: 'white',
  },
});
