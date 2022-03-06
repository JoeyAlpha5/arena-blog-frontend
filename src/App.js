import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  HomeScreen, 
  AboutScreen, 
  ArticleScreen, 
  ContactScreen,
  PageNotFoundScreen
} 
from './screens/ScreenExports';
import { APIDataProvider } from './GlobalState';
function App() {
  return (
    <APIDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="view-article" element={<ArticleScreen />} />
          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </APIDataProvider>
  );
}

export default App;
