import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Header, Card, Container, Form, Input} from 'semantic-ui-react'

import pageComponent from '../pageComponent'

class Registration extends Component {
  render () {
    return (
      <Container style={{ marginTop: '7em', marginBottom: '5rem' }}>
        <Header as='h1'>Sign Up</Header>

        <form className="ui form" action="/" method="POST">
          <Input name="authenticity_token" type="hidden" value={this.props.csrf} />
          <Form.Group>
            <Form.Input id="first_name" name="user[first_name]" label="First Name" type="text" width={8} required />
            <Form.Input id="last_name" name="user[last_name]" label="Last Name" type="text" width={8} required />
          </Form.Group>
          <Form.Input id="email" name="user[email]" label="E-mail" type="email" required />
          <Form.Input id="password" name="user[password]" label="Password" type="password" required />
          <Form.Input id="password_confirmation" name="user[password_confirmation]" label="Confirm Password" type="password" required />
          <Form.Checkbox label='I agree to the Terms and Conditions' required />
          <Form.Button type='submit'>Submit</Form.Button>
        </form>
      </Container>
    )
  }
}

export default pageComponent(Registration, 'sign-up')
