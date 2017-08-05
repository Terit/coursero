import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {List} from 'semantic-ui-react'

const Lessons = ({ lessons }) =>
  <List divided relaxed>
    {lessons.map(l =>
    <List.Item key={l.id}>
      <List.Icon name="play" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header>{l.title}</List.Header>
        <List.Description>{l.length / 60000} minutes</List.Description>
      </List.Content>
    </List.Item>)}
  </List>

export default Lessons
