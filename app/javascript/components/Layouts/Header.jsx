import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Menu,
  Image,
  Dropdown,
  Button} from 'semantic-ui-react'

import Logo from '../../../assets/images/logo.png'

class Header extends Component {
  render () {
    return (
      <Menu fixed='top' size='large' inverted>
        <Container>
          <Menu.Item href="/" as='a' header>
            <Image
              size='mini'
              src={Logo}
              style={{ marginRight: '1.5em' }}
            />
            Coursero
          </Menu.Item>
          <Menu.Item href="/courses" as='a' active={this.props.activePage === 'courses'} color="red">
            Courses
          </Menu.Item>
          <Menu.Item href="/instructors" as='a' active={this.props.activePage === 'instructors'} color="red">
            Instructors
          </Menu.Item>
          {this.props.currentUser
            ? (<Menu.Menu position='right'>
                <Dropdown item text={this.props.currentUser.first_name}>
                  <Dropdown.Menu>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item href="/logout">Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            ) : (
              <Menu.Menu position='right'>
                <Menu.Item color="red" href="/login">Log in</Menu.Item>
                <Menu.Item color="red" href="/signup" active>Sign up</Menu.Item>
              </Menu.Menu>)}
        </Container>
      </Menu>
    )
  }
}

Header.defaultProps = {
  activePage: 'home',
  currentUser: null
}

export default Header
