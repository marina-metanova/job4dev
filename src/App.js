import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Jobs } from './components/Jobs';
import { AddJob } from './components/AddJob';
import { ErrorPage } from './components/ErrorPage';

function App() {

    return (
        <Fragment>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/add-job' element={<AddJob />} />
                <Route path='/404' element={<ErrorPage />} />
            </Routes>

            <Footer />

            {/* <button onClick="topFunction()" id="back-top" title="Go to top"></button> */}

        </Fragment>
    );
}

export default App;
