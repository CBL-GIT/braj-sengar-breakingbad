import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    Cast,
    CastDetails
} from "../Screens"

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"App"}
                    component={Cast}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"CastDetails"}
                    component={CastDetails}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
