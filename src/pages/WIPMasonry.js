import WIP from "../components/WIP";
const WIPMasonry = (props) => {
  const { wips } = props;
  return (
    <section id="wips">
      <h1 className="topic">Works In Progress and Past Projects</h1>
      <div className="masonry">
        {wips.map((wip) => (
          <WIP wip={wip} key={wip.id} />
        ))}
      </div>
    </section>
  );
};

export default WIPMasonry;