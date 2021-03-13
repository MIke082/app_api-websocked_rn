import React from 'react';
import { Button, View } from 'react-native';

const BtnSwitch = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', marginLeft: 10, justifyContent: 'center'}}>
            <Button 
                title='Websocket' 
                onPress={()=> navigation.navigate('Websocket')}
            />
            <Button 
                title='Rest Api' 
                onPress={()=> navigation.navigate('RestApi')}
            />
        </View>
    );
};

export default BtnSwitch;