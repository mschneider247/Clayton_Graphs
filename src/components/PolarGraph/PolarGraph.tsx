import { PolarArea } from 'react-chartjs-2';
import './PolarGraph.css';

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

interface Iprops {
  id: number;
  style: IStyle;
  name: string;
  type: string;
  data: number[];
  data2?: number[];
  updateId: Function;
}

const PolarGraph = (props: Iprops) => {
  const data = {
    labels: ["Art", "Books", "Cards", "Commics", "Movies"],
    datasets: [
      {
        label: "Collectables",
        data: props.data,
        backgroundColor: [
          props.style.secondLight,
          props.style.thirdLight,
          props.style.fifthLight,
          props.style.secondDark,
          props.style.fourthDark,
        ],
        borderColor: props.style.mainLight,
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      r: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)"
        },
        ticks: {
          color: props.style.mainLight,
          backdropColor: "rgba(0,0,0,0)"
        }
      },
      x: {
        display: false
      },
      y: {
        display: false
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
        display: true,
        position: "bottom"
      },
      title: {
        display: false
      }
    }
  };

  const returnYearTotal = () => {
    let total = 0;
    props.data2?.forEach(number => {
      total += number;
    });
    return total;
  };

  return (
    <article>
      <h3 onClick={() => props.updateId(props.id)}>Collectables</h3>
      <PolarArea data={data} options={options} />
      <h4>
        {"Total collected in " + props.name + ": "}
        <span className="polar_year_total">{returnYearTotal()}</span>
      </h4>
    </article>
  );
};

export { PolarGraph }