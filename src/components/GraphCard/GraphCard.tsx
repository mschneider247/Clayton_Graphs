import { useState, useEffect } from 'react';
import { BarGraph } from '../BarGraph/BarGraph';
import { LineGraph } from '../LineGraph/LineGraph';
import { YearNavigation } from '../YearNavigation/YearNavigation';
import './GraphCard.css'

interface IStyle {
  mainDark: string,
  mainLight: string,
  secondDark: string,
  secondLight: string
}

interface ISingleYear {
  id: number,
  name: string,
  data: number[],
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

  const years:string[] = props.data.years.map((year) => {
    return year.name
  })

  const updateYearData = (inputYear:string) => {
    setYearFilter(inputYear);
    const yearDataFilter: any = props.data.years.find(year => {
      return year.name === inputYear;
    });
    setYearData(yearDataFilter.data);
  }

  useEffect(() => {
    updateYearData("2021");
  }, [])

  return (
    <section className="graph_card">
      {props.name === "Miles Run" && 
        <LineGraph
          name={props.name}
          type={props.type}
          style={props.data.style}
          data={yearData}
        />
      }
      {props.name === "Subscriber Count" && 
        <BarGraph
          name={props.name}
          type={props.type}
          style={props.data.style}
          data={yearData}
        />
      }
      {props.name === "Angel Investments" && 
        <BarGraph
          name={props.name}
          type={props.type}
          style={props.data.style}
          data={yearData}
        />
      }
      <YearNavigation
        handler={updateYearData}
        years={years}
        yearFilter={yearFilter}
      />
    </section>
  );
}

export { GraphCard }