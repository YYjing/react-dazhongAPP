import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          star: 0
        }
    }
    render() {
        let star = this.props.star || 0; //兼容处理
        star %= 5; //星星数取模
        return (
          <div className="star-container">
            {
              [1,2,3,4,5].map((item, index) => {
                const starClass = star >= item ? 'light' : '';
                return <i key={index} className={'icon-star ' + starClass} onClick={this.clickHandle.bind(this, item)}></i>
              })
            }
          </div>
        )
    }
    handler() {
      window.history.back();
    }
    clickHandle(star) {
        const clickCallback = this.props.clickCallback
        if (!clickCallback) {
            return
        }

        this.setState({
            star: star
        })

        clickCallback(star)
    }
}

export default Star
