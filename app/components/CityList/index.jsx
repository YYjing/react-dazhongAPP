import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '北京')}>北京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '上海')}>上海</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '杭州')}>杭州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '广州')}>广州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '苏州')}>苏州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '深圳')}>深圳</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '南京')}>南京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '天津')}>天津</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '重庆')}>重庆</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '厦门')}>厦门</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '武汉')}>武汉</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '西安')}>西安</span>
                    </li>
                </ul>
            </div>
            <div className="no-container">
                    <h3>A</h3>
                    <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿巴嘎旗')}>阿巴嘎旗</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿坝')}>阿坝</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿坝县')}>阿坝县</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿尔山市')}>阿尔山市</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿合奇县')}>阿合奇县</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿克苏')}>阿克苏</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿克陶县')}>阿克陶县</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿拉尔')}>阿拉尔</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿拉山口市')}>阿拉山口市</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿拉善')}>阿拉善</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿里')}>阿里</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '阿里山')}>阿里山</span>
                    </li>
                </ul>
            </div>
            </div>
        )
    }
    clickHandle(newCity){
      console.log(newCity);
      this.props.clickFn(newCity);
    }
}

export default CityList
