import PropTypes from 'prop-types'
import React, { Component } from 'react'

class HomePageView extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="Home-header">{this.props.title}</h1>
        <p className="Home-parragraph">{this.props.description}</p>
      </React.Fragment>
    )
  }
}

  HomePageView.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }
export default HomePageView
