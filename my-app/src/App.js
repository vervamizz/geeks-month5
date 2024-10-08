import './App.css';
import ChangeTitle from './components/ChangeTitle';
import AboutPage from "./pages/aboutPage/AboutPage";
import MainPage from "./pages/mainPage/MainPage";
import ContactPage from "./contactPage/ContactPage";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      {/*<MainPage/>*/}
      {/*  <AboutPage />*/}
      {/*  <ChangeTitle/>*/}
      {/*  <ContactPage />*/}
        <Counter/>
    </div>
  );
}

export default App;
