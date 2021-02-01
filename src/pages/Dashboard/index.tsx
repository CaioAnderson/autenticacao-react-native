import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

export default function Dashboard() {
    const { signOut } = useContext(AuthContext);

    function handleSignOut(){
        signOut();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Sign Out' onPress={handleSignOut}></Button>
        </View>
    )
};