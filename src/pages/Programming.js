import Item from "../components/Item";
import LanguageBlock from "../components/LanguageBlock";
import SoftwareBlock from "../components/SoftwareBlock";
import ToolBlock from "../components/ToolBlock";
const Programming = (props) => {
  const { languages, software, tools, items } = props;
  return (
    <section>
      <h1 className="topic">Programming</h1>
      <div>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <LanguageBlock languages={languages} />
      <SoftwareBlock
        software={software.filter((s) => s.category === "cs")}
      />
      <ToolBlock tools={tools} />
    </section>
  );
};

export default Programming;
