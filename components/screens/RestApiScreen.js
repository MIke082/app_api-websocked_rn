import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BtnSwitch from '../btnSwitch/BtnSwitch';

const List = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    

    const axiosList = () => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        axiosList();
    }, [] )
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Live Bitcoin rates</Text>
                <View style={styles.listTable}>
                    <Text style={styles.dataList}>ID</Text>
                    <Text style={styles.dataList}>UserId</Text>
                    <Text style={[styles.dataList, {marginLeft: 40}]}>Title</Text>
                </View>
            {todos.map((item, index)=> {
                for(let i = index; i < 10; i++){
                return(
                    <View key={index} style={styles.listOutput}>
                        <Text style={styles.dataListOutputId}>{item.userId} </Text>
                        <Text style={[styles.dataListOutputUserId]}>{item.id} </Text>
                        <Text style={styles.dataListOutputTitle}>{item.title} </Text>
                    </View>
                )}
            })}

            <BtnSwitch style={styles.btnSwitch} navigation={navigation} />

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white'
    },
    title:{
        color: 'green',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 25
    },
        listTable:{
            flexDirection: 'row',
            backgroundColor: 'grey',
            height: 50,
            alignItems: 'center',

        },
        dataList:{
            color: 'white',
            marginLeft: 20,
            fontSize: 20
        },
        listOutput:{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'black',
            
        },
        dataListOutputId:{
            marginLeft: 25,
            fontWeight: 'bold',
            
        },
        dataListOutputUserId:{
            marginLeft: 45,
            fontWeight: 'bold'
        },
            dataListOutputTitle:{
            marginLeft: 65,
            fontWeight: 'bold',
            width: 180
        },
       
    })
export default List;