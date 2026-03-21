import Skeleton from './Skeleton';
import SkeletonCard from './SkeletonCard';

const DetailsSkeltonLoader = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 md:p-8 space-y-8'>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row gap-6 items-start'>
        <SkeletonCard className='w-32 h-32 md:w-48 md:h-48 rounded-lg' />

        <div className='flex-1 space-y-4 w-full'>
          <Skeleton className='h-8 w-3/4' />
          <Skeleton className='h-4 w-1/4' />

          <div className='grid grid-cols-3 gap-4 py-4'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='space-y-2'>
                <Skeleton className='h-6 w-full' />
                <Skeleton className='h-4 w-1/2 mx-auto' />
              </div>
            ))}
          </div>
          <Skeleton className='h-10 w-24 rounded-md' />
        </div>
      </div>

      {/* Ratings Section */}
      <div className='space-y-4'>
        <Skeleton className='h-8 w-32' />
        <div className='space-y-3'>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className='flex items-center gap-4'>
              <Skeleton className='h-4 w-12' />
              <Skeleton className={`h-4 flex-1 rounded-full`} />
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className='space-y-4'>
        <Skeleton className='h-8 w-40' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-5/6' />
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeltonLoader;
