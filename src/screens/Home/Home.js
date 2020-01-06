import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import NewsItem from '../../components/NewsItem';
import {swipeData} from '../../utils/Data';

export default class Home extends React.Component {
  renderItem = ({item, index}) => {
    return (
      <NewsItem
        item={item}
        componentId={this.props.componentId}
        title={item.title}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={swipeData}
          renderItem={this.renderItem}
          keyExtractor={item => item.nameEvent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  image: {
    marginVertical: 10,
    elevation: 15,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: 'white',
  },
});
