import { useAccount } from 'wagmi';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/Dashboard';
import { useIsMounted } from '../utils/useIsMounted';

export default function Home() {
  const { isConnected } = useAccount();
  const isMounted = useIsMounted();

  if (!isMounted) return null
    return (
      <>
        {isConnected ? (
          <Dashboard />
        ) : (
          <LandingPage />
        )}
      </>
    );
}