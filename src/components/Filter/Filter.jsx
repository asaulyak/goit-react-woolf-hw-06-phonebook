import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const handleSearch = event => dispatch(setFilter(event.target.value));

  return (
    <div className={css.filter}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="search" name="search" onChange={handleSearch} />
    </div>
  );
}
