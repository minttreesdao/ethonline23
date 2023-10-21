import ConnectButton from '../components/ConnectButton';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream text-brown">
      <h3>ProfilePulse</h3>
      <h1 className="text-4xl mb-4">Are you a human?</h1>
      <p className="mb-8"> Your comprehensive digital identity management dApp that seamlessly integrates Web2 and Web3 technologies.</p>
      <ConnectButton />
      <footer className="mt-8">
        Built with Next.js, Wallet Connect, Next.ID, ...
      </footer>
    </div>
  );
}