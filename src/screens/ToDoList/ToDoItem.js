import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {Colors} from '../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {ToDoListData} from '../../utils/Data';
import {connect} from 'react-redux';
import * as addTaskAction from '../../Redux/ToDoRedux//actions';
import {Navigation} from 'react-native-navigation';

class ToDoItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {ToDoData: ToDoListData.DATA};
  }

  deleteTask = id => {
    this.props.deleteTodo(id);
  };
  onDoneTask = id => {
    console.log('toggle Task: ' + id);
    this.props.toggleTodo(id);
  };
  onPushEdit = () => {
    console.log('hello' + this.props.componentId);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'EditTodoItem',
        // passProps: {
        //   dataItem: this.props.item,
        // },
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    });
  };

  render() {
    const {item} = this.props;
    const Disable = item.status === false;
    return (
      <View style={styles.itemContainer}>
        {Disable ? (
          <View style={styles.isDisable}>
            <Text style={styles.toDoListTitle}>Todo List</Text>
          </View>
        ) : (
          <View style={styles.textId}>
            <Text style={styles.toDoListTitle}>Todo List</Text>
          </View>
        )}

        <View style={styles.infoContainer}>
          <TouchableWithoutFeedback onPress={() => this.onDoneTask(item.id)}>
            {Disable ? (
              <View style={styles.buttonUndone}>
                <Icon
                  name="ios-radio-button-off"
                  size={30}
                  color={Colors.darkGray}
                />
              </View>
            ) : (
              <View style={styles.buttonDone}>
                <Icon
                  name="ios-checkmark-circle"
                  size={30}
                  color={Colors.primary}
                />
              </View>
            )}
          </TouchableWithoutFeedback>
          <View style={styles.info}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18}}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.trashContainer}>
            <TouchableWithoutFeedback onPress={this.onPushEdit}>
              <Icon name="ios-close-circle" size={30} color={Colors.error} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.trashContainer}>
            <TouchableWithoutFeedback onPress={() => this.deleteTask(item.id)}>
              <Icon name="ios-close-circle" size={30} color={Colors.error} />
            </TouchableWithoutFeedback>
          </View>
        </View>
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
    toggleTodo: id => dispatch(addTaskAction.toggleTodo(id)),
    deleteTodo: id => dispatch(addTaskAction.deleteTask(id)),
  };
};
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 10,
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
  },
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
    flex: 3,
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
    flex: 6,
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
    top: 5,
  },
  toDoListTitle: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 15,
  },
});
