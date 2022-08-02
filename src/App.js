import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AddJob } from './components/AddJob';

function App() {
    return (
        <Fragment>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/add-job' element={<AddJob />} />
            </Routes>

            <Footer />
        </Fragment>
    );
}

export default App;
