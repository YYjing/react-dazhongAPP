import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../../components/Star/index.jsx'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      const data = this.props.data;
        return (
          <div className="comment-item">
            <h3>
              <i className="icon-user"></i>
              <span>{data.username}</span>
            </h3>
            <Star star={data.star}/>
            <p>{data.comment}</p>
          </div>
        )
    }
    handler() {
      window.history.back();
    }
}

export default Item
