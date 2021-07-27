import { GraphCard } from '../GraphCard/GraphCard';
import './GraphCollection.css';

interface IStyle {
  mainDark: string,
  mainLight: string,
  secondDark: string,
  secondLight: string,
  thirdDark: string,
  thirdLight: string,
}

interface ISingleYear {
  id: number,
  name: string,
  data: number[],
  data2?: number[],
}

interface IData {
  style: IStyle,
  years: ISingleYear[];
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
    <section className="graph_collection">
      {graphs.length ? graphs : <h2>No graphs found!</h2>}
    </section>
  )
}

export { GraphCollection }