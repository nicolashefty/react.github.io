import React, { Component } from 'react'
import HomePageView from './HomeView.js'
import Trucks from './TruckModel.js'
import './Home.css'

class HomePageControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trucks : []
    }
  }

  componentDidMount() {
    this.setState({ trucks : [ 'one' , 'two' , 'three']})
  }
  render() {
    return (
      <React.Fragment>
        <HomePageView title="This is the title"
          description="I love long descriptions, but for this time I won't be giving one." />
        <Trucks trucks={this.state.trucks} />
      </React.Fragment>
    )
  }
}

export default HomePageControl
