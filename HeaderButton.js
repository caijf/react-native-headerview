
import React, {Component, PropTypes} from 'react';

import {
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

import styles from './HeaderStyle.js';

import HeaderDefaultIcon from './HeaderDefaultIcon.js';
// import DefaultIcon from './HeaderDefaultIcon.js';

/**
 * icon button
 * @param {view} view iconview
 * @param {function} onPerss 点击回调
 */
class HeaderIconButton extends Component{

    render(){

        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={[styles.headerIconButton, this.props.style]}>
                    <View style={styles.headerButtonInner} >
                        {this.props.view}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    
    static propTypes = {
        view: PropTypes.element.isRequired,
        onPress: PropTypes.func,
        style: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    }
}

/**
 * text button
 * @param {string} value 按钮文案
 * @param {function} onPerss 点击回调
 */
class HeaderTextButton extends Component{

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={[styles.headerTextButton, this.props.style]}>
                    <View style={styles.headerButtonInner}>
                        <Text style={styles.headerText}>
                            {this.props.value}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    static propTypes = {
        value: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        style: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    }
}

export default class HeaderButton extends Component {

    getDefaultIcon(type){
        for(let icon of HeaderDefaultIcon){
            if(icon['type'] === type){
                return icon;
            }
        }
        return false;
    }

    render(){

        let {type, value, view, onPress, style} = this.props;

        let defaultIcon = this.getDefaultIcon(type);

        if(defaultIcon){
            view = defaultIcon.view;
            onPress = onPress || defaultIcon.onPress;

            return <HeaderIconButton view={view} onPress={onPress} style={style} />;

        }else if(type === 'text' && value && value !== ''){

            return <HeaderTextButton value={value} onPress={onPress} style={style} />;

        }else if(type === 'icon' && typeof view !== 'boolean'){
            return <HeaderIconButton view={view} onPress={onPress} style={style} />;
        }else{
            return null;
        }
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        view: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.bool
        ]),
        onPress: PropTypes.func,
        style: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array,
        ])
    }

    static defaultProps = {
        type: 'text',
        value: '',
        view: false,
        style: {}
    }
}


