import { useState } from 'react';
import { GraphNavigation } from '../GraphNavigation/GraphNavigation'

interface IData {
  years: string[];
}

interface IGraph {
  id: number;
  name: string;
  type: string;
  data: IData;
}

const GraphCard = (props:IGraph) => {
  console.log("This is graph:::", props.name)
  console.log("Here we have props.data", props.data)
  console.log("Can we get year uh no...")

  console.log("Navigation should get ::", Object.keys(props.data))

  const [yearFilter, setYearFilter]: [string, (yearFilter: string) => void] = useState("2021")

  const year:string = yearFilter
  const years:string[] = props.data.years



  return (
    <section>
      <p>This is the graph card. It holds state, controlling graph navigation and chart display</p>
      <GraphNavigation 
        handler={setYearFilter}
        years={years}
        yearFilter={yearFilter}
      />
    </section>
  )
}

export { GraphCard }