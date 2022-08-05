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

    const deleteJob = (jobID) => {
        setJobs(state => state.filter(x => x._id !== jobID));
    }

    return (
        <JobContext.Provider value={{ jobs, addJob, editJob, deleteJob }}>
            {children}
        </JobContext.Provider>
    )
}