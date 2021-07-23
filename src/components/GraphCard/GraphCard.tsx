import { useState, useEffect } from 'react';
import { Graph } from '../Graph/Graph';
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

  const updateYearData = () => {
    const yearDataFilter: any = props.data.years.find(year => {
      return year.name === yearFilter;
    });
    setYearData(yearDataFilter.data);
  }

  useEffect(() => {
    updateYearData();
  }, [])

  return (
    <section className="graph_card">
      <Graph 
        name={props.name}
        data={yearData}
      />
      <YearNavigation 
        handler={setYearFilter}
        years={years}
        yearFilter={yearFilter}
        updateData={updateYearData}
      />
    </section>
  )
}

export { GraphCard }