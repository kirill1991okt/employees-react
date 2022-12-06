import React from 'react';

import './employees-list-item.css';

class EmployeesListItem extends React.Component {
  onUpdateSalary = (e) => {
    this.props.onUpdateSalary(this.props.name, e.target.value);
  };

  render() {
    const {
      name,
      salary,
      increase,
      rise,
      onDeleted,
      onToggleIncrease,
      onToggleRise,
    } = this.props;

    let className = 'list-group-item d-flex justify-content-between';
    if (increase) {
      className += ' increase';
    }
    if (rise) {
      className += ' like';
    }

    return (
      <li className={className}>
        <span onClick={onToggleRise} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          name="salary"
          defaultValue={salary}
          onChange={this.onUpdateSalary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onToggleIncrease}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDeleted}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
