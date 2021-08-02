import { Bar } from "react-chartjs-2";
import "./BarWTotalGraph.css";

interface IStyle {
  mainDark: string;
  mainLight: string;
  secondDark: string;
  secondLight: string;
  thirdDark: string;
  thirdLight: string;
}

interface Iprops {
  id: number;
  style: IStyle;
  name: string;
  data: number[];
  data2?: number[];
  type: string;
  updateId: Function;
}

const BarWTotalGraph = (props: Iprops) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Angel Investments",
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
            size: 14
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
        display: true,
        position: "bottom"
      },
      title: {
        display: false,
        color: props.style.mainLight,
        text: "",
        font: {
          size: 16
        }
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
      <h3 onClick={() => props.updateId(props.id)}>Angel Investments</h3>
      <Bar data={data} options={options} />
      <h3>
        {props.name + " total: "}
        <span className="year_total">{returnYearTotal()}</span>
      </h3>
    </article>
  );
};

export { BarWTotalGraph };
