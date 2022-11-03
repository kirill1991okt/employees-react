import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Kirill', salary: '4000', increase: false, id: '2' },
        { name: 'Alex', salary: '1000', increase: false, id: '3' },
        { name: 'Math', salary: '2500', increase: false, id: '4' },
      ],
    };
  }

  deletedItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      return {
        data: newData,
      };
    });
  };

  addItem = (name, salary) => {
    this.setState(({ data }) => {
      const newUserArr = data.slice();
      newUserArr.push({
        name: name,
        salary: salary,
        increase: false,
        id: this.uid(),
      });
      return {
        data: newUserArr,
      };
    });
  };

  uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  render() {
    console.log(this.uid());
    const { data } = this.state;
    return (
      <div className='app'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDeleted={this.deletedItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
