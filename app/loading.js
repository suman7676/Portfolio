export default function CardSkeletonLoader({ count = 6 }) {
  
  const cards = Array.from({ length: count });

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((_, index) => (
        <div
          key={index}
          className="border rounded-lg shadow p-4 animate-pulse bg-white dark:bg-gray-800"
        >
          {/* Image Placeholder */}
          <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

          {/* Title Placeholder */}
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

          {/* Description Placeholder */}
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-1"></div>
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  );
}
