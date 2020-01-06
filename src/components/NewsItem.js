import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class NewsItem extends React.PureComponent {
  onPushScreen = () => {
    // Navigation.push(this.props.componentId, {
    //   component: {
    //     name: 'Detail',
    //     passProps: {
    //       dataItem: this.props.item,
    //     },
    //     options: {
    //       topBar: {
    //         visible: false,
    //       },
    //     },
    //   },
    // });
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'Detail',
              passProps: {
                dataItem: this.props.item,
              },
              options: {
                topBar: {
                  title: {
                    text: this.props.title,
                  },
                  leftButtons: [
                    {
                      id: 'cancelBtn',
                      text: 'Cancel',
                      color: 'blue',
                      icon: require('../image/metrostation-black-home-icon-png-clipart.jpg'),
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    });
  };
  navigationButtonPressed({buttonId}) {
    if (buttonId === 'cancelBtn') {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === 'saveBtn') {
      alert('saveBtn');
    }
  }
  render() {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View
            style={[
              {
                flex: 1,
                borderRadius: 10,
                width: 300,
              },
              styles.image,
            ]}>
            <TouchableOpacity onPress={this.onPushScreen}>
              <Image
                style={{height: 160, width: '100%', borderRadius: 10}}
                source={{uri: item.imageUrl}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginLeft: 32, marginVertical: 5}}>
          <Text style={{color: 'red'}}>{item.date.en}</Text>
        </View>
        <View style={{marginLeft: 32}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
        </View>
        <View style={{marginLeft: 32}}>
          <Text style={{fontSize: 15, color: 'gray'}}>{item.address.en}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
