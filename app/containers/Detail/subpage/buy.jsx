import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {bindActionCreators} from 'redux'

import * as ActionType from '../../../actions/store.js'
import BuyStore from '../../../components/BuyStore/index.jsx'

import './style.less'
class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
            <div>
                <BuyStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }
    componentDidMount() {
        // j校验是否登录
        this.checkStore();
    }
    buyHandle() {
        if(!this.checklogin()) {
            return
        }
        hashHistory.push('/User')
    }
    storeHandle() {
        if(!this.checklogin()) {
            return
        }
         const id = this.props.id
        const storeActions = this.props.storeActions
        if(this.state.isStore){
            storeActions.rm({id: id})
        }else{
            storeActions.add({id: id})
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }
    checkStore() {//校验收藏
        const id = this.props.id
        const store = this.props.store
        store && store.some((item) => {
            if(item.id == id){
                this.setState({
                    isStore: true
                })
            }
            return true; //收藏
        })
    }
    checklogin() {//校验登录
        const userinfo = this.props.userinfo;
        const id = this.props.id
        if(!userinfo.username){
            hashHistory.push('/Login/'+encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(ActionType, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
