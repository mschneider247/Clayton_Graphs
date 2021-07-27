import { useState, useEffect } from 'react';
import { LineGraph } from '../LineGraph/LineGraph';
import { BarLineGraph } from '../BarLineGraph/BarLineGraph';
import { StackedBarGraph } from '../StackedBarGraph/StackedBarGraph';
import { BarWTotalGraph } from "../BarWTotalGraph/BarWTotalGraph";
import { YearNavigation } from '../YearNavigation/YearNavigation';
import './GraphCard.css'

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

const defaultYearData = [0];

const GraphCard = (props:IGraph) => {
  const [yearFilter, setYearFilter]: [string, (yearFilter: string) => void] = useState("2021")

  const [yearData, setYearData]: [number[], (yearData: number[]) => void] = useState(defaultYearData)
  const [yearData2, setYearData2]: [number[], (yearData2: number[]) => void] = useState(defaultYearData)


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
  }

  useEffect(() => {
    updateYearData("2021");
  }, [])

  return (
    <section className="graph_card">
      {props.name === "Miles Run" && (
        <LineGraph
          name={props.name}
          type={props.type}
          style={props.data.style}
          data={yearData}
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
          name={props.name}
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