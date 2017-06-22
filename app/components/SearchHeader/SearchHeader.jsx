import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput/SearchInput.jsx'
import {hashHistory} from 'react-router'
import './style.less'
class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="search-header">
                <div className="back-icon" onClick={this.handler.bind(this)}>
                <i className="icon-chevron-left"></i>
              </div>
              <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
    handler(){
        window.history.back();
    }
    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHeader
