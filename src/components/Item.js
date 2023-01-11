import { useInView } from "react-intersection-observer";

const Item = (props) => {
  const { item } = props;
  const { ref: i, inView: visible } = useInView({ threshold: .2 });
  let content;
  if (item.contentType === "image") {
    content = <img src={require(`../images/${item.content}`)} alt={item.alt} />;
  } else if (item.contentType === "video") {
    content = (
      <video src={require(`../videos/${item.content}`)} autoPlay muted loop>
        <p>{item.alt}</p>
      </video>
    );
  }
  else {
    content = <p>Error content unavailable</p>;
  }

  return (
    <div ref={i} id={`i${item.id}`} className={`item ${visible ? "show" : ''}`}>
      <div className="content">{content}</div>
      <div className="item-description">
        <p>{item.description}</p>
        <div className="toolRow">
          <h3>Tools used: </h3>
          <div className="toolRow">
            {item.skills.map((skill) => (
              <img className="skill" src={require(`../images/${skill}.svg`)} alt={`${item} ${skill}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
