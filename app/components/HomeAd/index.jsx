import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home_ad">
              <h2>超值特惠</h2>
              <ul className="ad-container clear-fix">
                  {
                    this.props.data.map((item,index) => {
                    return <li className="ad-item " key={index}>
                      <a href={item.link} target="_blank">
                        <img src={item.img} alt=""/>
                      </a>
                    </li>
                  })
                }
              </ul>
            </div>
        )
    }
}

export default HomeAd
