// src/components/MainContent.tsx
import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import Section from './Section';

export default function MainContent() {
  const { address } = useAccount();
  const [linkedIdentities, setLinkedIdentities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (address) {
      fetch(`https://api.web3.bio/profile/${address}`)
        .then(response => response.json())
        .then(data => {
          setLinkedIdentities(data || []);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [address]);

  const renderIdentities = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (linkedIdentities.length === 0) {
      return <p>No identities found.</p>;
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {linkedIdentities.map(({ platform, displayName, address }) => (
            <div key={`${platform}-${address}`} className="p-4 border rounded">
              <h2 className="text-xl font-bold">{platform}</h2>
              <p>{displayName}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <Section title="Linked Identities">
        {renderIdentities()}
      </Section>
    </div>
  );
}
