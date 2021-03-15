import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import BtnSwitch from '../btnSwitch/BtnSwitch';


function WebsocketScreen({navigation}) {
    const [isPaused, setPause] = useState(true);
    const [orders, setOrders] = useState([]);
    const ws = useRef(null);

    const currencyPair = 'btcusd';

    useEffect(() => {
        ws.current = new WebSocket("wss://ws.bitstamp.net");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        return () => {
            ws.current.close();
        };
    }, [currencyPair]);

    

    const subscribe = {
        event: 'bts:subscribe',
        data: {
            channel: `order_book_${currencyPair}`
        }
    };

    useEffect(() => {
        if (!ws.current) return;

        ws.current.onopen = () => {
            ws.current.send(JSON.stringify(subscribe));
        };

        ws.current.onmessage = e => {
            if (isPaused) return;
            const message = JSON.parse(e.data);
            // console.log("e", message);
            setOrders(message.data)
        };
    }, [isPaused]);

    // const getLastElement = (col) => {
    //     for(let i = 0; i <= col.length; i++){
    //     return col[0];
    //     }
    // }
   

    const { bids, asks } = orders;
    const orderRows = (arr) =>
        arr &&
        arr.map((item, index) => (
            <View key={index}>
                <Text> {item[0]} </Text>
                {/* <Text> {item[100]} </Text> */}
            {/* <Text> {getLastElement(item)} </Text> */}
            </View>
        ));

    const orderHead = (title) => (
            <View>
                <Text>{title}</Text>
            </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Live Bitcoin rates</Text>
            </View>
            <View>
                <Text>{orderHead("Bids")}</Text>
                <Text>{orderRows(bids)}</Text>
            </View>

            <View>
                <Text>{orderHead("Asks")}</Text>
                <Text>{orderRows(asks)}</Text>
            </View>

            <View style={styles.btnView} >
                <Button bordered 
                        onPress={() => setPause(!isPaused)} 
                        title={!isPaused ? "Stop/Start" : "Stop/Start"}
                        style={styles.btn}
                       >
                <Text>Stop/Start</Text>
                </Button>
            </View>
            <BtnSwitch navigation={navigation}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white'
    },
    title:{
        color: 'green',
        fontSize: 20,
        textAlign: 'center'
    },
    btn:{
        width: 170,
        flex: 1,
        justifyContent: 'center',
        borderColor: 'black',
        marginHorizontal: '30%',
        marginVertical: 70,
    },

})

export default WebsocketScreen;