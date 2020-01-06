import React from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  DatePickerAndroid,
} from 'react-native';
import {Colors} from '../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import ToDoItem from './ToDoItem';
import {ToDoListData} from '../../utils/Data';
import {connect} from 'react-redux';
import * as addTaskAction from '../../Redux/ToDoRedux/actions';
import _ from 'lodash';

class ToDoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
      chosenDate: new Date(),
      androidDate: `${new Date().getUTCDate()}/${new Date().getUTCMonth() +
        1}/${new Date().getUTCFullYear()}`,
      value: 50,
      title: '',
      data: ToDoListData.DATA,
    };
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  setDateAndroid = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        minDate: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({androidDate: `${day}/${month + 1}/${year}`});
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  renderItem = ({item, index}) => {
    return (
      <ToDoItem
        item={item}
        index={index}
        data={this.state.DATA}
        id={item.id}
        componentId={this.props.componentId}
      />
    );
  };
  addTask = () => {
    let item = {
      id: _.random(5, 115),
      title: this.state.title,
      status: false,
      date: this.state.androidDate,
    };
    this.props.addTask1(item);
  };

  render() {
    const configData = _(this.props.tasks)
      .groupBy(item => item.date)
      .map((value, key) => ({title: key, data: value}))
      .value();
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                <TextInput
                  style={styles.addInput}
                  placeholder="Enter todo"
                  value={this.state.title}
                  onChangeText={title => this.setState({title})}
                />
                <View>
                  <TouchableOpacity onPress={() => this.setDateAndroid()}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderTopColor: Colors.darkGray,
                        borderBottomColor: Colors.darkGray,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        paddingVertical: 7,
                      }}>
                      <Icon
                        style={{
                          marginHorizontal: 5,
                          backgroundColor: Colors.primary,
                          paddingHorizontal: 7,
                          paddingVertical: 5,
                          borderRadius: 25,
                        }}
                        name="ios-calendar"
                        size={25}
                        color="white"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.addContainer}>
                  <TouchableOpacity onPress={this.addTask}>
                    <Icon name="ios-add-circle" size={35} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.setDateAndroid()}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                }}>
                <Text style={{fontSize: 16}}>Date: </Text>
                <Text style={{fontSize: 16}}>{this.state.androidDate}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <SafeAreaView style={{flex: 5.5, marginHorizontal: 15}}>
          <SectionList
            sections={configData}
            showsVerticalScrollIndicator={false}
            extraData={this.props.tasks}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
            renderSectionHeader={({section: {title}}) => (
              <Text
                style={{
                  color: Colors.error,
                  fontSize: 25,
                  marginVertical: 10,
                  top: 15,
                }}>
                {title}
              </Text>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.Todo.tasks,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTask1: newTask => dispatch(addTaskAction.addTask(newTask)),
    toggleTodo: id => dispatch(addTaskAction.toggleTodo(id)),
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {flex: 1, paddingVertical: 15},
  image: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    left: 5,
    marginVertical: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: 'white',
  },

  buttonDone: {
    flex: 1,
    paddingVertical: 10,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  isDisable: {
    flex: 1,
    backgroundColor: '#787878',
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  buttonUndone: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    top: 10,
  },
  textId: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    top: 20,
  },
  quantityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#b0b0b0',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addInput: {
    flex: 4.5,
    borderWidth: 1,
    borderColor: Colors.darkGray,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightColor: 'white',
    paddingLeft: 15,
  },
  addContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.darkGray,
    backgroundColor: Colors.divider,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  trashContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 15,
  },
  toDoListTitle: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 15,
  },
});
