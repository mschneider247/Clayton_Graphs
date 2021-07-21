import "./Graph.css";

interface IGraph {
  id: number;
  name: string;
  type: string;
  data: {};
}

const Graph = (props:IGraph) => {
  return (
    <article>
      <h4>{props.name}</h4>
    </article>
  )
}

export { Graph }