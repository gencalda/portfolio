// Import Swiper styles
import 'swiper/css';
import NavigationBar from 'components/navigationBar/NavigationBar';
import HomePage from 'pages/homePage/HomePage';
import './App.scss';
import './styles/burgerMenu.scss';

const App: React.FC = () => (
  <>
    <NavigationBar />
    <HomePage />
  </>
);

export default App;
