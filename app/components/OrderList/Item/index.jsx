import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../../components/Star/index.jsx'

import './style.less'
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
         this.state = {
            commentState: 0, // 0-未评价，1-评价中，2已评价
            stars: {}
        }
    }
    render() {
      const data = this.props.data
        return (
          <div className="order-item-container ">
            <div className="clear-fix">
              <div className="order-item-img float-left">
                <img src={data.img} alt=""/>
              </div>
              <div className="order-item-comment float-right">
                {
                  this.state.commentState == 0
                  ? <button  className="btn" onClick={this.showComment.bind(this)}>评价</button>
                  : this.state.commentState == 1
                      ? ''
                      : <button className="btn unseleted-btn">已评价</button>
                }
              </div>
              <div className="order-item-content">
                <span>商户：{data.title}</span>
                 <span>数量：{data.count}</span>
                  <span>价格：￥{data.price}</span>
              </div>
            </div>
            {
              this.state.commentState == 1
              ? <div>
                <textarea style={{width: '100%', height: '80px', 'fontSize': '20px'}} className="comment-text" ref="commentText"></textarea>
                <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                  <Star  star="0" clickCallback={this.starClickCallback.bind(this)}/>
                </div>
                <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                &nbsp;&nbsp;
                <button className="btn unseleted-btn" onClick={this.cancel.bind(this)}>取消</button>
              </div>
              :''
            }
          </div>

        )
    }
    showComment() {
 // 显示输入框
        this.setState({
            commentState: 1
        })
    }
    starClickCallback() {

    }
    submitComment() {
      const id = this.props.data.id;
      const value = this.refs.commentText.value.trim();
      const star = this.state.stars[id] || '0'
      this.props.submitComment(id, value, star, this.commentOK.bind(this))
    }
    commentOK() {
       this.setState({
        commentState: 2
      })
    }
    cancel() {
      this.setState({
        commentState: 0
      })
    }
    componentDidMount() {
      this.setState({
        commentState: this.props.data.commentState
      })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = Item
