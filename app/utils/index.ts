import dayjs from 'dayjs';

export const formatDate = (dateStr: string | null | undefined) => {
  if (!dateStr) return '-';
  return dayjs(dateStr).format('DD MMMM YYYY');
};
