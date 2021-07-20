import { Header } from '../Header/Header'
import { Filter } from '../Filter/Filter'
import { GraphCollection } from '../GraphCollection/GraphCollection'
import './App.css';
import { milesRun } from '../../Data/milesRun'
import { subscriberCount } from '../../Data/subscriberCount'
import { altAssetChallenge } from '../../Data/altAssetChallenge'
import { angelInvestment } from '../../Data/angelInvestment'
import { swingTrade } from '../../Data/swingTrade'
import { collectables } from '../../Data/collectables'

interface IYearSingleValue {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
}

interface IYearDoubleValue {
  jan: number[];
  feb: number[];
  mar: number[];
  apr: number[];
  may: number[];
  jun: number[];
  jul: number[];
  aug: number[];
  sep: number[];
  oct: number[];
  nov: number[];
  dec: number[];
}

interface IYearAltAsset {
  jan: IAltAssetPlayers;
  feb: IAltAssetPlayers;
  mar: IAltAssetPlayers;
  apr: IAltAssetPlayers;
  may: IAltAssetPlayers;
  jun: IAltAssetPlayers;
  jul: IAltAssetPlayers;
  aug: IAltAssetPlayers;
  sep: IAltAssetPlayers;
  oct: IAltAssetPlayers;
  nov: IAltAssetPlayers;
  dec: IAltAssetPlayers;
}

interface IExchange {
  assetName: string;
  quantity: number;
  price: number;
}

interface IAltAssetData {
  totalValue: number[];
  exchanges?: IExchange[];
}

interface IAltAssetPlayers {
  Steven: IAltAssetData;
  Clayton: IAltAssetData;
}

interface IYearCollectable {
  jan: ICollectable[];
  feb: ICollectable[];
  mar: ICollectable[];
  apr: ICollectable[];
  may: ICollectable[];
  jun: ICollectable[];
  jul: ICollectable[];
  aug: ICollectable[];
  sep: ICollectable[];
  oct: ICollectable[];
  nov: ICollectable[];
  dec: ICollectable[];
}

interface ICollectable {
  name?: string;
  type?: string;
}

interface IMilesRun {
  2017: IYearSingleValue;
  2018: IYearSingleValue;
  2019: IYearSingleValue;
  2020: IYearSingleValue;
  2021: IYearSingleValue;
}

interface ISubscriberCount {
  2019: IYearSingleValue;
  2020: IYearSingleValue;
  2021: IYearSingleValue;
}

interface IAngelInvestment {
  2020: IYearSingleValue;
  2021: IYearSingleValue;
}

interface IAltAssetChallenge {
  2021: IYearAltAsset;
}

interface ISwingTrade {
  2020: IYearDoubleValue;
  2021: IYearDoubleValue;
}

interface ICollectables {
  2020: IYearCollectable;
  2021: IYearCollectable;
}

const App = () => {

  const displayData = (data: ICollectables) => {
    console.log("data::", data)
  }
  
  displayData(collectables);

  return (
    <main>
      <Header />
      <Filter />
      <GraphCollection />
    </main>
  );
}

export { App };
