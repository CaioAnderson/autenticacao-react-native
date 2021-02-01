import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

export default function SignIn() {
    const { signIn } = useContext(AuthContext);

    function handleSignIn(){
        signIn();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Sign In' onPress={handleSignIn}></Button>
        </View>
    )
};