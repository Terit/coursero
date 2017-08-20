import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Card, Image, Button} from 'semantic-ui-react'

const ListItem = ({avatar, name, link}) =>
  <Card href={link}>
    <Card.Content>
      <Image floated='right' size='mini' src={avatar} />
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Description>
        Placeholder
      </Card.Description>
    </Card.Content>
  </Card>

export default ListItem
