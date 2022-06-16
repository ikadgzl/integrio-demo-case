import { MouseEvent, useState } from 'react';
import { API } from '../constants/API';
import { getUniversityContext } from '../context/UniversityContext';
import { useFetch } from '../hooks/useFetch';
import { University } from '../types';
import { LeftArrowIcon } from './icons/LeftArrowIcon';
import Loading from './icons/Loading';
import { RightArrowIcon } from './icons/RightArrowIcon';
import UniversityListItem from './UniversityListItem';

enum ArrowTypes {
  LEFT = 'leftArrow',
  RIGHT = 'rightArrow',
}

const UniversityList = () => {
  // TODO: when page is at 5, search uni and got 1 result, have to go back 4 times -> instead make pagination 0 again.
  const [pagination, setPagination] = useState<number>(0);
  const { universityState } = getUniversityContext();
  const { state: universities, isLoading } = useFetch<University>(
    // TODO: maybe mapping logic for query params instead of hardcoding like this.
    `${API.university}?name=${universityState.name}&country=${universityState.country}&name_contains=${universityState.nameContains}`,
    universityState
  );

  const UNIVERSITIES_PER_PAGE = 10;
  const TOTAL_PAGES = universities.length / UNIVERSITIES_PER_PAGE;
  const BEGINNING_OF_THE_PAGE = pagination * UNIVERSITIES_PER_PAGE;

  const handlePagination = (e: MouseEvent<SVGElement>) => {
    switch (e.currentTarget.ariaLabel) {
      case ArrowTypes.LEFT:
        pagination > 0 && setPagination((prevPagination) => prevPagination - 1);
        break;

      case ArrowTypes.RIGHT:
        pagination < TOTAL_PAGES - 1 &&
          setPagination((prevPagination) => prevPagination + 1);
        break;
    }
  };

  if (isLoading) return <Loading />;

  return (
    <section>
      {universities.length > 0 ? (
        <div>
          <table>
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
              {universities
                .slice(
                  BEGINNING_OF_THE_PAGE,
                  BEGINNING_OF_THE_PAGE + UNIVERSITIES_PER_PAGE
                )
                .map((university: University, index: number) => (
                  <UniversityListItem key={index} university={university} />
                ))}
            </tbody>
          </table>

          <LeftArrowIcon disabled={pagination < 1} onClick={handlePagination} />
          <RightArrowIcon
            disabled={pagination > TOTAL_PAGES - 1}
            onClick={handlePagination}
          />
        </div>
      ) : (
        <p>No such university!</p>
      )}
    </section>
  );
};

export default UniversityList;
