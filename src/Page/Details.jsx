import { useParams } from 'react-router';
import ContextWrapper from '../provider/ContextWrapper';
import BarCharts from '../components/BarCharts';

const Details = () => {
  const { apps,handleAddData } = ContextWrapper();
  const { id } = useParams();

  const {
    image,
    title,
    companyName,
    id: appId,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = apps?.find((app) => app.id == id) || {};

  return (
    <div className='min-h-screen '>
      <div className='container'>
        {/* Header */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
          {/* Icon */}
          <div className='w-40 h-40 md:w-56 md:h-56 bg-white p-4 flex items-center justify-center'>
            <span className='text-3xl'>
              <img src={image} alt={title} />
            </span>
          </div>

          {/* Info */}
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
            <p className='text-sm text-gray-500 mt-1'>
              Developed by <span className='text-blue-500'>{companyName}</span>
            </p>
            <div className='h-0.5 bg-gray-200 my-6'></div>
            {/* Stats */}
            <div className='flex flex-wrap justify-center md:justify-start gap-12 mt-4 text-center'>
              <div>
                <img
                  className='h-6 w-6 mx-auto'
                  src='/assets/icon-downloads.png'
                  alt='Downloads'
                />
                <p className='text-sm text-gray-500'>Downloads</p>
                <p className='font-semibold'>
                  {' '}
                  {downloads >= 1000000
                    ? `${downloads / 1000000}M`
                    : `${Math.floor(downloads / 1000)}K`}
                </p>
              </div>

              <div>
                <img
                  className='h-6 w-6 mx-auto'
                  src='/assets/icon-ratings.png'
                  alt='Average Ratings'
                />
                <p className='text-sm text-gray-500'>Average Ratings</p>
                <p className='font-semibold'>{Math.round(ratingAvg)}</p>
              </div>

              <div>
                <img
                  className='h-6 w-6 mx-auto'
                  src='/assets/icon-review.png'
                  alt='Total Reviews'
                />
                <p className='text-sm text-gray-500'>Total Reviews</p>
                <p className='font-semibold'>
                  {reviews >= 1000000
                    ? `${reviews / 1000000}M`
                    : `${Math.floor(reviews / 1000)}K`}
                </p>
              </div>
            </div>
            {/* Button */}
            <button
              onClick={() => handleAddData(appId)}
              className='mt-4 bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-90'
            >
              Install Now ({size} MB)
            </button>
          </div>
        </div>

        {/* Ratings */}
        <div className='mt-8'>
          <BarCharts ratings={ratings} />
        </div>

        {/* Description */}
        <div className='mt-8'>
          <h2 className='font-semibold mb-2'>Description</h2>
          <p className='text-base text-gray-600 '>
            {description?.map((text, index) => (
              <span key={index}>
                {text.text}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
