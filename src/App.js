import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import "./routes/App.scss";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import AboutMe from "./routes/aboutMe/aboutMe.component";
import Checkout from "./routes/checkout/checkout.component";
// import Layout from "./components/particles/layout";
// import InstagramLink from './routes/navigation/insta.component';
// import ThemeToggle from './routes/themeToggle.jsx'

import { ThemeProvider } from "./themeContext";

const App = () => {
  return (
    <ThemeProvider>
      {/* <ThemeToggle /> */}

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="auth" element={<Authentication />}></Route>
          <Route path="about" element={<AboutMe />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
