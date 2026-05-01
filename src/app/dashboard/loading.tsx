export default function Loading() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      <div className="w-1/3 h-6 bg-gray-200 rounded" />

      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded" />
        ))}
      </div>

      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, j) => (
            <div key={j} className="h-4 bg-gray-100 rounded" />
          ))}
        </div>
      ))}
    </div>
  );
}
