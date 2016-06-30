
import React, {Component} from 'react';

import {
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
                        type:'back'
                    }
                ]}

                center={{
                    title: '主标题',
                    subTitle: '副标题',
                    onPress: ()=>{alert('click title')}
                }}

                right={[
                    {
                        type:'home'
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




