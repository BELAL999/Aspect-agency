import { Routes, Route, BrowserRouter} from "react-router"
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./pages/Layout"
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import './i18n';
import Home from "./pages/Home";
const App = () => {
  const {i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path ="/"  element={<Layout/>} >
          <Route index element ={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App

