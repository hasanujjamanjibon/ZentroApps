import { useEffect, useState } from 'react';
import AppCard from '../components/AppCard';
import ContextWrapper from '../provider/ContextWrapper';
import AppNotFoundPage from './AppNotFoundPage';
import SkeletonCard from '../components/SkeltonComponents/SkeletonCard';

const AllApps = () => {
  const { apps, loading } = ContextWrapper();
  const [filteredApps, setFilteredApps] = useState([]); // Search result ekhane thakbe
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      if (searchTerm === '') {
        setFilteredApps(apps);
      } else {
        const results = apps.filter((app) =>
          app?.title?.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredApps(results);
      }

      setSearchLoading(false);
    }, 1000); // delay

    return () => clearTimeout(timer);
  }, [searchTerm, apps]);
  return (
    <div className='my-12 '>
      <div className={`text-center mb-12 px-4  md:px-8 lg:px-16 space-y-4`}>
        {/* Title */}
        <h2 className='text-4xl md:text-5xl font-bold text-[#001d3d] '>
          Our All Applications
        </h2>

        {/* Subtitle */}
        <p className='text-slate-500 text-sm md:text-base lg:text-lg'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-6xl mx-auto px-4 py-3  md:px-8 mb-6'>
        {/* Title */}
        <h3 className='text-lg sm:text-xl md:text-2xl font-medium text-gray-800 text-center sm:text-left '>
          ({filteredApps?.length || 0}) Apps Found
        </h3>

        {/* Search */}
        <label className='input input-bordered flex items-center gap-2 w-full sm:w-auto focus:outline-none focus:ring-0 '>
          <svg
            className='h-4 w-4 opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </g>
          </svg>

          <input
            type='search'
            className='grow text-sm sm:text-base focus:outline-0 focus:ring-0 focus:border-0 focus:shadow-md transition duration-200 rounded-md'
            placeholder='Search apps...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 place-items-center'>
        {loading || searchLoading
          ? Array(12)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : filteredApps &&
            filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
              />
            ))}
      </div>
      {!loading && !searchLoading && filteredApps.length === 0 && (
        <AppNotFoundPage />
      )}
    </div>
  );
};

export default AllApps;
