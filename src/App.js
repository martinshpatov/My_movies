import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';

const movie1 = {
    "Title": "Spiderman and Grandma",
    "Year": "2009",
    "imdbID": "tt1433184",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}

const App = () => {
  

    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path='/' Component={HomePage}/>
                    <Route path='/about' Component={AboutPage}/>
                    <Route path='/contact' Component={ContactPage}/>
                    <Route path='/login' Component={LoginPage}/>
                    <Route path='/register' Component={Register}/>
                </Routes>
            </Router>
           
        </div>
    );

}

export default App;