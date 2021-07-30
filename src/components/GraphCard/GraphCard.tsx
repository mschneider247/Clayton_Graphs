import { useState, useEffect } from 'react';
import { LineWTotalGraph } from '../LineWTotalGraph/LineWTotalGraph';
import { BarLineGraph } from '../BarLineGraph/BarLineGraph';
import { StackedBarGraph } from '../StackedBarGraph/StackedBarGraph';
import { PyramidGraph } from '../PyramidGraph/PyramidGraph';
import { BarWTotalGraph } from "../BarWTotalGraph/BarWTotalGraph";
import { YearNavigation } from '../YearNavigation/YearNavigation';
import { PolarGraph } from '../PolarGraph/PolarGraph';
import { MultiBarGraph } from '../MultiBarGraph/MultiBarGraph';
import './GraphCard.css'

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

const defaultYearData = [0];

const GraphCard = (props:IGraph) => {
  const [yearFilter, setYearFilter]: [string, (yearFilter: string) => void] = useState("2021");

  const [yearData, setYearData]: [number[], (yearData: number[]) => void] = useState(defaultYearData);
  const [yearData2, setYearData2]: [number[], (yearData2: number[]) => void] = useState(defaultYearData);
  const [yearData3, setYearData3]: [number[], (yearData3: number[]) => void] = useState(defaultYearData);
  const [yearData4, setYearData4]: [number[], (yearData4: number[]) => void] = useState(defaultYearData);
  const [yearData5, setYearData5]: [number[], (yearData5: number[]) => void] = useState(defaultYearData);
  const [yearData6, setYearData6]: [number[], (yearData6: number[]) => void] = useState(defaultYearData);
  
  const years:string[] = props.data.years.map((year) => {
    return year.name
  })

  const updateYearData = (inputYear:string) => {
    setYearFilter(inputYear);
    const yearDataFilter: any = props.data.years.find(year => {
      return year.name === inputYear;
    });
    setYearData(yearDataFilter.data);
    setYearData2(yearDataFilter.data2);
    setYearData3(yearDataFilter.data3);
    setYearData4(yearDataFilter.data4);
    setYearData5(yearDataFilter.data5);
    setYearData6(yearDataFilter.data6);
  }

  useEffect(() => {
    updateYearData("2021");
  }, [])

  return (
    <section className="graph_card">
      {props.name === "Miles Run" && (
        <LineWTotalGraph
          name={yearFilter}
          type={props.type}
          style={props.data.style}
          data={yearData}
          data2={yearData2}
        />
      )}
      {props.name === "Collectables By Month" && (
        <MultiBarGraph
          name={props.name}
          type={props.type}
          style={props.data.style}
          data={yearData}
          data2={yearData2}
          data3={yearData3}
          data4={yearData4}
          data5={yearData5}
        />
      )}
      {props.name === "Subscriber Count" && (
        <BarLineGraph
          name="Substack Subscribers"
          type={props.type}
          style={props.data.style}
          data={yearData}
          data2={yearData2}
        />
      )}
      {props.name === "Alt Asset Challenge" && (
        <PyramidGraph
          name={props.name}
          type={props.type}
          style={props.data.style}
          data={yearData}
          data2={yearData2}
          data3={yearData3}
          data4={yearData4}
          data5={yearData5}
          data6={yearData6}
        />
      )}
      {props.name === "Angel Investments" && (
        <BarWTotalGraph
          name={yearFilter}
          type={props.type}
          style={props.data.style}
          data={yearData}
          data2={yearData2}
        />
      )}
      {props.name === "Swing Trades" && (
        <StackedBarGraph
          name={yearFilter}
          type={props.type}
          style={props.data.style}
          data={yearData}
          data2={yearData2}
        />
      )}
      {props.name === "Collectables" && (
        <PolarGraph
          name={yearFilter}
          type={props.type}
          style={props.data.style}
          data={yearData}
          data2={yearData2}
        />
      )}
      <YearNavigation
        handler={updateYearData}
        years={years}
        yearFilter={yearFilter}
      />
    </section>
  );
}

export { GraphCard }