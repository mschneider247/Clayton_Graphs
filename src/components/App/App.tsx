import { useState, useEffect } from 'react';
import { Header } from '../Header/Header'
import { Filter } from '../Filter/Filter'
import { GraphCollection } from '../GraphCollection/GraphCollection'
import './App.css';
import { milesRun } from '../../Data/milesRun'
import { subscriberCount } from '../../Data/subscriberCount'
// import { altAssetChallenge } from '../../Data/altAssetChallenge'
import { angelInvestment } from '../../Data/angelInvestment'
// import { swingTrade } from '../../Data/swingTrade'
// import { collectables } from '../../Data/collectables'


interface ISingleData {
  id: number,
  name: string,
  data: number[],
}

interface IData {
  years: ISingleData[];
}

interface IGraph {
  id: number;
  name: string;
  type: string;
  data: IData;
}

const graphs:IGraph[] = [];

const App = () => {

  const [graphCollection, setGraphCollection]: [IGraph[], (graphs: IGraph[]) => void] = useState(graphs);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);

  useEffect(() => {
    let buildGraphs:IGraph[] = [
      {
        id: 1,
        name: "Miles Run",
        type: "Fitness",
        data: milesRun
      },
      {
        id: 2,
        name: "Subscriber Count",
        type: "Subscribers",
        data: subscriberCount,
      },
      // {
      //   id: 3,
      //   name: "Alternative Asset Bankroll Challenge",
      //   type: "Investments",
      //   data: altAssetChallenge,
      // },
      {
        id: 4,
        name: "Angel Investments",
        type: "Investments",
        data: angelInvestment,
      },
      // {
      //   id: 5,
      //   name: "Swing Trades",
      //   type: "Investments",
      //   data: swingTrade,
      // },
      // {
      //   id: 6,
      //   name: "Collectables",
      //   type: "Investments",
      //   data: collectables,
      // }
    ];

    setGraphCollection(buildGraphs)  
    setLoading(false);
  }, []);

  return (
    <main className="main_body">
      <Header />
      <Filter />
      {!loading &&
        <GraphCollection graphs={graphCollection}/>
      }
    </main>
  );
}

export { App };
