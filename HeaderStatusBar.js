import React, { Component, PropTypes } from 'react';

import {
  StatusBar,
  View,
  Platform
} from 'react-native';

import styles from './HeaderStyle.js';

function customizeStatusBar(data) {
    if (Platform.OS === 'ios') {
        if (data.barStyle) {
            StatusBar.setBarStyle(data.barStyle);
        }
        const animation = data.hidden ? (data.hideAnimation || HeaderStatusBar.defaultProps.statusBar.hideAnimation) : (data.showAnimation || HeaderStatusBar.defaultProps.statusBar.showAnimation);

        StatusBar.showHideTransition = animation;
        StatusBar.hidden = data.hidden;
    }
}

export default class HeaderStatusBar extends Component {
    componentDidMount() {
        customizeStatusBar(this.props);
    }

    componentWillReceiveProps(props) {
        customizeStatusBar(this.props);
    }

    render() {

        const customStatusBarTintColor = this.props.tintColor ? { backgroundColor: this.props.tintColor } : null;

        let statusBar = null;

        if (Platform.OS === 'ios') {
            statusBar = !this.props.hidden ? <View style={[styles.statusBar, customStatusBarTintColor, this.props.style ]} /> : null;
        }

        return (
            <View>
                {statusBar}
            </View>
        );
    }

    static propTypes = {
        barStyle: PropTypes.oneOf(['light-content', 'default', ]),
        hidden: PropTypes.bool,
        tintColor: PropTypes.string,
        style: PropTypes.object,
        hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
        showAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ])
    };

    static defaultProps = {
        barStyle: 'light-content',
        tintColor: '', // 默认和header背景色一样
        style:{},
        hidden: false,
        hideAnimation: 'slide',
        showAnimation: 'slide'
    };
}

