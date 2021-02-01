import React from 'react';
import Dashboard from '../pages/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const { Navigator, Screen } = AppStack;

const AppRoutes = () => {
    return(
        <Navigator>
            <Screen name='Dashboard' component={Dashboard} />
        </Navigator>
    );
}

export default AppRoutes;