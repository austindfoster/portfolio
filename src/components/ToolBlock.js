import Tool from "../components/Tool";
const ToolBlock = (props) => {
  const { tools, blockDelay } = props;
      return (
        <>
          <h1>Experience with Other Frameworks and Tools</h1>
          <div className="l-block">
            {tools.map((tool,delay) => (
              <Tool tool={tool} delay={delay+blockDelay} key={tool.id}/>
            ))}
          </div>
        </>
      );
};
  
export default ToolBlock;