import Language from "../components/Language";
import { useInView } from "react-intersection-observer";

const LanguageBlock = (props) => {
  const { languages } = props;
  const { ref: ref1, inView: visible } = useInView();
  return (
    <section ref={ref1}>
      <h1>Language Experience</h1>
      <div className={"l-block"} >
        {languages.map((language, delay) => (
          <Language language={language} key={language.id} delay={delay } visible={visible}/>
        ))}
      </div>
    </section>
  );
};

export default LanguageBlock;