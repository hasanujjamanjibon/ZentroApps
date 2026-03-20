import { Outlet } from 'react-router';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import ScrollToTop from './components/ScrollToTop';
import NavigationLoader from './components/NavigationLoader';

function App() {
  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-85px)]  '>
        <ScrollToTop />
        <NavigationLoader />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
