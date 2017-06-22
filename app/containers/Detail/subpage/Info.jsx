import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from '../../../components/DetailInfo/index.jsx'
import {detailinfo} from '../../../fetch/detail/detail.js'
import './style.less'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div className="list-container">
              {
                this.state.info ?  <DetailInfo info={this.state.info}/> : ''
              }
            </div>
        )
    }
    componentDidMount() {
        // 获取数据函数
        this.getInfo();
    }
    getInfo() {
        detailinfo(this.props.id).then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                info: json
            })
        }).catch(err => {
            if(__DEV__) {
                console.log("详情页 detail info 获取错误" + err)
            }
        })
    }
}

export default Info
