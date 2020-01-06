import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../themes';

export default function startApp() {
  Promise.all([
    Ionicons.getImageSource('ios-contact', 25),
    Ionicons.getImageSource('ios-create', 25),
    Ionicons.getImageSource('ios-home', 25),
  ]).then(([contactIcon, todoIcon, homeIcon]) => {
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
                    icon: homeIcon,
                    testID: 'FIRST_TAB_BAR_BUTTON',
                    selectedIconColor: Colors.primary,
                    selectedTextColor: Colors.primary,
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
                    icon: todoIcon,
                    testID: 'SECOND_TAB_BAR_BUTTON',
                    selectedIconColor: Colors.primary,
                    selectedTextColor: Colors.primary,
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
                    icon: contactIcon,
                    testID: 'THIRD_TAB_BAR_BUTTON',
                    selectedIconColor: Colors.primary,
                    selectedTextColor: Colors.primary,
                  },
                },
              },
            },
            {
              component: {
                name: 'MyComponent',
                passProps: {
                  text: 'This is tab 3',
                },
                options: {
                  bottomTab: {
                    text: 'User Profile',
                    icon: contactIcon,
                    testID: 'THIRD_TAB_BAR_BUTTON',
                    selectedIconColor: Colors.primary,
                    selectedTextColor: Colors.primary,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
}
