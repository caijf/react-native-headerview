import React, {Component} from 'react';
import {
    Image,
    View,
    TouchableWithoutFeedback
} from 'react-native';

// 处理雪碧图
// 整理内置icon
class CropImage extends Component{
    render() {
        let source = this.props.source;
        let crop = this.props.crop || source.crop;
        return (
                <View style={[{
                overflow: 'hidden',
                height: crop.height,
                width: crop.width,
                backgroundColor: 'transparent'
                }]}>
                    <Image onPress={this.clickHandler} style={{
                      marginTop: crop.top * -1,
                      marginLeft: crop.left * -1,
                      width: this.props.width,
                      height: this.props.height
                    }} source={this.props.source} resizeMode='contain'>
                      {this.props.children}
                    </Image>
                </View>
        );
    }
}

module.exports = CropImage;