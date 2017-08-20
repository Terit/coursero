import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Header, Card, Container} from 'semantic-ui-react'

import ListItem from './ListItem'
import pageComponent from '../pageComponent'

const List = (props) =>
  <Container style={{ marginTop: '7em', marginBottom: '5rem' }}>
    <Header as='h1'>Instructors</Header>
    <Card.Group>
      {props.instructors.map(i => <ListItem key={i.id} {...i} />)}
    </Card.Group>
  </Container>


export default pageComponent(List, 'instructors')
