import Language from "../components/Language";
const LanguageBlock = (props) => {
  const { languages, blockDelay } = props;
  
      return (
        <>
          <h1>Language Experience</h1>
          <div className="l-block">
            {languages.map((language,delay) => (
              <Language language={language} key={language.id} delay={delay+blockDelay}/>
            ))}
          </div>
        </>
      );
};

export default LanguageBlock;