// src/components/Dashboard.tsx
import { useAccount } from 'wagmi';
import { useQuery } from '@apollo/client';
import client from '../utils/apolloClient';

import { computeHumanityScore } from '../utils/computeHumanityScore';
import { HUMANITY_SCORE_QUERY } from '../queries/humanityScoreQuery';

import TopBar from './TopBar';
import MainContent from './MainContent';
import BottomNavigation from './BottomNavigation';
import HelpSupport from './HelpSupport';

export default function Dashboard() {
  const { address } = useAccount();
  const { loading, error, data } = useQuery(HUMANITY_SCORE_QUERY, {
    variables: { identity: address }, client: client,
    skip: !address  // Skip the query if address is not available
  });
  
  const score = !loading && !error ? computeHumanityScore(data) : 0;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar score={score} />
      <MainContent />
      <BottomNavigation />
      <HelpSupport />
    </div>
  );
}
