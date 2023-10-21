// src/components/IconButton.tsx

type IconButtonProps = {
    icon: string;
  };
  
  export default function IconButton({ icon }: IconButtonProps) {
    return (
      <button className="p-2 rounded-full hover:bg-gray-200">
        {icon}
      </button>
    );
  }
  