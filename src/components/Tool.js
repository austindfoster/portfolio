import { useEffect } from "react";
const Tool = (props) => {
    const { tool, delay, visible } = props;

    useEffect(() => {
      if (visible) {
        document.getElementById(`t${tool.id}`).classList.add("show");
      }
    },[visible]);
    return (
      <div id={`t${tool.id}`} className={`tool`} style={{"--animation-order": `${delay}`}}>
        <div className="detail-block">
          <div className="image">
            <img src={require(`../images/${tool.logo}`)} alt={tool.name}/>
          </div>
          <div className="detail">
            <h3 className="name">{tool.name}</h3>
            <p className="experience">{tool.experience}</p>
          </div>
        </div>
        <div className="description">
            <p>{tool.description}</p>
        </div>
      </div>);
  };
  
  export default Tool;