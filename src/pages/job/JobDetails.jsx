import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {_id, title, company, deadline} = useLoaderData()
    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <h2 className="text-3xl">Job Details for {title}</h2>
            <p>Apply for: {company}</p>
            <p>Deadline: {deadline}</p>
            <Link to={`/job-apply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;