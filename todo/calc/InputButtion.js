import React, {Component} from 'react';
import {View, Text} from 'react-native' ;
import Style from './Style';


const InputButton = ({value}) => (
    <View style={styleSet.inputButton}>
        <Text style={styleSet.inputButtionText}>
            {value}
        </Text>
    </View>
)

const styleSet = StyleSheet.creat({
    inputButtion: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: "#91AA9D"
    },
    inputButtionText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex:1,
        flexDirection:'row'
    }
})