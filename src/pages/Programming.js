import Item from "../components/Item";
import LanguageBlock from "../components/LanguageBlock";
import SoftwareBlock from "../components/SoftwareBlock";
import ToolBlock from "../components/ToolBlock";
const Programming = (props) => {
  const { languages, software, tools, items } = props;
  return (
    <section id="cs">
      <h1 className="topic">Programming</h1>
      <LanguageBlock languages={languages} blockDelay={0} />
      <SoftwareBlock
        software={software.filter((s) => s.category === "cs")}
        blockDelay={13}
      />
      <ToolBlock tools={tools} blockDelay={22} />
      <div>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Programming;
