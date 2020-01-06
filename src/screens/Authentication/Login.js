import React from 'react';
import SpecialInput from '../../components/SpecialInput';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import TouchableButton from '../../components/TouchableButton';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import * as registerAction from '../../Redux/Authentication/Register/actions';
import * as loginAction from '../../Redux/Authentication/Login/actions';
import {connect} from 'react-redux';
import {Colors} from '../../themes';

class Login extends React.Component {
  static options(passProps) {
    return {
      topBar: {},
    };
  }
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  focusNextField(nextField) {
    this[nextField].focus();
  }
  onLogIn = () => {
    if (!this.username.getText()) {
      this.username.focus();
      return null;
    }
    if (!this.email.getText()) {
      this.email.focus();
      return null;
    }

    if (!this.password.getText()) {
      this.password.focus();
      return null;
    }
    const data = {
      username: this.username.getText(),
      email: this.email.getText(),
      password: this.password.getText(),
    };
    this.setState({isLoading: true});
    this.props.login(data);
  };

  onPush = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Register',
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title',
            },
          },
        },
      },
    });
    // const data = {
    //   username: 'tannguyen11',
    //   email: 'tata469936@gmail.com',
    //   password: '123456789',
    //   name: 'nguyenminhanh',
    //   phoneNumber: '0975675720',
    // };
    // this.props.register(data);
  };

  render() {
    return (
      <ScrollView style={{top: 20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>
            ĐĂNG KÝ
          </Text>
        </View>

        <View style={{flex: 1, marginHorizontal: 15}}>
          <SpecialInput
            title="User name"
            ref={ref => {
              this.username = ref;
            }}
            isRequired
            validateType="username"
            value="tannguyen1"
            errorMessage={'User name is invalid'}
            placeholder={'User name'}
            onSubmitEditing={() => {
              this.focusNextField('email');
            }}
          />
          <SpecialInput
            title="Email"
            ref={ref => {
              this.email = ref;
            }}
            isRequired
            validateType="email"
            value="tata46996@gmail.com"
            errorMessage={'Email is invalid'}
            placeholder={'Email'}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
          />

          <SpecialInput
            title="Mật khẩu"
            ref={ref => {
              this.password = ref;
            }}
            // secureTextEntry
            isRequired
            validateType="password"
            errorMessage={'Password is invalid'}
            placeholder={'Password'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableButton
            buttonTitle="Đăng nhập"
            onPress={this.onLogIn}
            isOutlineMode={true}
          />
          <TouchableButton buttonTitle="Đăng ký" onPress={this.onPush} />
        </View>
        {this.state.isLoading !== false ? (
          <View style={{marginTop: 20}}>
            <ActivityIndicator size={45} color={Colors.primary} />
          </View>
        ) : (
          <View>
            <ActivityIndicator size={45} color="white" />
          </View>
        )}
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  console.log('store', state);
  return {
    tasks: state.Todo.tasks,
    token: state.loginReducer.token,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    register: data => dispatch(registerAction.register(data)),
    login: data => dispatch(loginAction.login(data)),
  };
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonContainer: {flex: 1, flexDirection: 'row', justifyContent: 'center'},
  title: {fontSize: 30},
});
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Login);
