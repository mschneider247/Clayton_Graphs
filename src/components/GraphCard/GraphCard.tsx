import { useState } from 'react';
import { GraphNavigation } from '../GraphNavigation/GraphNavigation'

interface IGraph {
  id: number;
  name: string;
  type: string;
  data: {};
}

const GraphCard = (props:IGraph) => {

  console.log("Here we have props.data", props.data)

  console.log("Navigation should get ::", Object.keys(props.data))

  const [yearFilter, setYearFilter]: [string, (yearFilter: string) => void] = useState("2021")

  const years:string[] = Object.keys(props.data)

  //


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