import { ChangeEvent, MouseEvent, useState } from 'react';
import {
  getUniversityContext,
  INITIAL_VALUE,
} from '../context/UniversityContext';
import { UniversityQueryParams } from '../types';
import { UniversityActionTypes } from '../context/universityReducer';

const UniversityFilter = () => {
  const { dispatch } = getUniversityContext();
  const [queryParams, setQueryParams] =
    useState<UniversityQueryParams>(INITIAL_VALUE);

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: UniversityActionTypes.SET_QUERY_PARAMS,
      payload: queryParams,
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
    <form onSubmit={handleSubmit}>
      <label>
        University name:
        <input
          type='text'
          name='name'
          value={queryParams.name}
          onChange={handleQueryParams}
        />
      </label>

      <label>
        University name can contain:
        <input
          type='text'
          name='nameContains'
          value={queryParams.nameContains}
          onChange={handleQueryParams}
        />
      </label>

      <label>
        Country name:
        <input
          type='text'
          name='country'
          value={queryParams.country}
          onChange={handleQueryParams}
        />
      </label>

      <button type='submit'>Search!</button>
    </form>
  );
};

export default UniversityFilter;
