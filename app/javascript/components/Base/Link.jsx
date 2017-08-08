import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Link = ({ link, children }) => <span onClick={() => window.location = link}>{children}</span>

export default Link
