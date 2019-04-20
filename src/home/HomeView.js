import PropTypes from 'prop-types'
import React, { Component } from 'react'

class HomePageView extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

  HomePageView.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }
export default HomePageView
