
import React, {Component} from 'react';

import HeaderView from 'react-native-headerview';

export default class MyApp extends Component{

    render(){

        return (
            <HeaderView

                statusBar={{
                    barStyle: 'default',
                    tintColor: 'gray'
                }}

                left={[
                    {
                        type:'back'
                    },
                    // {
                    //     type: 'text',
                    //     value: '登录',
                    //     onPress: ()=>{alert('登录')}
                    // }
                ]}

                center={{
                    title: '主标题',
                    subTitle: '副标题',
                    hasDropDown: true
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



