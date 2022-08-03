import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Contexts
import { AuthContext } from './contexts/AuthContext';
import { JobContext } from './contexts/JobContext';

// Services
import * as jobsServices from './services/jobsService';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home/Home';
import { About } from './components/About';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Register } from './components/Register';
import { Jobs } from './components/Jobs/Jobs';
import { AddJob } from './components/AddJob';
import { EditJob } from './components/EditJob';
import { DeleteJob } from './components/DeleteJob';
import { ErrorPage } from './components/ErrorPage';
import { JobDetails } from './components/JobDetails'

// Custom hooks
import { useLocalStorage } from './hooks/useLocalStorage';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [jobs, setJobs] = useState([]);
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
    const userLogout = (authData) => {
        setAuth({});
    }

    const addJob = (jobData) => {
        setJobs(state => [
            ...state,
            jobData
        ]);

        //nav('/jobs');
    }

    const editJob = (jobID, jobData) => {
        setJobs(state => state.map(x => x._id === jobID ? jobData : x));

        //nav('/jobs');
    }

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <Header />

            <main>
                <JobContext.Provider value={{jobs, addJob, editJob}}>
                    <Routes>
                        <Route path='/' element={<Home jobs={jobs} />} />
                        <Route path='/jobs' element={<Jobs />} />
                        <Route path='/add-job' element={<AddJob />} />
                        <Route path='/edit-job/:jobID' element={<EditJob />} />
                        <Route path='/delete-job/:jobID' element={<DeleteJob />} />
                        <Route path='/jobs/:jobID' element={<JobDetails />} />
                        <Route path='/404' element={<ErrorPage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </JobContext.Provider>
            </main>

            <Footer />

            <ScrollToTop />

        </AuthContext.Provider>
    );
}

export default App;
