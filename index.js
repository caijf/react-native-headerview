
import React, {Component, PropTypes} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

import styles from './HeaderStyle.js';

import HeaderStatusBar from './HeaderStatusBar.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderButton from './HeaderButton.js';

let tintColor = styles.header.backgroundColor;

const TitleShape = {
    view: PropTypes.element,
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
};

const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'default']),
    hidden: PropTypes.bool,
    tintColor: PropTypes.string,
    hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none']),
    showAnimation: PropTypes.oneOf(['fade', 'slide', 'none'])
};

export default class HeaderView extends Component {

    getElementButton(data, style, reverse=false){

        if(!Array.isArray(data) || data.length <= 0){
            return (
                <View style={style}></View>
            )
        }

        if(reverse){
            data = data.reverse();
        }

        return (
            <View style={style}>
                {
                    data.map(function(item, index){

                        let _view = <HeaderButton {...item} />;

                        return React.cloneElement(_view, {
                            key: 'button_' + index
                        });
                    })
                }
            </View>
        )

    }

    render(){

        let {statusBar, left, right, center, style, leftStyle, rightStyle} = this.props;

        // 设置默认的statusBar的tintColor
        statusBar.tintColor = statusBar.tintColor || (style && style.backgroundColor) || tintColor;

        return (

            <View style={[styles.headerContainer]}>
                <HeaderStatusBar
                    {...statusBar}
                />
                <View style={[styles.header, style]}>

                    {this.getElementButton(left, [styles.headerLeft, leftStyle])}
                    
                    <HeaderTitle
                        style={[styles.headerCenter]} 
                        {...center}
                    />

                    {this.getElementButton(right, [styles.headerRight, rightStyle], true)}
                </View>
            </View>
        )
    }

    static propTypes = {
        statusBar: PropTypes.shape(StatusBarShape),
        left: PropTypes.array,
        right: PropTypes.array,
        center: PropTypes.shape(TitleShape),
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]),
        leftStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]),
        rightStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ])
    };

    static defaultProps = {
        statusBar: {
            tintColor: tintColor
        }
    };
}



