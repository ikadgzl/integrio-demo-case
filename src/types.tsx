import { MouseEventHandler } from 'react';

/* TODO: below should be mapped into proper js object,
  backend has no pagination, mapping the whole data is bad idea,
  maybe map it while paginating, means 10 by 10 in UniversityListItem  
*/
export interface University {
  alpha_two_code: string;
  country: string;
  name: string;
  domains: string[];
  'state-province': string;
  web_pages: string[];
}

export interface UniversityQueryParams {
  name: string;
  country: string;
  nameContains: string;
}

type Username = {
  title: string;
  first: string;
  last: string;
};

type UserPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export interface User {
  email: string;
  name: Username;
  gender: string;
  picture: UserPicture;
}

export interface ArrowIconsProps {
  onClick?: MouseEventHandler<SVGElement>;
  disabled?: boolean;
}
