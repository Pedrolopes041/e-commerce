import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import Login from './pages/login/login.page';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
