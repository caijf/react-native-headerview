
import React, {Component} from 'react';

import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import HeaderView from 'react-native-headerview';

class IconHeart extends Component{
    render(){
        return (
            <View>
                <Image
                    source={
                        require('./icon-heart.png')
                    }
                    width={22}
                    height={18}
                />
            </View>
        )
    }
}
class IconHeartActive extends Component{
    render(){
        return (
            <View>
                <Image
                    source={
                        require('./icon-heart-active.png')
                    }
                    width={22}
                    height={18}
                />
            </View>
        )
    }
}

class HotelName extends Component{
    render(){
        return (
            <View>
                <Text numberOfLines={2}>
                    <Text style={styles.hotelName}>
                        全季酒店（上海虹桥枢纽临空园区店）虹桥国展中心天山西路店
                    </Text>
                    <Text style={styles.hotelType}>&nbsp;&nbsp;舒适型</Text>
                </Text>
            </View>
        )
    }
}

export default class MyApp extends Component{

    constructor(){
        super()

        this.state = {
            clickedHeart: false
        }
    }

    _clickHeartIcon(){

        this.setState({
            clickedHeart: !this.state.clickedHeart
        })
    }

    render(){

        let heartConfig = {
            type: 'icon',
            view: <IconHeart />,
            onPress: this._clickHeartIcon.bind(this)
        }

        if(this.state.clickedHeart){
            heartConfig.view = <IconHeartActive />
        }

        return (
            <HeaderView

                left={[
                    {
                        type:'back'
                    }
                ]}

                leftStyle={{
                    flex: 0,
                    width:44
                }}
                rightStyle={{
                    flex: 0,
                    width:88,
                    // backgroundColor: 'red'
                }}

                center={{
                    view: <HotelName />,
                    style: {
                        flex:1,
                        alignItems: 'stretch',
                        overflow: 'hidden',
                        paddingLeft: 10,
                        paddingRight: 10,
                        // backgroundColor: 'blue'
                    }
                }}

                right={[
                    // {
                    //     type: 'text',
                    //     value: '分享'
                    // },
                    {
                        type: 'share'
                    },
                    heartConfig
                ]}
            />
        )
    }
}

const styles = StyleSheet.create({
    
    hotelName:{
        fontSize:14,
        lineHeight: 14,
        color: '#fff'
    },

    hotelType: {
        fontSize: 10,
        color: '#fff',
        opacity: 0.5
    }

})


