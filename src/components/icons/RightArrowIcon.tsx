import { ArrowIconsProps } from '../../types';

export const RightArrowIcon = ({ onClick, disabled }: ArrowIconsProps) => {
  return (
    <svg
      className='rightArrow'
      width='48px'
      height='48px'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      aria-label='rightArrow'
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <rect width='48' height='48' fill='white' fillOpacity='0.01' />
      <path
        d='M19 12L31 24L19 36'
        stroke={disabled ? 'gray' : 'black'}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
