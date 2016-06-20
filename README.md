## HeaderView



### Content
- [Getting started](#getting-started)
- [API](#api)
- [Default Icon](#Default-Icon)
- [Examples](#examples)

### Getting started

运行环境 `npm3+` `babel6`

初始化一个项目
	
	react-native init project-name
	
安装 react-native-headerview

	npm install react-native-headerview

`index.ios.js` / `index.android.js`

	import HeaderView from 'react-native-headerview';
	
	class Basic extends Component {
		render(){
			return(
				<HeaderView
					left={[
                    	{
                        	type: 'back'
                    	}
                	]}

                	center={{
                    	title: 'Title'
                	}}

                	right={[
                    	{
                        	type: 'home'
                    	}
                	]}
				/>
			)
		}
	}


### API
- **style** - (Object, Array) - 最外层样式（如果你想隐藏头部可以设置高度为0）
- **statusBar** - (Object):
  - **barStyle** - ('light-content' or 'default') - Style of statusBar
  - **hidden** - (Boolean)
  - **tintColor** - (String) - Status bar tint color
  - **hideAnimation** - ('fade', 'slide', 'none') - Type of statusBar hide animation
  - **showAnimation** - ('fade', 'slide', 'none') - Type of statusBar show animation
  - **style** - (Object, Array) - 设置statusBar 样式
- **left** - (Array) - header左侧配置
	- (Object) 
		- **type** - (String) - 必填 text（文本按钮） | icon（图标按钮） 或 [内置icon](#DefaultIcon)，其他无效
        - **value** - (String) - 如果`type='text'`，该项为必填
        - **view** - (React Component) - 如果 `type='icon'`，该项为必填
        - **onPress** - (Function) - 点击回调
        - **style** - (Object, Array) - 设置样式，一般用不到，默认就好^_^
- **right** - 同`left`
- **center** - (Object) - 设置标题
	- **view** - (React Component) - 自定义view，为了适配各种头部；如果设置了该值，后面的 `title` `subTitle` 将失效
	- **title** - (String) - 主标题
	- **subTitle** - (String) - 副标题
	- **onPress** - (Function) - 点击回调
	- **hasDropDown** - (Boolean) - 是否有下拉三角箭头
	- **hasDropDownTransform** - (Boolean) - 点击头部是否转换三角箭头方向
	- **defaultDropDownDirection** - (String) - 默认三角箭头方向，默认 `down`，可配为 `up`
	- **style** - (Object, Array) - 设置样式，一般用不到，默认就好^_^

### Default Icon

内置常用的一些iconview

- **back** - 返回上一页
- **home** - 回到首页
- **tel** | **phone** - 拨打电话
- **heart** | **love** - 爱心 or 收藏
- **comment** - 回复
- **compass** - 罗盘
- **file** - 文件
- **share** - 分享
- **email** - 邮件


### Examples
- [Basic](https://github.com/caijf/react-native-headerview/examples/Basic)
- [SubTitle](https://github.com/caijf/react-native-headerview/examples/SubTitle)
- [DropDown](https://github.com/caijf/react-native-headerview/examples/DropDown)
- [HotelSearchHeader](https://github.com/caijf/react-native-headerview/examples/HotelSearchHeader)
- [HotelDetailHeader](https://github.com/caijf/react-native-headerview/examples/HotelDetailHeader)


