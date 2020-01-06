import {Navigation} from 'react-native-navigation';

export const pushBottomTab = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTab: {
                  text: 'Home',
                  icon: require('../../src/image/metrostation-black-home-icon-png-clipart.jpg'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  selectedTextColor: 'blue',
                },
              },
            },
          },
          {
            component: {
              name: 'ToDoList',
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'ToDoList',
                  icon: require('../../src/image/metrostation-black-home-icon-png-clipart.jpg'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  selectedTextColor: 'blue',
                },
              },
            },
          },
          {
            component: {
              name: 'UserProfile',
              passProps: {
                text: 'This is tab 3',
              },
              options: {
                bottomTab: {
                  text: 'User Profile',
                  icon: require('../../src/image/metrostation-black-home-icon-png-clipart.jpg'),
                  testID: 'THIRD_TAB_BAR_BUTTON',
                  selectedTextColor: 'blue',
                },
              },
            },
          },
        ],
      },
    },
  });
};
