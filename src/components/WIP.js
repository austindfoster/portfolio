const WIP = (props) => {
    const { wip } = props;
    let content;
    if (wip.contentType === "image") {
        content = <img src={require(`../images/${wip.content}`)} alt={wip.alt} />;
    } else if (wip.contentType === "video") {
        content = (
            <video src={require(`../videos/${wip.content}`)} autoPlay muted loop>
                <p>{wip.alt}</p>
            </video>
        );
    }
    else {
        content = <p>Error content unavailable</p>;
    }

    return (
        <div id={wip.id} className="wip">{content}</div>
    );
};

export default WIP;