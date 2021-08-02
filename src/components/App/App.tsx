import { useState, useEffect } from 'react';
import { Header } from '../Header/Header'
import { FilterByType } from '../FilterByType/FilterByType'
import { ClearButton } from '../ClearButton/ClearButton'
import { GraphCollection } from '../GraphCollection/GraphCollection'
import { Footer } from '../Footer/Footer'
import './App.css';
import { milesRun } from '../../data/milesRun'
import { subscriberCount } from '../../data/subscriberCount'
import { altAssetChallenge } from '../../data/altAssetChallenge'
import { angelInvestment } from '../../data/angelInvestment'
import { swingTrade } from '../../data/swingTrade'
import { collectables } from '../../data/collectables'
import { collectablesByMonth } from '../../data/collectablesByMonth'

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

const graphs:IGraph[] = [];

const App = () => {

  const [graphCollection, setGraphCollection]: [IGraph[], (graphs: IGraph[]) => void] = useState(graphs);

  const [typeFilter, setTypeFilter]: [string, (loading: string) => void] = useState<string>("All");

  const [idFilter, setIdFilter]: [number, (loading: number) => void] = useState<number>(0);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);

  const filterGraphsByType = (): IGraph[] => {
    let filteredGraphs = graphCollection
    if (typeFilter !== "All") {
      filteredGraphs = filteredGraphs.filter(graph => {
        return graph.type === typeFilter
      })
    }
    if (idFilter !== 0) {
      filteredGraphs = filteredGraphs.filter(graph => {
        return graph.id === idFilter
      })
    }
    return filteredGraphs
  }

  useEffect(() => {
    let buildGraphs:IGraph[] = [
      {
        id: 1,
        name: "Miles Run",
        type: "Fitness",
        data: milesRun,
      },
      {
        id: 2,
        name: "Subscriber Count",
        type: "Subscribers",
        data: subscriberCount,
      },
      {
        id: 3,
        name: "Alt Asset Challenge",
        type: "Investments",
        data: altAssetChallenge,
      },
      {
        id: 4,
        name: "Angel Investments",
        type: "Investments",
        data: angelInvestment,
      },
      {
        id: 5,
        name: "Swing Trades",
        type: "Investments",
        data: swingTrade,
      },
      {
        id: 6,
        name: "Collectables",
        type: "Collectables",
        data: collectables,
      },
      {
        id: 7,
        name: "Collectables By Month",
        type: "Collectables",
        data: collectablesByMonth,
      }
    ];

    setGraphCollection(buildGraphs.sort(() => Math.random() - 0.5))  
    setLoading(false);
  }, []);

  return (
    <main className="main_body">
      <Header />
      {idFilter === 0 ? 
        <FilterByType 
          handler={setTypeFilter}
          typeFilter={typeFilter}
        />
        :
        <ClearButton
          handler={setIdFilter}
        />
      }
      {!loading &&
        <GraphCollection 
          graphs={filterGraphsByType()}
          updateId={setIdFilter}
        />
      }
      <Footer />
    </main>
  );
}

export { App };
