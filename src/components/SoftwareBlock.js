import Software from "../components/Software";
import { useInView } from "react-intersection-observer";

const SoftwareBlock = (props) => {
  const { software } = props;
  const { ref: ref2, inView: visible } = useInView();
  return (
    <section ref={ref2}>
      <h1>Software Experience</h1>
      <div className="l-block">
        {software.map((s, delay) => (
          <Software software={s} delay={delay} visible={visible} key={s.id} />
        ))}
      </div>
    </section>
  );
};

export default SoftwareBlock;