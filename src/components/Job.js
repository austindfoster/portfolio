const Job = (props) => {
    const { job } = props;

    return (
        <div className="job">
            <div className="job-info">
                <h3 className="job-title">{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="job-duration">{job.time}</p>
            </div>
            <div className="job-description">
                <p>{job.description}</p>
            </div>
        </div>
    );
};

export default Job;