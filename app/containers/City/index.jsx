import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import { hashHistory } from 'react-router'
import {connect} from 'react-redux'
import Header from '../../components/Header/index.jsx'
import CurrentCity from '../../components/CurrentCity/index.jsx'
import CityList from '../../components/CityList/index.jsx'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import {CITYNAME} from '../../config/localStoreKey.js'
import localStore from '../../util/localStore.js'
import './style.less'
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
               <Header title="选择城市"/>
               <CurrentCity cityname={this.props.userinfo.cityName} />
               <CityList cityname={this.props.userinfo.cityName}  clickFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity){
      console.log(newCity);
      if(newCity == null){
        return;
      }
      // 修改redux
      this.props.userinfo.cityName = newCity;
      this.props.userInfoActions.update(this.props.userinfo);
       // 修改cookie
      localStore.setItem(CITYNAME, newCity)
      // 跳转首页
      hashHistory.push('/')
    }


}


function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
function mapDispatchToProps(dispatch) {
     return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(City)
