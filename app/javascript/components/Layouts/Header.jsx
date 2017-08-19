import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Menu,
  Image,
  Button} from 'semantic-ui-react'

import Link from '../Base/Link'

class Header extends Component {
  render () {
    return (
      <Menu fixed='top' size='large' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            Coursero
          </Menu.Item>
          <Menu.Item as='a' active={this.props.activePage === 'home'}>
            <Link link='/'>Home</Link>
          </Menu.Item>
          <Menu.Item as='a' active={this.props.activePage === 'courses'}>
            <Link link="/courses">Courses</Link>
          </Menu.Item>
          <Menu.Item as='a' active={this.props.activePage === 'instructors'}>
            <Link link="/instructors">Instructors</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            {this.props.currentUser
              ? (<Menu.Item className="item">
                  <span>{this.props.currentUser.first_name}</span>
                  <span style={{ marginLeft: '0.5em' }}><Link link="/logout" >Log out</Link></span>
                </Menu.Item>)
              : (<Menu.Item className='item'>
                  <Button as='a' inverted>
                    <Link link="/login">Log in</Link>
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    <Link link="/signup">Sign Up</Link>
                  </Button>
                </Menu.Item>)}
          </Menu.Menu>
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
