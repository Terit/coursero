import React, {Component} from 'React'

function linkedComponent(WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick (evt) {
      console.log('here')
      evt.preventDefault();
      window.location = this.props.link
    }

    render () {
      return <WrappedComponent onClick={() => console.log('hello')} {...this.props} />
    }
  }
}

export default linkedComponent
