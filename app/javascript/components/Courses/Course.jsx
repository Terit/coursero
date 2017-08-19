import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Header, Item, Container, Segment, Embed} from 'semantic-ui-react'

import LessonList from '../Lessons/List'
import Link from '../Base/Link'
import pageComponent from '../pageComponent'

const Course = ({title, description, lessons, instructor: {avatar, name, biography, link} }) =>
  <Container text style={{ marginTop: '7em' }}>
    <Header as="h1">{title}</Header>

    <Item.Group>
      <Header as="h3">Instructor</Header>
      <Item>
        <Item.Image size="tiny" src={avatar} />

        <Item.Content>
          <Item.Header as="a"><Link link={link}>{name}</Link></Item.Header>
          <Item.Meta>Biography</Item.Meta>
          <Item.Description>{biography}</Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <Item.Header as="h2">Course Details</Item.Header>
          <Item.Meta></Item.Meta>
          <Item.Description>{description}</Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <Item.Header as="h2">Lessons</Item.Header>
          <Item.Meta>{lessons.length} Lessons - {lessons.map(l => l.length).reduce((sum, value) => { return sum + value }, 0) / 60000} minutes</Item.Meta>
          <Item.Description>
            <LessonList lessons={lessons} />
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>

    <Segment>
      <Embed
        id='125292332'
        placeholder='https://react.semantic-ui.com/assets/images/vimeo-example.jpg'
        source='vimeo'
      />
    </Segment>
  </Container>

export default pageComponent(Course, 'courses')
