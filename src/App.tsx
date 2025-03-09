import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  About,
  Contact,
  Experience,
  School,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Language,
} from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <School />
        <Language />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <ToastContainer
          theme='dark'
          toastStyle={{
            backgroundColor: '#1d1836',
          }}
        />
      </div>
      <style>
        {`
          .Toastify__toast-icon svg {
            fill: #915EFF !important;
          }
          .Toastify__progress-bar--success {
            background: #915EFF !important;
          }
          .Toastify__progress-bar {
            background: #915EFF !important;
          }
        `}
      </style>
    </BrowserRouter>
  );
};

export default App;
