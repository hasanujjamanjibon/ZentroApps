import { Link } from 'react-router';

const ErrorRoute = () => {

  return (
    <div className='grid place-items-center gap-4 p-20'>
      <img src='/assets/error-404.png' alt='' className='w-96' />
      <h1 className='text-4xl font-bold text-gray-800'>
        Oops, page not found!
      </h1>
      <p className='text-gray-500 text-sm'>
        The page you are looking for is not available.
      </p>
      <Link
        to='/'
        className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorRoute;
