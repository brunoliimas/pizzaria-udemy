import React from 'react';
import {View} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes(){
    const isAuthentecated = false;
    const loading = false;

    return(
        isAuthentecated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;