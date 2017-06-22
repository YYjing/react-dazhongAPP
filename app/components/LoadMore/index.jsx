import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div className="load-more" ref="loadWrapper">
            {
               this.props.isLoadMore
              ? <span>加载中。。。</span>
              : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
            }
          </div>
        )
    }
    loadMoreHandle() {
      // 执行传递过来的loadmore
        this.props.loadMoreFn();
    }
    componentDidMount() {
      // 滚动加载
      const loadMoreFn = this.props.loadMoreFn;
      const wrapper = this.refs.loadWrapper;
      let timeoutId // 节流
      function cb() {
        const top = wrapper.getBoundingClientRect().top
        const windowHeight = window.screen.height
        if(top && top < windowHeight) {
          loadMoreFn();
        }
      }
      window.addEventListener('scroll', function() {
        if(this.props.isLoadMore){
          return;
        }
        if(timeoutId){
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(cb, 60)
      }.bind(this), false)
    }
}

export default LoadMore
