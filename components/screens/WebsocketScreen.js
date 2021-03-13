import React from 'react';
import { View, Text, Button } from 'react-native';
import BtnSwitch from '../btnSwitch/BtnSwitch';

const WebsocketScreens = ({ navigation }) => {
    return (
        <View>
            <Text>Helo from WebsocketScreens </Text>
           
            <Button title="Start stop"/> 
            
            <BtnSwitch navigation={navigation}/>
        </View>
    );
};

export default WebsocketScreens;