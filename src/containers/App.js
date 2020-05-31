import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchDataIfNeeded } from '../actions'

class App extends Component {
  static propTypes = {
    topic_data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDataIfNeeded())
  }
  
  render() {
    const { topic_data, isFetching, lastUpdated } = this.props
    return (  
      <div className="App">
        <div className="sonarChartContainer">

        </div>
        <div className="">

        </div>
        <div className="photoContainer">

        </div>

    </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    isFetching,
    lastUpdated,
    items: topic_data
  } = {
    isFetching: true,
    items: []
  }

  return {
    topic_data,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)

