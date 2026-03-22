import { useEffect, useState } from 'react';
import InstalledCard from '../components/InstalledCard';
import InstalledAppsSkeltonLoader from '../components/SkeltonComponents/InstalledAppsSkeltonLoader';
import ContextWrapper from '../provider/ContextWrapper';
import NotInstalledUI from '../components/NotInstalledUI';

const Installation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { storedData, apps } = ContextWrapper();
  const [filteredData, setFilteredData] = useState(storedData || []);

  const handleSortByDownload = (download) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (download === 'Low - high') {
        return a.downloads - b.downloads;
      } else {
        return b.downloads - a.downloads;
      }
    });
    setFilteredData(sortedData);
  };

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('installedApps'));
    const filtered = apps?.filter((app) => savedIds?.includes(app?.id));
    setFilteredData(filtered);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [apps, storedData]);

  return (
    <div className='py-12'>
      <div className={`text-center mb-12 px-4  md:px-8 lg:px-16 space-y-4 `}>
        {/* Title */}
        <h2 className='text-4xl md:text-5xl font-bold text-[#001d3d] '>
          Your Installed Apps
        </h2>

        {/* Subtitle */}
        <p className='text-slate-500 text-sm md:text-base lg:text-lg'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className='flex justify-between items-center container '>
        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800  text-center'>
          {filteredData?.length || 0} Apps Found
        </h3>
        <select
          defaultValue='Sort By Download'
          onChange={(e) => handleSortByDownload(e.target.value)}
          className='select select-sm sm:select-lg appearance-none w-fit focus:outline-none  focus:border-0 rounded-md border border-gray-300 text-sm text-gray-700 cursor-pointer '
        >
          <option disabled={true}>Sort By Download</option>
          <option value={'Low - high'}>Low - High</option>
          <option value={'High - low'}>High - Low</option>
        </select>
      </div>
      <div className='container space-y-4'>
        {isLoading ? (
          <div className='space-y-4 py-6'>
            {[1, 2, 3, 4, 5].map((n) => (
              <InstalledAppsSkeltonLoader key={n} />
            ))}
          </div>
        ) : filteredData?.length > 0 ? (
          filteredData?.map((app) => (
            <InstalledCard key={app.id} appId={app.id} app={app} />
          ))
        ) : (
          <NotInstalledUI />
        )}
      </div>
    </div>
  );
};

export default Installation;
