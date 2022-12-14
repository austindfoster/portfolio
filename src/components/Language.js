const Language = (props) => {
  const { language, delay, visible } = props;

  return (
    <div className={`language ${visible ? "show" : ''}`} style={{ "--animation-order": `${delay}` }}>
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
