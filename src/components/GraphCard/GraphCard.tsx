import { useState, useEffect } from 'react';
import { BarGraph } from '../BarGraph/BarGraph';
import { YearNavigation } from '../YearNavigation/YearNavigation';
import './GraphCard.css'

interface ISingleYear {
  id: number,
  name: string,
  data: number[],
}

interface IData {
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
      <BarGraph 
        name={props.name}
        type={props.type}
        data={yearData}
      />
      <YearNavigation 
        handler={updateYearData}
        years={years}
        yearFilter={yearFilter}
      />
    </section>
  )
}

export { GraphCard }