// src/components/HumanityScore.tsx

type HumanityScoreProps = {
  score: number;
};

export default function HumanityScore({ score }: HumanityScoreProps) {
  const widthStyle = {
    width: `${score}%`
  };

  return (
    <div className="flex items-center">
      <p className="mr-4">Humanity Score: {score}</p>
      <div className="bg-gray-300 w-32 rounded-full overflow-hidden">
        <div 
          className="bg-green-500 h-2 transition-width duration-300 ease-in-out"
          style={widthStyle}
          role="progressbar"
          aria-valuenow={score}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}
