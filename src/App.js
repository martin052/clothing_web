import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import './routes/App.scss';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
// import InstagramLink from './routes/navigation/insta.component';
import ThemeToggle from './routes/themeToggle.jsx'
import { 
  ThemeProvider, 
  useTheme, 
  // eslint-disable-next-line no-unused-vars
  darkTheme, 
  // eslint-disable-next-line no-unused-vars
  lightTheme } from './themeContext';

const Shop = () => {
  const { isDarkTheme } = useTheme();
  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={themeClass}>
      <h1>Im shopping list</h1>

    </div>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
  <Routes>
  
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}></Route>
      <Route path='shop' element={<Shop />}></Route>
      <Route path='sign-in' element={<SignIn />}></Route>
    </Route>
  </Routes>

  </ThemeProvider>
)};

export default App;
