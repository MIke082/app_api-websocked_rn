import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import bitcoinImg from '../../assets/img/bitcoinImg.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SplashScreen = ({ navigation }) => {

    const [data, setData] = useState({
        names: '',
        date: ''
    })

    const authorization = () => {
        if (data.names && data.date === '') {
            navigation.replace('RestApi');

        } else {
            console.error('Enter your name and date');
        }
    }

    // const time = () => {
    //     setTimeout = (() => {
    //         navigation.navigate('RestApi')
    //     }, 2000) 
    // }

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={80}
            style={styles.container}>

            <View style={styles.bitImg}>
                <Image source={bitcoinImg} />
            </View>

            <View style={styles.userData}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}>
                <TextInput
                    placeholder='Your name'
                    style={styles.aboutUser}
                    onChangeText={(val) => setData({ ...data, names: val })}
                />
                <TextInput
                    placeholder='Current data'
                    style={styles.aboutUser}
                    keyboardType='numeric'
                    onChangeText={(val) => setData({ ...data, date: val }), authorization}
                />

            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    bitImg: {
        paddingTop: 40,
        alignItems: 'center',
    },
    userData: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 150
    },
    aboutUser: {
        color: 'grey',
        fontSize: 20,
        marginTop: 50
    },

});

export default SplashScreen;