import React from 'react'
import {
  IconArrowUpRight,
  IconMenu2
} from '@tabler/icons-react'

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  ArrowUpRight: IconArrowUpRight,
  Menu: IconMenu2,
  Logotype: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={512}
        height={158.59}
        viewBox='0 0 512 158.59'
        {...props}
      >
        <g>
          <g>
            <path d='m0,2.69v154.99h154.98V2.69H0Zm146.31,146.33H8.67V11.36h137.64v137.66Z' />
            <path d='m35.25,103.68h18.98v18.87c0,6.01,4.89,10.9,10.9,10.9h55.08c6.01,0,10.9-4.89,10.9-10.9v-54.7c0-6.01-4.89-10.9-10.9-10.9h-18.98v-18.88c0-6.01-4.89-10.9-10.9-10.9h-55.08c-6.01,0-10.91,4.89-10.91,10.9v54.7c0,6.01,4.89,10.9,10.91,10.9Zm84.96-38.06c1.21,0,2.24,1.03,2.24,2.24v54.7c0,1.21-1.02,2.23-2.24,2.23h-55.08c-1.21,0-2.24-1.02-2.24-2.23v-18.87h27.42c6.01,0,10.9-4.89,10.9-10.9v-27.16h18.98Zm-57.31,29.39v-27.16c0-1.21,1.02-2.24,2.24-2.24h27.42v27.16c0,1.21-1.02,2.23-2.24,2.23h-27.42Zm-29.89-56.93c0-1.21,1.02-2.24,2.24-2.24h55.08c1.21,0,2.24,1.02,2.24,2.24v18.88h-27.42c-6.01,0-10.9,4.89-10.9,10.9v27.16h-18.98c-1.21,0-2.24-1.02-2.24-2.23v-54.7Z' />
          </g>
          <g>
            <path d='m238.06,2.69c13.48,0,24.95,4.81,34.42,14.42,9.47,9.61,14.21,21.25,14.21,34.91s-4.76,25.33-14.28,34.98c-9.52,9.66-20.97,14.49-34.35,14.49h-42.55V2.69h42.55Zm-.57,81.14c8.57,0,15.9-3.11,21.98-9.33,6.08-6.22,9.12-13.71,9.12-22.48s-3.04-16.26-9.12-22.48c-6.08-6.22-13.41-9.33-21.98-9.33h-23.75v63.61h23.75Z' />
            <path d='m355.95,46.22h45.66c.19,1.32.28,3.25.28,5.8,0,14.51-4.34,26.62-13,36.33-9.42,10.56-21.53,15.83-36.33,15.83s-26.57-5.11-36.75-15.34c-10.18-10.22-15.27-22.5-15.27-36.82s5.09-26.57,15.27-36.75c10.18-10.18,22.43-15.27,36.75-15.27,8.29,0,16.16,1.89,23.61,5.66,7.44,3.77,13.62,9,18.52,15.69l-14.98,10.46c-3.2-4.24-7.19-7.58-11.94-10.04-4.76-2.45-9.82-3.68-15.2-3.68-9.33,0-17.29,3.32-23.89,9.97-6.6,6.64-9.9,14.63-9.9,23.96s3.3,17.32,9.9,23.96c6.59,6.64,14.56,9.97,23.89,9.97,7.73,0,14.11-2.1,19.15-6.29,5.04-4.19,8.5-9.59,10.39-16.18h-26.15v-17.25Z' />
            <path d='m463.37,2.69c13.48,0,24.95,4.81,34.42,14.42,9.47,9.61,14.21,21.25,14.21,34.91s-4.76,25.33-14.28,34.98c-9.52,9.66-20.97,14.49-34.35,14.49h-42.55V2.69h42.55Zm-.57,81.14c8.57,0,15.9-3.11,21.98-9.33,6.08-6.22,9.12-13.71,9.12-22.48s-3.04-16.26-9.12-22.48c-6.08-6.22-13.41-9.33-21.98-9.33h-23.75v63.61h23.75Z' />
          </g>
          <g>
            <path d='m223.49,140.02c1.28.61,2.49,1.6,3.62,2.97,1.14,1.38,1.7,3.07,1.7,5.09,0,2.66-.94,4.92-2.81,6.79-1.87,1.87-4.12,2.81-6.74,2.81h-20.3v-33.54h19.39c2.53,0,4.68.89,6.46,2.66,1.77,1.78,2.66,3.93,2.66,6.45,0,1.54-.42,2.9-1.27,4.08-.85,1.18-1.75,2.08-2.71,2.69Zm-2.4-6.24c0-1.12-.39-2.07-1.18-2.86-.79-.78-1.72-1.17-2.81-1.17h-12.14v7.92h12.14c1.12,0,2.06-.38,2.83-1.13.77-.75,1.15-1.67,1.15-2.76Zm-2.97,18.28c1.25,0,2.31-.44,3.19-1.32.88-.88,1.32-1.94,1.32-3.19s-.44-2.3-1.32-3.17c-.88-.86-1.94-1.3-3.19-1.3h-13.15v8.97h13.15Z' />
            <path d='m268.99,124.14h6.14v18.76c0,4.32-1.54,8.02-4.61,11.09-3.07,3.07-6.78,4.61-11.13,4.61s-8.06-1.54-11.13-4.61c-3.07-3.07-4.61-6.77-4.61-11.09v-18.76h6.19v18.76c0,2.62.93,4.86,2.81,6.72,1.87,1.85,4.12,2.78,6.74,2.78s4.92-.93,6.79-2.78c1.87-1.86,2.81-4.1,2.81-6.72v-18.76Z' />
            <path d='m304.45,138.15c1.44.45,2.6.83,3.48,1.15.88.32,1.94.79,3.17,1.42,1.23.62,2.19,1.26,2.88,1.92.69.66,1.29,1.5,1.8,2.52.51,1.02.77,2.14.77,3.36,0,2.37-.7,4.32-2.11,5.86-1.41,1.53-3.14,2.6-5.18,3.19s-4.37.89-6.96.89c-4.83,0-9.41-1.25-13.72-3.74l3.12-4.94c3.74,2.05,7.36,3.07,10.85,3.07,5.05,0,7.58-1.31,7.58-3.94,0-.7-.2-1.33-.6-1.9-.4-.56-1.03-1.05-1.9-1.49s-1.67-.79-2.42-1.06-1.8-.61-3.14-1.03c-.06-.03-.12-.05-.17-.05s-.1-.02-.14-.05c-.05-.03-.1-.05-.17-.05-1.53-.48-2.73-.86-3.57-1.15-.85-.29-1.91-.75-3.19-1.39-1.28-.64-2.26-1.29-2.95-1.94s-1.3-1.51-1.82-2.57c-.53-1.06-.79-2.24-.79-3.55,0-2.72,1.12-4.91,3.36-6.57,2.43-1.76,5.87-2.64,10.32-2.64s8.67,1.23,12.96,3.7l-3.02,4.8c-3.58-1.98-6.99-2.97-10.22-2.97-2.27,0-4,.32-5.18.96-1.18.64-1.78,1.49-1.78,2.54,0,.7.19,1.33.57,1.87s.99,1.02,1.8,1.44c.82.41,1.61.77,2.4,1.05s1.8.62,3.05,1.01c.41.13.73.22.96.29Z' />
            <path d='m332.04,157.68v-33.54h6.19v33.54h-6.19Z' />
            <path d='m385.5,157.68h-4.51l-19.82-23.04v23.04h-6.19v-33.54h4.51l19.82,23.03v-23.03h6.19v33.54Z' />
            <path d='m429.37,129.94h-20.83v8.06h17.23v5.81h-17.23v8.06h20.83v5.81h-27.02v-33.54h27.02v5.81Z' />
            <path d='m458.78,138.15c1.44.45,2.6.83,3.48,1.15.88.32,1.94.79,3.17,1.42,1.23.62,2.19,1.26,2.88,1.92.69.66,1.29,1.5,1.8,2.52.51,1.02.77,2.14.77,3.36,0,2.37-.7,4.32-2.11,5.86-1.41,1.53-3.14,2.6-5.18,3.19s-4.37.89-6.96.89c-4.83,0-9.41-1.25-13.72-3.74l3.12-4.94c3.74,2.05,7.36,3.07,10.85,3.07,5.05,0,7.58-1.31,7.58-3.94,0-.7-.2-1.33-.6-1.9-.4-.56-1.03-1.05-1.9-1.49s-1.67-.79-2.42-1.06-1.8-.61-3.14-1.03c-.06-.03-.12-.05-.17-.05s-.1-.02-.14-.05c-.05-.03-.1-.05-.17-.05-1.53-.48-2.73-.86-3.57-1.15-.85-.29-1.91-.75-3.19-1.39-1.28-.64-2.26-1.29-2.95-1.94s-1.3-1.51-1.82-2.57c-.53-1.06-.79-2.24-.79-3.55,0-2.72,1.12-4.91,3.36-6.57,2.43-1.76,5.87-2.64,10.32-2.64s8.67,1.23,12.96,3.7l-3.02,4.8c-3.58-1.98-6.99-2.97-10.22-2.97-2.27,0-4,.32-5.18.96-1.18.64-1.78,1.49-1.78,2.54,0,.7.19,1.33.57,1.87s.99,1.02,1.8,1.44c.82.41,1.61.77,2.4,1.05s1.8.62,3.05,1.01c.41.13.73.22.96.29Z' />
            <path d='m499.91,138.15c1.44.45,2.6.83,3.48,1.15.88.32,1.94.79,3.17,1.42,1.23.62,2.19,1.26,2.88,1.92.69.66,1.29,1.5,1.8,2.52.51,1.02.77,2.14.77,3.36,0,2.37-.7,4.32-2.11,5.86-1.41,1.53-3.14,2.6-5.18,3.19s-4.37.89-6.96.89c-4.83,0-9.41-1.25-13.72-3.74l3.12-4.94c3.74,2.05,7.36,3.07,10.85,3.07,5.05,0,7.58-1.31,7.58-3.94,0-.7-.2-1.33-.6-1.9-.4-.56-1.03-1.05-1.9-1.49s-1.67-.79-2.42-1.06-1.8-.61-3.14-1.03c-.06-.03-.12-.05-.17-.05s-.1-.02-.14-.05c-.05-.03-.1-.05-.17-.05-1.53-.48-2.73-.86-3.57-1.15-.85-.29-1.91-.75-3.19-1.39-1.28-.64-2.26-1.29-2.95-1.94s-1.3-1.51-1.82-2.57c-.53-1.06-.79-2.24-.79-3.55,0-2.72,1.12-4.91,3.36-6.57,2.43-1.76,5.87-2.64,10.32-2.64s8.67,1.23,12.96,3.7l-3.02,4.8c-3.58-1.98-6.99-2.97-10.22-2.97-2.27,0-4,.32-5.18.96-1.18.64-1.78,1.49-1.78,2.54,0,.7.19,1.33.57,1.87s.99,1.02,1.8,1.44c.82.41,1.61.77,2.4,1.05s1.8.62,3.05,1.01c.41.13.73.22.96.29Z' />
          </g>
        </g>
      </svg>
    )
  },
  Logomark: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={512}
        height={512}
        viewBox='0 0 512 512'
        {...props}
      >
        <g>
          <path d='M0,0v512h512V0H0z M483.4,483.4H28.6V28.6h454.7V483.4L483.4,483.4z' />
          <path
            d='M116.5,333.6h62.7V396c0,19.9,16.2,36,36,36h181.9c19.9,0,36-16.2,36-36V215.3c0-19.9-16.1-36-36-36h-62.7
            v-62.3c0-19.9-16.2-36-36-36H116.5c-19.9,0-36,16.2-36,36v180.7C80.4,317.5,96.6,333.6,116.5,333.6L116.5,333.6z M397.2,207.9
            c4,0,7.4,3.4,7.4,7.4V396c0,4-3.4,7.4-7.4,7.4H215.2c-4,0-7.4-3.4-7.4-7.4v-62.4h90.6c19.9,0,36-16.2,36-36v-89.7L397.2,207.9
            L397.2,207.9z M207.8,305v-89.7c0-4,3.4-7.4,7.4-7.4h90.6v89.7c0,4-3.4,7.4-7.4,7.4L207.8,305L207.8,305z M109.1,116.9
            c0-4,3.4-7.4,7.4-7.4h181.9c4,0,7.4,3.4,7.4,7.4v62.3h-90.6c-19.9,0-36,16.1-36,36V305h-62.7c-4,0-7.4-3.4-7.4-7.4L109.1,116.9
            L109.1,116.9z'
          />
        </g>
      </svg>
    )
  },
  Spinner: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        stroke='#000'
        viewBox='0 0 24 24'
        {...props}
      >
        <g>
          <circle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'>
            <animate attributeName='stroke-dasharray' dur='1.5s' calcMode='spline' values='0 150;42 150;42 150;42 150' keyTimes='0;0.475;0.95;1' keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1' repeatCount='indefinite' />
            <animate attributeName='stroke-dashoffset' dur='1.5s' calcMode='spline' values='0;-16;-59;-59' keyTimes='0;0.475;0.95;1' keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1' repeatCount='indefinite' />
          </circle>
          <animateTransform attributeName='transform' type='rotate' dur='2s' values='0 12 12;360 12 12' repeatCount='indefinite' />
        </g>
      </svg>
    )
  },
  Sun: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        {...props}
      >
        <path
          d='M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386
          0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276
          4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967
          2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7
          2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867
          4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967
          12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386
          14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144
          12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772
          4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5
          15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986
          12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938
          10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457
          8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5
          7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z'
        />
      </svg>
    )
  },
  Moon: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        {...props}
      >
        <path
          d='M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998
          0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998
          1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998
          2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998
          1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998
          3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906
          4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998
          5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089
          4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906
          6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756
          7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998
          8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998
          7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275
          0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932
          9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563
          11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883
          12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157
          13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857
          13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241
          14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032
          7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891
          5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773
          13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134
          2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488
          1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032
          4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002
          7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963
          10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373
          9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403
          8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853
          5.90487 10.4032 5.60464 10.4032 5.30023Z'
        />
      </svg>
    )
  },
  Laptop: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        {...props}
      >
        <path
          d='M2 4.25C2 4.11193 2.11193 4 2.25 4H12.75C12.8881 4 13 4.11193 13 4.25V11.5H2V4.25ZM2.25 3C1.55964 3 1 3.55964 1 4.25V12H0V12.5C0
          12.7761 0.223858 13 0.5 13H14.5C14.7761 13 15 12.7761 15 12.5V12H14V4.25C14 3.55964 13.4404 3 12.75 3H2.25Z'
        />
      </svg>
    )
  },
  Shapes: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
      >
        <path d='M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z' />
        <rect x='3' y='14' width='7' height='7' rx='1' />
        <circle cx='17.5' cy='17.5' r='3.5' />
      </svg>
    )
  }
}
