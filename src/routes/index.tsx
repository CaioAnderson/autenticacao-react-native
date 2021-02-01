import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import authContext from '../contexts/auth';

import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.routes';

const Routes = () => {
    const { signed, loading } = useContext(authContext);
    if (loading) {
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size='large' color='#808080' />
        </View>
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;

}


export default Routes;