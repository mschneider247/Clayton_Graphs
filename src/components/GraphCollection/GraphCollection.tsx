import { GraphCard } from '../GraphCard/GraphCard';
import './GraphCollection.css';

interface IData {
  years: string[];
}

interface IGraph {
  id: number;
  name: string;
  type: string;
  data: IData;
}

interface IProps {
  graphs: IGraph[];
}

const GraphCollection = (props: IProps) => {

  const graphs = props.graphs.map(graph => {
    return (
      <GraphCard
        key={graph.id}
        id={graph.id}
        name={graph.name}
        type={graph.type}
        data={graph.data}
      />
    );
  })

  return (
    <section>
      {graphs}
    </section>
  )
}

export { GraphCollection }