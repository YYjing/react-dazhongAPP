import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListComponent from '../../../components/List/index.jsx'
import LoadMore from '../../../components/LoadMore/index.jsx'
import {connect} from 'react-redux'

import {search} from '../../../fetch/search/search.js'
class SearchList extends React.Component {
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
            <div>
              {
                this.state.data.length
                ? <ListComponent data={this.state.data} />
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
      console.log(this.props);
      const result = search(0,this.props.userinfo.cityName, this.props.category, this.props.keyword || '')
      this.resultHandle(result);
    }
    loadMoreData() {
      this.setState({
        isLoadMore: true
      })
       const page = this.state.page;
      const result = search(page, this.props.userinfo.cityName,this.props.category, this.props.keyword || '');

      this.resultHandle(result);

       this.setState({
          isLoadMore: false,
          page: (1+page)
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
          console.error('搜索获取数据错误:' + ex.message)
        }
      })
    }

}



function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
function mapDispatchToProps() {
    return{

    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SearchList)
