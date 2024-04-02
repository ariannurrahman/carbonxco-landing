export const BASE_URL = 'https://api.carbonxco.com/v1/w';

export type sdg = 1 | 2 | 5 | 8 | 11 | 13 | 15 | 17;

interface color {
  bg: string;
  border: string;
  text: string;
  caption: string;
}

export const SDG_COLOR: Record<sdg, color> = {
  1: {
    bg: 'bg-[#FFD1D5]',
    border: 'border-[#EB1C2D]',
    text: 'text-[#EB1C2D]',
    caption: 'No Poverty',
  },
  2: {
    bg: 'bg-[#FFEEC8]',
    border: 'border-[#D4A029]',
    text: 'text-[#D4A029]',
    caption: 'Zero Hunger',
  },
  5: {
    bg: 'bg-[#FFD0CA]',
    border: 'border-[#EF412A]',
    text: 'text-[#EF412A]',
    caption: 'Gender Equality',
  },
  8: {
    bg: 'bg-[#FDA8BF]',
    border: 'border-[#8F1838]',
    text: 'text-[#8F1838]',
    caption: 'Decent Work and Economic Growth',
  },
  11: {
    bg: 'bg-[#FFE1B9]',
    border: 'border-[#F99D25]',
    text: 'text-[#F99D25]',
    caption: 'Sustainable Cities and Communities',
  },
  13: {
    bg: 'bg-[#D2EBCD]',
    border: 'border-[#48773E]',
    text: 'text-[#48773E]',
    caption: 'Climate Action',
  },
  15: {
    bg: 'bg-[#E4FFE7]',
    border: 'border-[#3EB049]',
    text: 'text-[#3EB049]',
    caption: 'Life on Land',
  },
  17: {
    bg: 'bg-[#D3E7F3]',
    border: 'border-[#00659E]',
    text: 'text-[#00659E]',
    caption: 'Partnership for the Growth',
  },
};
