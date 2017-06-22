import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import Header from '../../components/Header/index.jsx'
import UserInfo from '../../components/UserInfo/index.jsx'
import OrderList from './subpage/OrderList.jsx'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var userinfo = this.props.userinfo;
        return (
            <div>
                <Header title="用户主页" backRoute="/"/>
                <UserInfo name={userinfo.username} city={userinfo.cityName}/>
                <OrderList name={userinfo.username}/>
            </div>
        )
    }
    componentDidMount() {

        if(!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
