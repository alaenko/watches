import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default class WatchesItem extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    timezone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    localTimezone: PropTypes.number.isRequired,
    handleRemove: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this[this.props.id] = setInterval(() => {
      this.setState({time: moment().subtract(this.props.localTimezone, 'hours').add(this.props.timezone, 'hours').format('hh:mm:ss')})
      console.log('tic')
    }, 1000)
  } 
 
  componentWillUnmount() {
    clearInterval(this[this.props.id]);
  }

  render() {
    return (
      <div className="watches-wrap">
        <div>{this.props.name + ':'}</div>
        <div className="watches">
          {this.state.time}
          <span className="remove" onClick={() => {this.props.handleRemove(this.props.id)}}>x</span>
        </div>
      </div>
    )
  }
}

