import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import BtnSwitch from '../btnSwitch/BtnSwitch';


function WebsocketScreen({ navigation }) {
    const [isStart, setStart] = useState(true);
    const [orders, setOrders] = useState([]);
    const ws = useRef(null);

    const currencyPair = 'btcusd';

    useEffect(() => {
        ws.current = new WebSocket("wss://ws.bitstamp.net");

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
            if (isStart) return;
            const message = JSON.parse(e.data);
            setOrders(message.data)
        };
    }, [isStart]);

    const stylGr = {
        color: 'green'
    }

    const stylRd = {
        color: 'red'
    }

    const { bids, asks } = orders;

    const orderRows = (arr) =>
    (
        <View style={styles.changeColorView}>
            <Text> {arr && arr.shift()[0]} </Text>
            <Text style={(arr && arr.pop()[0]) > (arr && arr[arr.length - 2][0]) ? stylGr : stylRd} > {arr && arr.pop()[0]} </Text>
            <Text style={(arr && arr[arr.length - 2][0]) < (arr && arr.pop()[0]) ? stylRd : stylGr} > {arr && arr[arr.length - 2][0]}</Text>
        </View>
    )

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
            <View style={styles.textView}>
                <Text>{orderHead("Bids")}</Text>
                <Text>{orderRows(bids)}</Text>
            </View>

            <View style={styles.textView}>
                <Text>{orderHead("Asks")}</Text>
                <Text>{orderRows(asks)}</Text>
            </View>

            <View style={styles.btnView} >
                <Button bordered
                    onPress={() => setStart(!isStart)}
                    title={!isStart ? "Stop/Start" : "Stop/Start"}
                    style={styles.btn}
                >
                    <Text>Stop/Start</Text>
                </Button>
            </View>
            <BtnSwitch navigation={navigation} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'

    },
    title: {
        color: 'green',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    btn: {
        width: 170,
        flex: 1,
        justifyContent: 'center',
        borderColor: 'black',
        marginHorizontal: '30%',
        marginVertical: 50,
    },
    textView: {
        marginTop: 20
    },
    changeColorView: {
        flexDirection: 'row',
    }

})

export default WebsocketScreen;