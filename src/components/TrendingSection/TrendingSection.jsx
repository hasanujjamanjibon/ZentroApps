import { Link } from 'react-router';
import ContextWrapper from '../../provider/ContextWrapper';
import AppCard from '../AppCard';
import BtnShowAll from '../BtnShowAll';

const TrendingSection = () => {
  const { apps, loading } = ContextWrapper();

  console.log(apps);

  return (
    <>
      <div className='text-center my-12 px-4  md:px-8 lg:px-16 space-y-4'>
        {/* Title */}
        <h2 className='text-4xl md:text-5xl font-bold text-[#001d3d] '>
          Trending Apps
        </h2>

        {/* Subtitle */}
        <p className='text-slate-500 text-sm md:text-base lg:text-lg'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {loading ? (
          <div className='col-span-full text-center'>Loading...</div>
        ) : (
          apps?.slice(0, 8)?.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
      <div className='text-center  flex justify-center'>
        <Link to={'/apps'}>
          <BtnShowAll />
        </Link>
      </div>
    </>
  );
};

export default TrendingSection;
