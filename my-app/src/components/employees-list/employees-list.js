import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDeleted, onToggleIncrease, onToggleRise }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        rise={item.rise}
        onDeleted={() => {
          onDeleted(item.id);
        }}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onToggleRise={() => onToggleRise(item.id)}
      />
    ); // можно так же записать свойства: {...item}
  });

  return <ul className='app-list list-group '>{elements}</ul>;
};

export default EmployeesList;
