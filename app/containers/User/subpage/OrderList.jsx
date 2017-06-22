import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getOrderListData, postComment} from '../../../fetch/user/orderlist.js'
import OrderListComponent from '../../../components/OrderList/index.jsx'


import './style.less'
class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length?
                    <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                    : <div></div>
                }
            </div>
        )
    }
    submitComment(id, value, star, cb) {
        postComment(id, value, star).then((res) => {
            return res.json();
        }).then(json => {
            if(json.errno == 0) {//已评价，执行函数
                cb();
            }
        })
    }
    componentDidMount() {
        if(this.props.name) {
            this.loadOrderList()
        }
    }
    loadOrderList() {
        const name = this.props.name;
        getOrderListData(name).then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(ex => {
            if(__DEV__) {
                console.error('用户主页数据错误')
            }
        })
    }
}

module.exports = OrderList
