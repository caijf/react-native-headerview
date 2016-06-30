
import React, {Component} from 'react';

import {
    AppRegistry,
    View,
    Image
} from 'react-native';

import HeaderView from 'react-native-headerview';

export default class MyApp extends Component{

    render(){
        return (
            <HeaderView
                left={[
                    {
                        type: 'back'
                    },
                    {
                        type: 'text',
                        value: 'test'
                    }
                ]}

                center={{
                    title: '主标题'
                }}

                right={[
                    {
                        type: 'share'
                    },
                    {
                        type: 'text',
                        value: '登录',
                        onPress: ()=>{alert('登录')}
                    }
                ]}
            />
        )
    }
}



