import Link from 'next/link';

const projectNames = [
  'Calculator',
];

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects 180</h1>
      <div className="grid grid-cols-2 gap-4">
        {projectNames.map((name, i) => (
          <Link
            key={i}
            href={`/projects/project${String(i + 1)}`}
            className="p-4 border rounded hover:bg-gray-100"
          >
            {`Project ${String(i + 1)} - ${name}`}
          </Link>
        ))}
      </div>
    </main>
  );
}
