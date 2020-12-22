import React, {Component} from 'react';
import {View, Text} from 'react-native' ;

const inputButtons = [
    [1,2,3,'/'],
    [4,5,6,"*"],
    [7,8,9,'-'],
    [0,'.','=','+']
];






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