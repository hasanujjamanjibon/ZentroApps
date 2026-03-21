const InstalledAppsSkeltonLoader = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg shadow-sm max-w-4xl mx-auto animate-pulse'>
      {/* Left Side: Image and Details */}
      <div className='flex items-center gap-4 flex-1'>
        {/* Skeleton for App Icon */}
        <div className='w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0'></div>

        <div className='flex flex-col gap-2 w-full max-w-[200px] md:max-w-[300px]'>
          {/* Skeleton for Title */}
          <div className='h-5 bg-gray-200 rounded w-full'></div>

          {/* Skeleton for Stats (Downloads, Rating, Size) */}
          <div className='flex items-center gap-3'>
            <div className='h-3 bg-gray-200 rounded w-8'></div>
            <div className='h-3 bg-gray-200 rounded w-8'></div>
            <div className='h-3 bg-gray-200 rounded w-12'></div>
          </div>
        </div>
      </div>

      {/* Right Side: Action Button Skeleton */}
      <div className='h-10 w-24 bg-gray-200 rounded-md'></div>
    </div>
  );
};

export default InstalledAppsSkeltonLoader;
