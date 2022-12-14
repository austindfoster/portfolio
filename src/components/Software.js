const Software = (props) => {
    const { software, delay } = props;
    return (
      <div className="software" style={{"--animation-order": `${delay}`}}>
        <div className="detail-block">
          <div className="image">
            <img src={require(`../images/${software.logo}`)} alt={software.name}/>
          </div>
          <div className="detail">
            <h3 className="name">{software.name}</h3>
            <p className="experience">{software.experience}</p>
          </div>
        </div>
        <div className="description">
            <p>{software.description}</p>
        </div>
      </div>);
  };
  
  export default Software;