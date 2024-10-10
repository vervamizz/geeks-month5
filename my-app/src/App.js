import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import UserPage from "./pages/usersPage/UsersPage";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      {/*<MainPage/>*/}
        <UserPage/>
        <Calculator />
    </div>
  );
}

export default App;
