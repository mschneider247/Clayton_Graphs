import { GraphCard } from '../GraphCard/GraphCard';
import './GraphCollection.css';

interface IStyle {
  mainDark: string;
  mainLight: string;
  secondDark: string;
  secondLight: string;
  thirdDark: string;
  thirdLight: string;
  fourthDark?: string;
  fourthLight?: string;
  fifthDark?: string;
  fifthLight?: string;
}

interface ISingleYear {
  id: number;
  name: string;
  data: number[];
  data2?: number[];
  data3?: number[];
  data4?: number[];
  data5?: number[];
  data6?: number[];
}

interface IData {
  style: IStyle;
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
  updateId: Function;
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
        updateId={props.updateId}
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