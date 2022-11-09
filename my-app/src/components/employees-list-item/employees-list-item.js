import './employees-list-item.css';

const EmployeesListItem = ({
  name,
  salary,
  increase,
  rise,
  onDeleted,
  onToggleIncrease,
  onToggleRise,
}) => {
  let className = 'list-group-item d-flex justify-content-between';
  if (increase) {
    className += ' increase';
  }
  if (rise) {
    className += ' like';
  }

  return (
    <li className={className}>
      <span onClick={onToggleRise} className='list-group-item-label'>
        {name}
      </span>
      <input
        type='text'
        className='list-group-item-input'
        defaultValue={salary}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          onClick={onToggleIncrease}
          type='button'
          className='btn-cookie btn-sm '
        >
          <i className='fas fa-cookie'></i>
        </button>

        <button type='button' className='btn-trash btn-sm ' onClick={onDeleted}>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
