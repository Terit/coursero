import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Header, Container, Form, Input} from 'semantic-ui-react'

import Link from '../Base/Link'

import pageComponent from '../pageComponent'

class Login extends Component {
  render () {
    return (
      <Container style={{ marginTop: '7em', marginBottom: '5rem' }}>
        <Header as='h1'>Login</Header>

        <form className="ui form" action="/login" method="POST">
          <Input name="authenticity_token" type="hidden" value={this.props.csrf} />
          <Form.Input id="email" name="user[email]" label="E-mail" type="email" required />
          <Form.Input id="password" name="user[password]" label="Password" type="password" required />
          <Form.Checkbox name="user[remember_me]" label='Remember me' required />
          <Form.Button type='submit'>Log in</Form.Button>
        </form>
        <Link link="/signup">Sign up</Link>
      </Container>
    )
  }
}

export default pageComponent(Login, 'login')
