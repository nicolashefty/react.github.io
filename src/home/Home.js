import React, { Component } from 'react'
import HomePageView from './HomeView.js'
import Trucks from './TruckModel.js'

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
      <div>
        <HomePageView title="This is the title" description="I love long descriptions, but for this time I won't be giving one." />
        <Trucks trucks={this.state.trucks} />
      </div>
    )
  }
}

export default HomePageControl
