
import React, {Component} from 'react';

import {
    View,
    Image
} from 'react-native';

import styles from './HeaderStyle.js';

import CropImage from './CropImage.js';

// iconview back
class IconBack extends Component{

    render(){
        return (
            <View style={[styles.iconArrow]} />
        )
    }
}

// iconview home
class IconHome extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:52,left:0,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview tel、phone
class IconTel extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:23,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview heart、love
class IconHeart extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:71,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview heartFull、loveFull
class IconHeartFull extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:47,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview comment
class IconComment extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:97,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview compass
class IconCompass extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:123,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview file
class IconFile extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:147,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview share
class IconShare extends Component{
    
    shouldComponentUpdate(){
        return false;
    }

    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:172,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}

// iconview email
class IconEmail extends Component{
    render(){
        return (
            <CropImage
                source={{uri:'https://pic.c-ctrip.com/h5/common/bg-global.png', crop:{top:50,left:198,width:20, height: 20}}}

                width={240}
                height={147}
            />
        )
    }
}



// DefaultIcon 内置常用icon view
// 必须放在底部，否则报一堆错误
module.exports = [
    {   
        type: 'back',
        view: <IconBack />,
        onPress: function(){
            alert('back pop page')
        }
    },
    {   
        type: 'home',
        view: <IconHome />,
        onPress: function(){
            alert('back to home')
        }
    },
    {   
        type: 'tel',
        view: <IconTel />,
        onPress: function(){
            alert('click phone')
        }
    },
    {   
        type: 'phone',
        view: <IconTel />,
        onPress: function(){
            alert('click phone')
        }
    },
    {   
        type: 'heart',
        view: <IconHeart />,
        onPress: function(){
            alert('click heart')
        }
    },
    {   
        type: 'heart-full',
        view: <IconHeartFull />,
        onPress: function(){
            alert('click heart full')
        }
    },
    {   
        type: 'love',
        view: <IconHeart />,
        onPress: function(){
            alert('click love')
        }
    },
    {
        type: 'love-full',
        view: <IconHeartFull />,
        onPress: function(){
            alert('click love full')
        }
    },
    {   
        type: 'comment',
        view: <IconComment />,
        onPress: function(){
            alert('click comment')
        }
    },
    {   
        type: 'compass',
        view: <IconCompass />,
        onPress: function(){
            alert('click compass')
        }
    },
    {
        type: 'file',
        view: <IconFile />,
        onPress: function(){
            alert('click file')
        }
    },
    {
        type: 'share',
        view: <IconShare />,
        onPress: function(){
            alert('click share')
        }
    },
    {
        type: 'email',
        view: <IconEmail />,
        onPress: function(){
            alert('click email')
        }
    }
];




