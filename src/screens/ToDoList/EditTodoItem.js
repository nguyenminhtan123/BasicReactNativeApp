import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {Colors} from '../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {ToDoListData} from '../../utils/Data';
import {connect} from 'react-redux';
import * as addTaskAction from '../../Redux/ToDoRedux/actions';
import SpecialInput from '../../components/SpecialInput';
import TouchableButton from '../../components/TouchableButton';

class EditTodoItem extends Component {
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

  render() {
    const {item} = this.props;
    const Disable = item.status === false;
    return (
      <View>
        <SpecialInput
          title="Date"
          ref={ref => {
            this.password = ref;
          }}
          value="tan461999@gmail.com"
          secureTextEntry
          isRequired
          validateType="empty"
          errorMessage={'Password is invalid'}
          placeholder={'Password'}
        />
        <SpecialInput
          title="Title"
          ref={ref => {
            this.password = ref;
          }}
          value="tan461999@gmail.com"
          secureTextEntry
          isRequired
          validateType="empty"
          errorMessage={'Password is invalid'}
          placeholder={'Password'}
        />
        <TouchableButton
          buttonTitle="Save"
          onPress={this.onLogIn}
          isOutlineMode={true}
        />
      </View>
      //   <View style={styles.itemContainer}>
      //     {Disable ? (
      //       <View style={styles.isDisable}>
      //         <Text style={styles.toDoListTitle}>Todo List</Text>
      //       </View>
      //     ) : (
      //       <View style={styles.textId}>
      //         <Text style={styles.toDoListTitle}>Todo List</Text>
      //       </View>
      //     )}

      //     <View style={styles.infoContainer}>
      //       <TouchableWithoutFeedback onPress={() => this.onDoneTask(item.id)}>
      //         {Disable ? (
      //           <View style={styles.buttonUndone}>
      //             <Icon
      //               name="ios-radio-button-off"
      //               size={30}
      //               color={Colors.darkGray}
      //             />
      //           </View>
      //         ) : (
      //           <View style={styles.buttonDone}>
      //             <Icon
      //               name="ios-checkmark-circle"
      //               size={30}
      //               color={Colors.primary}
      //             />
      //           </View>
      //         )}
      //       </TouchableWithoutFeedback>
      //       <View style={styles.info}>
      //         <View style={{flex: 1}}>
      //           <Text style={{fontSize: 18}}>{item.title}</Text>
      //         </View>
      //       </View>
      //       <View style={styles.trashContainer}>
      //         <TouchableWithoutFeedback onPress={() => this.deleteTask(item.id)}>
      //           <Icon name="ios-close-circle" size={30} color={Colors.error} />
      //         </TouchableWithoutFeedback>
      //       </View>
      //     </View>
      //   </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditTodoItem);
