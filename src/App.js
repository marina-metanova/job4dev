import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Register } from './components/Register';
import { Jobs } from './components/Jobs';
import { AddJob } from './components/AddJob';
import { ErrorPage } from './components/ErrorPage';

function App() {
    const [auth, setAuth] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    }
    const userLogout = (authData) => {
        setAuth({});
    }

    return (
        <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/jobs' element={<Jobs />} />
                    <Route path='/add-job' element={<AddJob />} />
                    <Route path='/404' element={<ErrorPage />} />
                </Routes>
            </main>

            <Footer />

            {/* <button onClick="topFunction()" id="back-top" title="Go to top"></button> */}

        </AuthContext.Provider>
    );
}

export default App;
