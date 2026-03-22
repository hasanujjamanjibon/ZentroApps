import ContextWrapper from '../provider/ContextWrapper';

const InstalledCard = ({ app }) => {
  const { image, title, id, size, ratingAvg, downloads } = app || {};
  const { handleRemoveData } = ContextWrapper();
  return (
    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 max-w-6xl mx-auto'>
      {/* Left Side */}
      <div className='flex items-start sm:items-center gap-3 sm:gap-4'>
        {/* App Icon */}
        <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-md shrink-0'>
          <img
            src={image}
            alt={title}
            className='h-full w-full object-cover rounded-md'
          />
        </div>

        {/* Details */}
        <div className='flex flex-col justify-center gap-1 min-w-0'>
          {/* Title */}
          <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800 leading-snug line-clamp-2 wrap-break-words'>
            {title}
          </h3>

          {/* Stats */}
          <div className='flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-3 text-[11px] sm:text-xs md:text-sm font-medium'>
            {/* Downloads */}
            <div className='flex items-center gap-1 text-emerald-500 whitespace-nowrap'>
              <img
                className='h-3 w-3 sm:h-3.5 sm:w-3.5'
                src='/assets/icon-downloads.png'
                alt='Downloads'
              />
              <span>
                {downloads >= 1000000
                  ? `${(downloads / 1000000).toFixed(1)}M`
                  : `${Math.floor(downloads / 1000)}K`}
              </span>
            </div>

            {/* Rating */}
            <div className='flex items-center gap-1 text-gray-600 whitespace-nowrap'>
              <img
                className='h-3 w-3 sm:h-3.5 sm:w-3.5'
                src='/assets/icon-ratings.png'
                alt='Average Ratings'
              />
              <span>{ratingAvg}</span>
            </div>

            {/* Size */}
            <div className='text-gray-500 font-normal whitespace-nowrap'>
              {size} MB
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => handleRemoveData(id)}
        className='w-full sm:w-auto bg-[#00D084] hover:bg-[#00ba76] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md active:scale-95'
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledCard;
