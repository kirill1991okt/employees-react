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

  uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  render() {
    const { data } = this.state;
    const increased = data.filter((item) => item.increase).length;
    return (
      <div className='app'>
        <AppInfo amountOfEmployees={data.length} takePremium={increased} />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={data}
          onDeleted={this.deletedItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
