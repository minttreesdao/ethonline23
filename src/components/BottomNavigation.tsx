// src/components/BottomNavigation.tsx
import IconButton from './IconButton';
import NavigationItems from './NavigationItems';

export default function BottomNavigation() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <NavigationItems />
      <IconButton icon="🔍" />
    </div>
  );
}
