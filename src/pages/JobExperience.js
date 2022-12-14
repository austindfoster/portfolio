import Job from "../components/Job";
const JobExperience = ({jobs}) => {
    return (
        <section id="experience">
            <h2 className="topic">Job Experience</h2>
            <div>
                {jobs.map((job) => (
                    <Job job={job} key={job.id} />
                ))}
            </div>
        </section>
    )
};

export default JobExperience;