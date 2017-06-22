import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentList from '../../../components/CommentList/index.jsx'
import LoadMore from '../../../components/LoadMore/index.jsx'

import {detailList} from '../../../fetch/detail/detail.js'
import './style.less'
class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          data: [],
          hasMore: false,
          isLoadMore: false,
          page: 0
        }
    }
    render() {
        return (
            <div className="detail-comment-subpage">
              <h2 className="home-list-title">用户点评</h2>
              {
                this.state.data.length
                ? <CommentList data={this.state.data} />
                : <span>{/**加载中。。。**/}</span>
              }
              {
                this.state.hasMore
                ? <LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoadMore={this.state.isLoadMore}/>
                : <div></div>
              }
            </div>
        )
    }
    componentDidMount() {
      // 加载首屏数据
      this.loadFirstPage();
    }
    loadFirstPage() {
      const result = detailList(this.props.id, 0)
      this.resultHandle(result);
    }
    loadMoreData() {
      this.setState({
        isLoadMore: true
      })
      const page = this.state.page;
      const result = detailList(this.props.id, page);

      this.resultHandle(result);

       this.setState({
          isLoadMore: false,
          page: page + 1
        })


    }
    resultHandle(resp) {
      resp.then((data) => {
        return data.json()
      }).then(json => {
        const data = this.state.data.concat(json.data);
        this.setState({
          data: data,
          hasMore: json.hasMore
        })
      }).catch(ex => {
        if(__DEV__){
          console.error('用户点评获取数据错误:' + ex.message)
        }
      })
    }

}

export default Comment
