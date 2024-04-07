import dynamic from 'next/dynamic';

export const TeamsListComponent = dynamic(() => import('./TeamsList'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
