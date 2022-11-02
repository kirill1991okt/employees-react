import React from 'react';
import './employees-list-item.css';

class EmployeesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  onIncrease = () => {
    this.setState((state) => ({
      // Тут так же можно использовать деструктуризацию и записать вместо (state) как ({increase})
      increase: !state.increase, // а тут следовательно как: increase: !increase
    }));
  };

  onLike = () => {
    this.setState((state) => {
      // Тут так же можно использовать деструктуризацию и записать вместо (state) как ({like})
      return {
        like: !state.like, // а тут следовательно как: like: !like
      };
    });
  };

  render() {
    const { name, salary, onDeleted } = this.props;
    let className = 'list-group-item d-flex justify-content-between';
    if (this.state.increase) {
      className += ' increase';
    }
    if (this.state.like) {
      className += ' like';
    }

    return (
      <li className={className}>
        <span onClick={this.onLike} className='list-group-item-label'>
          {name}
        </span>
        <input
          type='text'
          className='list-group-item-input'
          defaultValue={salary}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button
            onClick={this.onIncrease}
            type='button'
            className='btn-cookie btn-sm '
          >
            <i className='fas fa-cookie'></i>
          </button>

          <button
            type='button'
            className='btn-trash btn-sm '
            onClick={onDeleted}
          >
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
