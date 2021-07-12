import { Header } from '../Header/Header'
import { Filter } from '../Filter/Filter'
import { GraphCollection } from '../GraphCollection/GraphCollection'
import './App.css';

const App = () => {
  return (
    <main>
      <Header />
      <Filter />
      <GraphCollection />
    </main>
  );
}

export { App };
