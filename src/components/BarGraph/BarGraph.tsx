import { Bar } from "react-chartjs-2";

interface IStyle {
  mainDark: string,
  mainLight: string,
  secondDark: string,
  secondLight: string
}

interface Iprops {
  style: IStyle,
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
        backgroundColor: props.style.secondDark,
        borderColor: props.style.secondLight,
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: props.style.secondLight
        }
      },
      y: {
        ticks: {
          color: props.style.secondLight,
          stepSize: 10,
          font: {
            size: 14,
          }
        }
      }
    },
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
        color: props.style.mainLight,
        text: props.name,
        font: {
          size: 18,
        }
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