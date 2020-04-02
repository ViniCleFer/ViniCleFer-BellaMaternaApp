import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Conversas from '~/pages/Conversations';
import Profissionais from '~/pages/Professionals';
import Pessoas from '~/pages/Persons';
import Mais from '~/pages/More';

const TabStack = createBottomTabNavigator(
  {
    Conversas,
    Profissionais,
    Pessoas,
    Mais,
  },
  {
    tabBarOptions: {
      activeTintColor: '#A51C60',
      inactiveTintColor: '#958FA3',
      style: {
        backgroundColor: '#FFF',
        height: hp('10.56%'),
      },
      labelStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2.11%'),
      },
    },

    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Icon;
        let iconName;

        if (routeName === 'Conversas') iconName = 'comments';
        else if (routeName === 'Profissionais') iconName = 'user-md';
        else if (routeName === 'Pessoas') iconName = 'users';
        else if (routeName === 'Mais') iconName = 'ellipsis-h';

        return (
          <IconComponent
            style={{ marginTop: hp('1.94%') }}
            name={iconName}
            size={20}
            color={tintColor}
          />
        );
      },
    }),
  }
);

export default TabStack;
