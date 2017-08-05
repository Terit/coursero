import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Header, Card, Container} from 'semantic-ui-react'

import ListItem from './ListItem'

const List = (props) => {
  return (
    <Container>
      <Header as='h1'>Courses</Header>
      <Card.Group>
        {props.courses.map(c => <ListItem key={c.id} {...c} />)}
      </Card.Group>
    </Container>
  )
}

export default List
