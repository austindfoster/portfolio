import Software from "../components/Software";
const SoftwareBlock = (props) => {
  const { software, blockDelay } = props;
      return (
        <>
          <h1>Software Experience</h1>
          <div className="l-block">
            {software.map((s,delay) => (
              <Software software={s} delay={delay+blockDelay} key={s.id}/>
            ))}
          </div>
        </>
      );
};
  
export default SoftwareBlock;