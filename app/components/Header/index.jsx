import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div className="common-header">
              <div className="back-icon" onClick={this.handler.bind(this)}>
                <i className="icon-chevron-left"></i>
              </div>
              <h1>{this.props.title}</h1>
          </div>
        )
    }
    handler() {
      if(this.props.backRoute) {
        hashHistory.push('/')
      }else{
          window.history.back();
      }
    }
}

export default Header
