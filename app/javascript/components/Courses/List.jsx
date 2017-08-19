import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Header, Card, Container} from 'semantic-ui-react'

import ListItem from './ListItem'
import pageComponent from '../pageComponent'

const List = (props) =>
  <Container style={{ marginTop: '7em', marginBottom: '5rem' }}>
    <Header as='h1'>Courses</Header>
    <Card.Group>
      {props.courses.map(c => <ListItem key={c.id} {...c} />)}
    </Card.Group>
  </Container>


export default pageComponent(List, 'courses')
