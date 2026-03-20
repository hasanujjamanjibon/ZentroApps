import { Outlet } from 'react-router';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-85px)]  '>
         <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
