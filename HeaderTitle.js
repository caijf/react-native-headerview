
import React, {Component, PropTypes} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';

import styles from './HeaderStyle.js';

let NOOP = ()=>{};

export default class HeaderTitle extends Component {

    constructor(){
        super();
        this.state = {
            rotate: new Animated.Value(0),
            toValue: 1
        }
    }

    componentWillMount(){
        if(this.props.defaultDropDownDirection === 'up'){
            this.setState({
                rotate: new Animated.Value(1),
                toValue: 0
            })
        }
    }

    _rotateAnimation(){
        Animated.timing(
            this.state.rotate,
            {toValue: this.state.toValue}
        ).start()
        
        this.setState({
            toValue: Math.abs(this.state.toValue - 1)
        });

    }

    getArrowElement(dir){
        // 样式画的三角形旋转有偏移
        let startMarginTop = -2,
            endMarginTop = 4;

        return (
            <Animated.View style={
                [
                    styles.iconArrow,
                    dir === 'up' ? styles.iconArrowUp : styles.iconArrowDown,
                    {
                        transform: [{
                            rotate: this.state.rotate.interpolate({
                                    inputRange: [0,1],
                                    outputRange: ['-45deg', '135deg']
                                })
                        }],
                        marginTop: this.state.rotate.interpolate({
                                    inputRange: [0,1],
                                    outputRange: [startMarginTop, endMarginTop]
                                })
                    }
                ]
            }></Animated.View>
        )
    }

    _onPress(){

        let {hasDropDown, hasDropDownTransform, onPress} = this.props;

        if(hasDropDown && hasDropDownTransform){
            this._rotateAnimation();
        }

        onPress && onPress();
    }

    render(){

        let {view, title, subTitle, onPress, hasDropDown, hasDropDownTransform, defaultDropDownDirection, style} = this.props;

        let titleContainer, subTitleContainer, dropDownContainer;

        // 支持自定义view
        if(typeof view !== 'boolean' && view){
            titleContainer = view;
        }else{
            if(title !== ''){
                titleContainer=<Text style={styles.title} numberOfLines={1}>{title}</Text>;
            }

            if(subTitle !== ''){
                subTitleContainer=<Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>;
            }

            if(hasDropDown){
                dropDownContainer= this.getArrowElement(defaultDropDownDirection);
            }
        }

        return (
            <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
                    <View style={[styles.headerCenter, style]}>
                        <View style={[styles.headerCenterInner ]}>
                            <View style={styles.titleWrapper}>
                                {titleContainer}
                                {subTitleContainer}
                            </View>
                            {dropDownContainer}
                        </View>
                    </View>
            </TouchableWithoutFeedback>
        )
    }

    static propTypes = {
        view: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.bool
        ]),
        title: PropTypes.string,
        subTitle: PropTypes.string,
        onPress: PropTypes.func,
        hasDropDown: PropTypes.bool,
        hasDropDownTransform: PropTypes.bool,
        defaultDropDownDirection: PropTypes.string,
        style: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array,
        ])
    }

    static defaultProps = {
        view: false,
        title: '',
        subTitle: '',
        onPress: NOOP,
        hasDropDown: false,
        hasDropDownTransform: true,
        defaultDropDownDirection: 'down',
        style: {}
    }
}



