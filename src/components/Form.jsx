import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <label>Название
        <input type="text" name="name" onChange={props.handleChange}></input>
      </label> 
      <label>Временная зона
        <input type="number" name="timezone" onChange={props.handleChange}></input>
      </label>
      <button type="submit">Добавить</button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

