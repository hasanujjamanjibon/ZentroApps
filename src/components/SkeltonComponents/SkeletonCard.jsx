const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 w-full max-w-xs animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-xl"></div>

      {/* Title Skeleton */}
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>

      {/* Bottom Row */}
      <div className="flex justify-between mt-4">
        <div className="h-6 w-16 bg-gray-300 rounded-lg"></div>
        <div className="h-6 w-12 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;