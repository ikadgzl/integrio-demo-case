import { University } from '../types';

interface UniversityListItemProps {
  university: University;
}

const UniversityListItem = ({ university }: UniversityListItemProps) => {
  return (
    <tr>
      <td>{university.alpha_two_code}</td>
      <td>{university.country}</td>
      <td>{university.name}</td>
      <td>{university.domains}</td>
      <td>{university['state-province']}</td>
      <td>{university.web_pages[0]}</td>
    </tr>
  );
};

export default UniversityListItem;
