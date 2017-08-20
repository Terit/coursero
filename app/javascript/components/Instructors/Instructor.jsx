import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Header, Item, Container, Segment} from 'semantic-ui-react'

import pageComponent from '../pageComponent'

const Instructor = ({ avatar, name, biography, link }) =>
  <Container text style={{ marginTop: '7em' }}>
    <Header as="h1">{name}</Header>

    <Item.Group>
      <Header as="h3">Instructor</Header>
      <Item>
        <Item.Image size="tiny" src={avatar} />

        <Item.Content>
          <Item.Header as="a" href={link}>{name}</Item.Header>
          <Item.Meta>Biography</Item.Meta>
          <Item.Description>{biography}</Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <Item.Header as="h2">Courses</Item.Header>
          <Item.Meta></Item.Meta>
          <Item.Description>Placeholder</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Container>

export default pageComponent(Instructor, 'instructors')
