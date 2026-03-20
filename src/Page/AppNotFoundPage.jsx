import { Link } from 'react-router';

const AppNotFoundPage = () => {
  return (
    <div className='flex items-center flex-col gap-4 px-4 py-20 md:p-0'>
      <img src='/assets/app-error.png' alt='' className='w-96' />
      <h1 className='text-4xl font-bold text-gray-800'>OPPS!! APP NOT FOUND</h1>
      <p className='text-gray-500 text-sm text-center'>
        The App you are requesting is not found on our system. please try
        another apps
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

export default AppNotFoundPage;
