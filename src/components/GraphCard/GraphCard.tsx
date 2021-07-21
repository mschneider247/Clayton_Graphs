
interface IGraph {
  id: number;
  name: string;
  type: string;
  data: {};
}

const GraphCard = (props:IGraph) => {
  return (
    <p>I am GraphCard</p>
  )
}

export { GraphCard }