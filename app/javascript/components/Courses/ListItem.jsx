import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Card, Image, Button} from 'semantic-ui-react'

const ListItem = ({link, title, description, instructor: {avatar, name} }) => {
  function handleClick() {
    window.location = link
    return
  }

  return (
    <Card onClick={handleClick}>
      <Card.Content>
        <Image floated='right' size='mini' src={avatar} />
        <Card.Header>
          {title}
        </Card.Header>
        <Card.Meta>
          {name}
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui one buttons">
          <Button basic color="green">Enroll</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ListItem
