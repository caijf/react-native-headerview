
import React, {Component} from 'react';

import {
    Dimensions,
    StyleSheet,
    View,
    Text
} from 'react-native';

import HeaderView from 'react-native-headerview';

let SCREEN_WIDTH = Dimensions.get('window').width;

class SearchBox extends Component{
    render(){
        return (
            <View style={styles.searchWrapper}>
                <View style={[styles.searchWrapperInner]}>
                    <View style={[styles.iconSearch]}>
                        <View style={styles.iconSearchRound}></View>
                        <View style={styles.iconSearchLine}></View>
                    </View>
                    <Text style={styles.searchText}>关键字／位置／品牌／酒店名</Text>

                </View>
            </View>
        )
    }
}

export default class MyApp extends Component{

    render(){

        return (
            <HeaderView

                left={[
                    {
                        type:'back'
                    }
                ]}

                center={{
                    view: <SearchBox />
                }}

                right={[
                    {
                        type:'text',
                        value:'地图',
                        onPress:()=>alert('点击地图')
                    }
                ]}
            />
        )
    }
}

const styles = StyleSheet.create({
    
    searchWrapper: {
        borderRadius: 2,
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 88,
        height: 25,
        alignItems: 'center'
    },

    searchWrapperInner:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchText: {
        color: '#bbb',
        fontSize: 10
    },

    iconSearch: {
        flex: 1,
        marginRight: 5
    },
    iconSearchRound: {
        width: 8,
        height: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#bbb'
    },
    iconSearchLine: {
        width: 1,
        height: 5,
        backgroundColor: '#bbb',
        transform: [{rotate: '-45deg'}],
        position:'absolute',
        left: 8,
        top: 5
    }

})




