import { useEffect } from 'react';
import Loading from '../components/icons/Loading';
import UniversityFilter from '../components/UniversityFilter';
import UniversityList from '../components/UniversityList';
import { API } from '../constants/API';
import { getUniversityContext } from '../context/UniversityContext';
import { UniversityActionTypes } from '../context/universityReducer';
import styles from './UniversitySearch.module.scss';

const UniversitySearch = () => {
  const { universityState, dispatch } = getUniversityContext();

  useEffect(() => {
    dispatch({
      type: UniversityActionTypes.SET_READY,
      payload: { isLoading: true },
    });

    (async () => {
      const res = await fetch(API.university);
      const data = await res.json();

      console.log(data);

      dispatch({
        type: UniversityActionTypes.FETCH_UNIVERSITIES,
        payload: { universities: data },
      });
      dispatch({
        type: UniversityActionTypes.SET_READY,
        payload: { isLoading: false },
      });
    })();
  }, []);

  useEffect(() => {
    if (
      universityState.queryParams?.country ||
      universityState.queryParams?.nameContains ||
      universityState.queryParams?.name
    ) {
      dispatch({
        type: UniversityActionTypes.SET_READY,
        payload: { isLoading: true },
      });

      (async () => {
        // TODO: maybe mapping logic for query params instead of hardcoding like this.
        const res = await fetch(
          `${API.university}?name=${
            universityState.queryParams!.name
          }&country=${universityState.queryParams!.country}&name_contains=${
            universityState.queryParams!.nameContains
          }`
        );
        const data = await res.json();

        dispatch({
          type: UniversityActionTypes.FETCH_UNIVERSITIES,
          payload: { universities: data },
        });
        dispatch({
          type: UniversityActionTypes.SET_READY,
          payload: { isLoading: false },
        });
      })();
    }
  }, [universityState.queryParams]);

  return (
    // TODO: add back arrow to main menu.
    <main className={styles.main}>
      <UniversityFilter />
      <UniversityList />
    </main>
  );
};

export default UniversitySearch;
