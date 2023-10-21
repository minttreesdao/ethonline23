// src/components/TopBar.tsx
import LeftControls from './LeftControls';
import ProfileSummary from './ProfileSummary';
import HumanityScore from './HumanityScore';

type TopBarProps = {
  score: number;
};

export default function TopBar({ score }: TopBarProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <LeftControls />
      <ProfileSummary />
      <HumanityScore score={score} />
    </div>
  );
}