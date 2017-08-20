import React, {Component} from 'react'

import SiteHeader from './Layouts/Header'
import SiteFooter from './Layouts/Footer'

function pageComponent(WrappedComponent, activePage) {
  return class extends Component {
    constructor (props) {
      super(props)
    }

    render () {
      return (
        <div>
          <SiteHeader activePage={activePage} currentUser={this.props.currentUser} />
          <WrappedComponent {...this.props} />
          <SiteFooter />
        </div>
      )
    }
  }
}

export default pageComponent
