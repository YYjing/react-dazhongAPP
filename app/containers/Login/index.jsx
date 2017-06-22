import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from "../../components/Header/index.jsx"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import LoginComponent from '../../components/Login/index.jsx'
import './style.less'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            checking: false
        }
    }
    render() {
        const id = this.props.params.id;
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking ? <div></div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)} />
                }
            </div>
        )
    }
    componentDidMount() {
        this.doCheck(); // 校验是否登录
    }
    doCheck() {
        const username = this.props.userinfo.username;
        if(username){
            this.goUserpage();
        }else{
            this.setState({
                checking: false
            })
        }
    }
    goUserpage() {
        hashHistory.push('/user')
    }
    loginHandle(username) {
        // 登陆之后，接收用户名，保存
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo
        userinfo.username = username;
        actions.update(userinfo)
        const params = this.props.params;
        const router = params.router
        if(router) {//跳到指定页面
            hashHistory.push(router)
        }else{//跳转到用户主页
            this.goUserpage();
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
