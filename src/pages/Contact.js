
const Contact = (props) => {
    const { links } = props;
    return (
        <section id="contact">
            <h2 className="topic">Contact Me</h2>
            <p>You can email me at <em><b style={{color: 'skyblue'}}>austindfostercs@gmail.com</b></em> or check out my social media.</p>
            <div className="row">
                {links.map((link) => (
                    <div className="skill">
                        <a href={link.link}>
                            <img src={require(`../images/${link.image}`)} alt={link.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Contact;