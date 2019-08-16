import React, { Component } from 'react';
import WatchesModel from './WatchesModel';
import Form from './Form';
import WatchesItem from './WatchesItem';

export default class Watches extends Component {
  state = {
    timezone: 0,
    name: 'Стандартное время',
    watches: [new WatchesModel('Москва', 3)]
  }

  localTimezone = -(new Date().getTimezoneOffset()/60);
  
  handleChange = evt => {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({watches: [...this.state.watches, new WatchesModel(this.state.name, this.state.timezone)]})
  }

  handleRemove = id => {
    this.setState({watches: [...this.state.watches.filter((o, index) => index !== id)]});
  }

  render() {
    return (
      <React.Fragment>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <div>
        {this.state.watches.map((o, index) => (
          <WatchesItem key={index} id={index} name={o.name} timezone={o.timezone} localTimezone={this.localTimezone} handleRemove={this.handleRemove}/>
        ))}
      </div>
      </React.Fragment>
    )
  }
}
