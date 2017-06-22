import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../components/Star/index.jsx'
import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      const data = this.props.info;
        return (
          <div id="detail-info-container">
            <div className="info-container clear-fix">
                <div className="info-img-container float-left">
                  <img src={data.img}/>
                </div>
                <div className="info-content">
                  <h1>{data.title}</h1>
                  <div className="star-container">
                      <Star star="3" />
                      <span className="price">￥{data.price}</span>
                  </div>
                  <div className="sub-title">{data.subTitle}</div>
                </div>
              </div>
              <p className="info-desc" dangerouslySetInnerHTML={{__html: data.desc}}></p>
          </div>
        )
    }
    handler() {
      window.history.back();
    }
}

export default DetailInfo
