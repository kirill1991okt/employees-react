import React from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      inputText: '',
      inputSalary: '',
    };
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      inputText: '',
      inputSalary: '',
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length > 3 && this.state.salary) {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: '',
        inputText: '',
        inputSalary: '',
      });
    } else {
      if (this.state.name.length < 3) {
        this.setState({
          inputText: 'error',
        });
      } else if (!this.state.salary) {
        this.setState({
          inputSalary: 'error',
        });
      }
    }
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className={`form-control new-post-label ${this.state.inputText}`}
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onInputChange}
          />
          <input
            type="number"
            className={`form-control new-post-label ${this.state.inputSalary}`}
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onInputChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
