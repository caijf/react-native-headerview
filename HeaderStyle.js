import {
    StyleSheet
} from 'react-native';


const HEADER_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;

module.exports = StyleSheet.create({
    // statusBar
    statusBar: {
        height: STATUS_BAR_HEIGHT,
    },

    // header
    header: {
        flexDirection: 'row',
        height: HEADER_HEIGHT,
        backgroundColor: '#099fde',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'
    },
    headerLeft: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start'
    },
    headerRight: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
    headerCenter: {
        height: HEADER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerCenterInner: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    // title
    titleWrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 17,
        fontWeight: '400'
    },
    subTitle: {
        color:'white',
        fontSize: 12,
        marginTop: 3
    },

    // header button
    headerIconButton: {
        width:44,
        height:44
    },
    headerTextButton: {
        paddingLeft: 10,
        paddingRight: 10,
        height:44
    },
    headerButtonInner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white'
    },

    // icon
    iconArrow: {
        width:14,
        height:14,
        transform:[{rotate:"45deg"}],
        borderWidth:2,
        borderStyle: 'solid',
        borderColor: 'white',
        borderTopWidth:0,
        borderRightWidth:0
    },
    iconArrowDown:{
        transform:[{rotate:"-45deg"}, {origin: 'bottom bottom'}],
        height: 8,
        width: 8,
        left: 0,
        marginLeft: 5
    },
    iconArrowUp:{
        transform:[{rotate:"135deg"}],
        height: 8,
        width: 8,
        marginLeft: 5
    }
});

