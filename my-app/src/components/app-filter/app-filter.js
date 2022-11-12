import React from 'react';

import './app-filter.css';

class AppFilter extends React.Component {
  onUpdateFilter = (e) => {
    const name = e.target.name;
    this.props.onUpdateFilter(name);
  };

  buttonsClass = (name) => {
    if (name === this.props.filter) {
      return 'btn-light';
    } else {
      return 'btn-outline-light';
    }
  };

  classForButton = () => {};
  render() {
    return (
      <div className='btn-group'>
        <button
          className={`btn ${this.buttonsClass('allEmployees')}`}
          type='button'
          name='allEmployees'
          onClick={this.onUpdateFilter}
        >
          Все сотрудники
        </button>
        <button
          className={`btn ${this.buttonsClass('increase')}`}
          type='button'
          name='increase'
          onClick={this.onUpdateFilter}
        >
          Сотрудники на повышение
        </button>
        <button
          className={`btn ${this.buttonsClass('moreThan1000')}`}
          type='button'
          name='moreThan1000'
          onClick={this.onUpdateFilter}
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
