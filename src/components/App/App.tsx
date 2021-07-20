import { Header } from '../Header/Header'
import { Filter } from '../Filter/Filter'
import { GraphCollection } from '../GraphCollection/GraphCollection'
import './App.css';
import { milesRun } from '../../Data/milesRun'
import { subscriberCount } from '../../Data/subscriberCount'
import { altAssetChallenge } from '../../Data/altAssetChallenge'
import { angelInvestment } from '../../Data/angelInvestment'
import { swingTrade } from '../../Data/swingTrade'
import { longTermNonTechInvesting } from '../../Data/longTermNonTechInvesting'

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
