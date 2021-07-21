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
  return (
    <section>
      <Graph />
      <Graph />
      <Graph />
    </section>
  )
}

export { GraphCollection }