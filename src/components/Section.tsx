// src/components/Section.tsx

type SectionProps = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function Section({ title, children }: SectionProps) {
    return (
      <div className="mb-4">
        <h2 className="text-xl mb-2">{title}</h2>
        {children}
      </div>
    );
  }
  