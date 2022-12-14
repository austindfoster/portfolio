import Item from "../components/Item";
import SoftwareBlock from "../components/SoftwareBlock";
const Art = (props) => {
  const { software, items } = props;
  return (
    <section id="art">
      <h1 className="topic">Art</h1>
      <SoftwareBlock
        software={software.filter((s) => s.category === "3D")}
        blockDelay={0}
      />
      <div className="item-list">
        {items.map((item, num) => (
          <Item item={item} key={item.id}  num={num}/>
        ))}
      </div>
    </section>
  );
};

export default Art;
