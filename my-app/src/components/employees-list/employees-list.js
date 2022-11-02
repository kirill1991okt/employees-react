import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDeleted }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        onDeleted={() => {
          onDeleted(item.id);
        }}
      />
    ); // можно так же записать свойства: {...item}
  });

  return <ul className='app-list list-group '>{elements}</ul>;
};

export default EmployeesList;
