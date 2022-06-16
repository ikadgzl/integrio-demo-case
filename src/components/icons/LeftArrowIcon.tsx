import { ArrowIconsProps } from '../../types';

export const LeftArrowIcon = ({ onClick, disabled }: ArrowIconsProps) => {
  return (
    <svg
      className='leftArrow'
      width='48px'
      height='48px'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      aria-label='leftArrow'
    >
      <rect width='48' height='48' fill='white' fillOpacity='0.01' />
      <path
        d='M31 36L19 24L31 12'
        stroke={disabled ? 'gray' : 'black'}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
