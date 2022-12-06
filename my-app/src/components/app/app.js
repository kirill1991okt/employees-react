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
        {
          name: 'Kirill',
          salary: '4000',
          increase: false,
          rise: true,
          id: '2',
        },
        { name: 'Alex', salary: '1000', increase: false, rise: false, id: '3' },
        { name: 'Math', salary: '2500', increase: false, rise: false, id: '4' },
      ],
      term: '',
      filter: 'allEmployees',
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
        rise: false,
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

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      // const element = data.findIndex((item) => item.id === id);

      // const old = data[element];
      // const newItem = { ...old, increase: !old.increase };
      // const newArr = [
      //   ...data.slice(0, element),
      //   newItem,
      //   ...data.slice(element + 1),
      // ];
      // return {
      //   data: newArr,
      // };

      // так же можно использовать следующий способ, он более короткий

      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, increase: !item.increase };
          }
          return item;
        }),
      };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      // const element = data.findIndex((item) => item.id === id);
      // const old = data[element];
      // const newItem = { ...old, rise: !old.rise };
      // const newArr = [
      //   ...data.slice(0, element),
      //   newItem,
      //   ...data.slice(element + 1),
      // ];
      // return {
      //   data: newArr,
      // };
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, rise: !item.rise };
          }
          return item;
        }),
      };
    });
  };

  searchEmp = (data, term) => {
    if (term.length === 0) {
      return data;
    }
    return data.filter((item) => item.name.indexOf(term) > -1);
  };

  onUpdateSearch = (term) => {
    this.setState({
      term: term,
    });
  };

  onUpdateFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  filterPost = (data, filter) => {
    switch (filter) {
      case 'increase':
        return data.filter((item) => item.rise);
      case 'moreThan1000':
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    }
  };

  onUpdateSalary = (name, salary) => {
    // console.log(name, salary);
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.name === name) {
            return { ...item, salary: salary };
          }
          return item;
        }),
      };
    });
  };

  render() {
    const { data, term, filter } = this.state;
    const increased = data.filter((item) => item.increase).length;
    const filtered = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo amountOfEmployees={data.length} takePremium={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filter} />
        </div>
        <EmployeesList
          data={filtered}
          onDeleted={this.deletedItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
          onUpdateSalary={this.onUpdateSalary}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
