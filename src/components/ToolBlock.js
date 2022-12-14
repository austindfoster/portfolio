import Tool from "../components/Tool";
import { useInView } from "react-intersection-observer";

const ToolBlock = (props) => {
  const { tools } = props;
  const { ref: ref3, inView: visible } = useInView();
      return (
        <section ref={ref3}>
          <h1>Experience with Other Frameworks and Tools</h1>
          <div className="l-block">
            {tools.map((tool,delay) => (
              <Tool tool={tool} delay={delay} visible={visible} key={tool.id}/>
            ))}
          </div>
        </section>
      );
};
  
export default ToolBlock;