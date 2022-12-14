const Item = (props) => {
  const { item } = props;
  let content;
  if (item.contentType === "image") {
    content = <img src={require(`../images/${item.content}`)} alt={item.alt} />;
  } else if (item.contentType === "video") {
    content = (
      <video src={require(`../videos/${item.content}`)} autoPlay muted loop>
        <p>{item.alt}</p>
      </video>
    );} 
//     else if (item.contentType === "iframe") {
//     content = (
//       <iframe
//         width="560"
//         height="315"
//         src="http://www.youtube.com/embed/MiLPCkLrjUs?controls=0&autoplay=1&loop=1&playlist=MiLPCkLrjUs"
//         title={item.alt}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     );
//   } 
    else {
    content = <p>Error content unavailable</p>;
  }

  return (
    <div id={item.id} className="item">
      <div className="item-description">
        <p>{item.description}</p>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Item;
