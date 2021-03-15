import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const BtnSwitch = ({ navigation }) => {

   
    return (
        <View style={styles.container} >
            <Button 
                style={styles.btn}
                title='Websocket' 
                color='grey'
                onPress={()=> navigation.navigate('Websocket')}
            />
            <Button transparent
                style={styles.btn}
                title='Rest Api' 
                color='grey'
                onPress={()=> navigation.navigate('RestApi')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'absolute',
        top: 630,      
        left: 100,
        flexDirection: 'row',

    },
  });

export default BtnSwitch;