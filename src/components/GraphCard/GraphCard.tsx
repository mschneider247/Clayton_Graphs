import { useState, useEffect } from 'react';
import { Graph } from '../Graph/Graph';
import { GraphNavigation } from '../GraphNavigation/GraphNavigation';

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
  console.log("This is graph:::", props.name)

  const [yearFilter, setYearFilter]: [string, (yearFilter: string) => void] = useState("2021")

  const [yearData, setYearData]: [number[], (yearData: number[]) => void] = useState(defaultYearData)

  const years:string[] = props.data.years.map((year) => {
    return year.name
  })

  useEffect(() => {
    const yearDataFilter: any = props.data.years.find(year => {
      return year.name === yearFilter;
    });
    setYearData(yearDataFilter.data)
  }, [])

  return (
    <section>
      <p>This is the graph card. It holds state, controlling graph navigation and chart display</p>
      <GraphNavigation 
        handler={setYearFilter}
        years={years}
        yearFilter={yearFilter}
      />
      <Graph 
        name={props.name}
        data={yearData}
      />
    </section>
  )
}

export { GraphCard }