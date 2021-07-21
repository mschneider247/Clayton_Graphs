import { Graph } from '../Graph/Graph';
import './GraphCollection.css'

interface IGraph {
  id: number;
  name: string;
  type: string;
  data: {};
}

interface IProps {
  graphs: IGraph[];
}

const GraphCollection = (props: IProps) => {

  const graphs = props.graphs.map(graph => {
    return (
      <Graph 
        id={graph.id}
        name={graph.name}
        type={graph.type}
        data={graph.data}
      />
    )
  })

  return (
    <section>
      {graphs}
    </section>
  )
}

export { GraphCollection }