import React, { Component } from 'react';
import BtnSwitch from '../btnSwitch/BtnSwitch';
import { getAllListCreator } from '../../store/actions/indes';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';


class RestApiScreens extends Component {

    componentDidMount(){
        this.props.lists();
    }

    render() {
        const maping = () => {
            
        }
        const {navigation} = this.props;
        return (
            <ScrollView>
                <View style={styles.listTable}>
                        <Text style={styles.dataList}>ID</Text>
                        <Text style={styles.dataList}>UserId</Text>
                        <Text style={[styles.dataList, {marginLeft: 40}]}>Title</Text>
                    </View>
            {this.props.list.map((item, index)=> {
                for(let i = index; i < 10; i++){
                return(
                    <View key={index}  style={styles.listOutput}>
                        <Text style={styles.dataListOutputId}>{item.id}</Text>
                        <Text style={[styles.dataListOutputUserId]}>{item.userId}</Text>
                        <Text style={styles.dataListOutputTitle}>{item.title}</Text>
                    </View>
            )}}
            )}
                    <BtnSwitch navigation={navigation} />

            </ScrollView>
        );
    };
};

const mapStateToProps = (state) => {
    return{
        list: state.listReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        lists : () => {
            dispatch(getAllListCreator())
        }
    }
}

const styles = StyleSheet.create({
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
        
    },
    dataListOutputId:{
        marginLeft: 25,
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
    },
    dataListOutputUserId:{
        marginLeft: 45,
        fontWeight: 'bold'
    },
        dataListOutputTitle:{
        marginLeft: 65,
        fontWeight: 'bold'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RestApiScreens);