import { createContext, useState, useEffect } from "react";

// Services
import * as jobsServices from '../services/jobsService';

export const JobContext = createContext();

export const JobProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobsServices.getAllJobs()
            .then(result => {
                setJobs(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

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
        <JobContext.Provider value={{ jobs, addJob, editJob }}>
            {children}
        </JobContext.Provider>
    )
}