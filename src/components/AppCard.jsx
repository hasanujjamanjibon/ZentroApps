import { RiStarFill, RiDownload2Fill } from '@remixicon/react';

const AppCard = ({ app, hoveredId, setHoveredId }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-4 w-full max-w-xs hover:shadow-md transition cursor-pointer ${
        hoveredId === null
          ? 'opacity-100'
          : hoveredId === app.id
            ? 'opacity-100 scale-105'
            : 'opacity-75'
      }`}
      onMouseEnter={() => setHoveredId(app.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Image */}
      <div className='w-full h-48 bg-gray-100 rounded-xl overflow-hidden'>
        <img
          src={app.image}
          alt={app.title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Title */}
      <h3 className='text-lg font-semibold text-gray-800 mt-4'>{app.title}</h3>

      {/* Bottom Info */}
      <div className='flex justify-between items-center mt-3'>
        {/* Downloads */}
        <div className='flex items-center gap-1 bg-slate-100 text-green-600 px-3 py-1 rounded-lg text-sm font-medium'>
          <RiDownload2Fill size={20} />
          {app.downloads >= 1000000
            ? `${app.downloads / 1000000}M`
            : `${Math.floor(app.downloads / 1000)}K`}
        </div>

        {/* Rating */}
        <div className='flex items-center gap-1 bg-orange-100 text-orange-500 px-3 py-1 rounded-lg text-sm font-medium'>
          <RiStarFill size={20} />
          {Math.round(app.ratingAvg)}
        </div>
      </div>
    </div>
  );
};

export default AppCard;
