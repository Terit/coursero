import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Menu,
  Button} from 'semantic-ui-react'

export default class Header extends Component {
  render () {
    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a' >Log in</Button>
              <Button as='a'  style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
