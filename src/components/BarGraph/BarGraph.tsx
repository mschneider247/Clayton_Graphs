import { Bar } from "react-chartjs-2";

interface Iprops {
  name: string;
  data: number[];
  type: string;
}

const BarGraph = (props: Iprops) => {

  const name = props.name;

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: '# of ' + name + ' per month',
        data: props.data,
        backgroundColor: [
          "#68671A"
        ],
        borderColor: [
          "#A8B163"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: ""
      },
      title: {
        display: true,
        text: props.name,
      }
    }
  };

  return (
    <article>
      <Bar
        data={data}
        options={options}  
      />
    </article>
  )
}

export { BarGraph }