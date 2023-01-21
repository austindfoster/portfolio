import { useEffect } from "react";
const Language = (props) => {
  const { language, delay, visible } = props;

  useEffect(() => {
    if (visible) {
      document.getElementById(`l${language.id}`).classList.add("show");
    }
  }, [visible]);

  return (
    <div id={`l${language.id}`} className={`language`} style={{ "--animation-order": `${delay}` }}>
      <div className="detail-block">
        <div className="image">
          <img
            src={require(`../images/${language.logo}`)}
            alt={language.name}
          />
        </div>
        <div className="detail">
          <h3 className="name">{language.name}</h3>
          <p className="experience">{language.experience}</p>
        </div>
      </div>
      <div className="description">
        <p>{language.description}</p>
      </div>
    </div>
  );
};

export default Language;
