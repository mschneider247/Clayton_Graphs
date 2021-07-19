import { Header } from '../Header/Header'
import { Filter } from '../Filter/Filter'
import { GraphCollection } from '../GraphCollection/GraphCollection'
import './App.css';
import { milesRun } from '../../Data/milesRun'

const App = () => {
  console.log("milesRun??", milesRun)
  return (
    <main>
      <Header />
      <Filter />
      <GraphCollection />
    </main>
  );
}

export { App };
