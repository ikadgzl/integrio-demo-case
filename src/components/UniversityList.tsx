import { MouseEvent, useEffect } from 'react';
import { getUniversityContext } from '../context/UniversityContext';
import { UniversityActionTypes } from '../context/universityReducer';
import { University } from '../types';
import { LeftArrowIcon } from './icons/LeftArrowIcon';
import Loading from './icons/Loading';
import { RightArrowIcon } from './icons/RightArrowIcon';
import UniversityListItem from './UniversityListItem';
import styles from './UniversityList.module.scss';

enum ArrowTypes {
  LEFT = 'leftArrow',
  RIGHT = 'rightArrow',
}

const UniversityList = () => {
  const { universityState, dispatch } = getUniversityContext();

  // handle bang op below by proper actions on reducer
  const UNIVERSITIES_PER_PAGE = 10;
  const TOTAL_PAGES =
    universityState.universities!.length / UNIVERSITIES_PER_PAGE - 1;
  const BEGINNING_OF_THE_PAGE = universityState.page! * UNIVERSITIES_PER_PAGE;

  const handlePagination = (e: MouseEvent<SVGElement>) => {
    switch (e.currentTarget.ariaLabel) {
      case ArrowTypes.LEFT:
        universityState.page! > 0 &&
          dispatch({
            type: UniversityActionTypes.HANDLE_PAGE,
            payload: { page: universityState.page! - 1 },
          });
        break;

      case ArrowTypes.RIGHT:
        universityState.page! < TOTAL_PAGES &&
          dispatch({
            type: UniversityActionTypes.HANDLE_PAGE,
            payload: { page: universityState.page! + 1 },
          });
        break;
    }
  };

  // Maybe make this a hook, both lists using it, or maybe entire pagination logic
  useEffect(() => {
    if (universityState.page! > TOTAL_PAGES) {
      dispatch({
        type: UniversityActionTypes.HANDLE_PAGE,
        payload: { page: 0 },
      });
    }
  }, [TOTAL_PAGES]);

  if (universityState.isLoading) {
    return (
      <section className={styles.listSection}>
        <Loading />
      </section>
    );
  }
  return (
    <section className={styles.listSection}>
      {universityState.universities!.length > 0 ? (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Code</th>
                <th>Country</th>
                <th>Name</th>
                <th>Domains</th>
                <th>Province</th>
                <th>Web Pages</th>
              </tr>
            </thead>
            <tbody>
              {universityState
                .universities!.slice(
                  BEGINNING_OF_THE_PAGE,
                  BEGINNING_OF_THE_PAGE + UNIVERSITIES_PER_PAGE
                )
                .map((university: University, index: number) => (
                  <UniversityListItem key={index} university={university} />
                ))}
            </tbody>
          </table>

          <div className={styles.listIcons}>
            <LeftArrowIcon
              disabled={universityState.page! < 1}
              onClick={handlePagination}
            />
            <RightArrowIcon
              disabled={universityState.page! > TOTAL_PAGES - 1}
              onClick={handlePagination}
            />
          </div>
        </>
      ) : (
        <p>No such university!</p>
      )}
    </section>
  );
};

export default UniversityList;
