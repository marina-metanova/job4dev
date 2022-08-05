import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Contexts
import { AuthProvider } from './contexts/AuthContext';
import { MobileMenuContext } from './contexts/MobileMenuContext';
import { JobProvider } from './contexts/JobContext';


// Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { Jobs } from './components/Jobs/Jobs';
import { AddJob } from './components/AddJob/AddJob';
import { EditJob } from './components/EditJob/EditJob';
import { DeleteJob } from './components/DeleteJob/DeleteJob';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { JobDetails } from './components/JobDetails/JobDetails'
import { Profile } from './components/Profile/Profile';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AuthProvider>
            <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
                <Header />
                <main>
                    <JobProvider>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/jobs' element={<Jobs />} />
                            <Route path='/:category' element={<Jobs />} />
                            <Route path='/add-job' element={<AddJob />} />
                            <Route path='/edit-job/:jobID' element={<EditJob />} />
                            <Route path='/delete-job/:jobID' element={<DeleteJob />} />
                            <Route path='/jobs/:jobID' element={<JobDetails />} />
                            <Route path='/404' element={<ErrorPage />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/profile' element={<Profile />} />
                        </Routes>
                    </JobProvider>
                </main>
                <Footer />
                <MobileMenu />
            </MobileMenuContext.Provider>
            <ScrollToTop />
        </AuthProvider>
    );
}

export default App;
