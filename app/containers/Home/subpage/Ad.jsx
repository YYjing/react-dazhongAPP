import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index.jsx'
import {getData} from '../../../fetch/home/home.js'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
         return (
            <div>
            {
                this.state.data.length
                ? <HomeAd data={this.state.data}/>
                : <div>{/* 加载中... */}</div>
            }
            </div>
        )
    }
    componentDidMount(){
        getData().then((resp) => {
          return resp.json();
        }).then((data) => {
          if(data.length){
            this.setState({
              data: data
            })
          }
        }).catch(ex => {
          if(__DEV__){
            console.error('首页广告模块获取数据出错'+ex)
          }
        })
    }
}

export default Ad
