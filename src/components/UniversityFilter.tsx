import { ChangeEvent, MouseEvent, useState } from 'react';
import { getUniversityContext } from '../context/UniversityContext';
import { UniversityQueryParams } from '../types';
import { UniversityActionTypes } from '../context/universityReducer';
import styles from './UniversityFilter.module.scss';

const INITIAL_VALUE: UniversityQueryParams = {
  country: '',
  name: '',
  nameContains: '',
};

const UniversityFilter = () => {
  const [queryParams, setQueryParams] =
    useState<UniversityQueryParams>(INITIAL_VALUE);

  const { dispatch } = getUniversityContext();

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: UniversityActionTypes.SET_QUERY_PARAMS,
      payload: { queryParams },
    });

    setQueryParams(INITIAL_VALUE);
  };

  const handleQueryParams = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryParams((prevQueryParams) => ({
      ...prevQueryParams,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className={styles.filterForm} onSubmit={handleSubmit}>
      <label className={styles.filterInput}>
        University name:
        <input
          type='text'
          name='name'
          value={queryParams.name}
          onChange={handleQueryParams}
        />
      </label>

      <label className={styles.filterInput}>
        University name can contain:
        <input
          type='text'
          name='nameContains'
          value={queryParams.nameContains}
          onChange={handleQueryParams}
        />
      </label>

      <label className={styles.filterInput}>
        Country name:
        <input
          type='text'
          name='country'
          value={queryParams.country}
          onChange={handleQueryParams}
        />
      </label>

      <button className={styles.filterButton} type='submit'>
        Search!
      </button>
    </form>
  );
};

export default UniversityFilter;
