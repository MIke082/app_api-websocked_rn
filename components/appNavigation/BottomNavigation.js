import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RestApiScreens from '../screens/RestApiScreen';
import WebsocketScreens from '../screens/WebsocketScreen';

const TabNavigation = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <NavigationContainer >
            <TabNavigation.Navigator>
                <TabNavigation.Screen name="RestApi" component={RestApiScreens} />
                <TabNavigation.Screen name="Websocket" component={WebsocketScreens} />
            </TabNavigation.Navigator>
        </NavigationContainer>
    );
}

