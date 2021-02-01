import React from 'react';
import SignIn from '../pages/SignIn';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const { Navigator, Screen } = AuthStack;

const AuthRoutes = () => {
    return(
        <Navigator>
            <Screen name='SignIn' component={SignIn} />
        </Navigator>
    );
}


export default AuthRoutes;