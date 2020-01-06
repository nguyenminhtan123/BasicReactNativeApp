import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import TouchableButton from '../../components/TouchableButton';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as loginAction from '../../Redux/Authentication/Login/actions';
import {AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';

class UserProfile extends Component {
  onLogout = () => {
    console.log('logout');
    //this.props.logout();
    AsyncStorage.clear();
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            topBar: {
              visible: false,
            },
          },
          children: [
            {
              component: {
                name: 'Login',
              },
            },
          ],
        },
      },
    });
  };
  render() {
    return (
      <View style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <ImageBackground
              style={{flex: 1}}
              source={{
                uri:
                  'https://petstoresaigon.com/wp-content/uploads/2018/10/unleashed-corgi-people-promo-600x400.jpg',
              }}
              blurRadius={3}>
              <View style={styles.profileContainer}>
                <View>
                  <Image
                    source={{
                      uri:
                        'https://i.pinimg.com/originals/a3/54/2d/a3542d1a2c27d8ad80862cfb9e05bfb6.jpg',
                    }}
                    style={styles.avatar}
                  />
                </View>

                <View>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    Nguyen Minh Tan
                  </Text>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    0975675720
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View>
            <TouchableButton buttonTitle="Logout" onPress={this.onLogout} />
          </View>
          {/* <RowDirect
            rowTitle="Personal Information"
            onPress={this.goToProfile}
          />
          <RowDirect
            rowTitle="Change password"
            onPress={this.goToChangePassword}
          />
          <RowDirect rowTitle="Share app" onPress={this.onShare} />
          <RowDirect
            icon="ic-logout"
            rowTitle={'Logout'}
            onPress={this.logout}
          /> */}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.Todo,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    logout: () => dispatch(loginAction.logout()),
  };
};
// eslint-disable-next-line prettier/prettier
//export default UserProfile;
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    height: 230,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 135,
    width: 135,
    borderRadius: 100,
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
    bottom: 10,
  },
  infoUser: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
