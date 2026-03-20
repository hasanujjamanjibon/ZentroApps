import { useNavigation } from 'react-router';

const NavigationLoader = () => {
  const navigation = useNavigation();

  return navigation.state === 'loading' ? (
    <div className='fixed top-0 left-0 w-full h-1 bg-indigo-500 animate-pulse z-50'></div>
  ) : null;
};

export default NavigationLoader;
