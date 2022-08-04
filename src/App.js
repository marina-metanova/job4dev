import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Contexts
import { AuthContext } from './contexts/AuthContext';
import { MobileMenuContext } from './contexts/MobileMenuContext';
import { JobContext } from './contexts/JobContext';

// Services
import * as jobsServices from './services/jobsService';

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

// Custom hooks
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [jobs, setJobs] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        jobsServices.getAllJobs()
            .then(result => {
                setJobs(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const userLogout = () => {
        setAuth({});
    }

    const addJob = (jobData) => {
        setJobs(state => [
            ...state,
            jobData
        ]);
    }

    const editJob = (jobID, jobData) => {
        setJobs(state => state.map(x => x._id === jobID ? jobData : x));
    }

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
                <Header />
                <main>
                    <JobContext.Provider value={{ jobs, addJob, editJob }}>
                        <Routes>
                            <Route path='/' element={<Home jobs={jobs} />} />
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
                    </JobContext.Provider>
                </main>
                <Footer />
                <MobileMenu />
            </MobileMenuContext.Provider>
            <ScrollToTop />
        </AuthContext.Provider>
    );
}

export default App;
