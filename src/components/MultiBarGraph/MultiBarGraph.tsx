import { Bar } from "react-chartjs-2";
import "./MultiBarGraph.css";

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
  style: IStyle;
  name: string;
  type: string;
  data: number[];
  data2?: number[];
  data3?: number[];
  data4?: number[];
  data5?: number[];
  data6?: number[];
}

const MultiBarGraph = (props: Iprops) => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Art",
        data: props.data,
        backgroundColor: props.style.secondLight,
        borderColor: props.style.secondLight,
        borderWidth: 1
      },
      {
        label: "Books",
        data: props.data2,
        backgroundColor: props.style.thirdLight,
        borderColor: props.style.thirdLight,
        borderWidth: 1
      },
      {
        label: "Cards",
        data: props.data3,
        backgroundColor: props.style.fifthLight,
        borderColor: props.style.fifthLight,
        borderWidth: 1
      },
      {
        label: "Comics",
        data: props.data4,
        backgroundColor: props.style.secondDark,
        borderColor: props.style.secondDark,
        borderWidth: 1
      },
      {
        label: "Movies",
        data: props.data5,
        backgroundColor: props.style.fourthDark,
        borderColor: props.style.fourthDark,
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        stacked: false,
        ticks: {
          color: props.style.mainLight
        }
      },
      y: {
        stacked: false,
        ticks: {
          stepSize: 2,
          color: props.style.secondLight,
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
        text: props.name,
        font: {
          size: 18
        }
      },
      
    }
  };

  const returnCollectableTotal = (data: any) => {
    let total = 0;
    let collectables: number[] = data;
    collectables.forEach((item) => total += item)
    return total;
  };

  return (
    <article>
      <h3>{props.name}</h3>
      <Bar data={data} options={options} />
      <h4>Totals Collected:</h4>
      <h4 className="alt_totals">
        Art:{" "}<span className="art_total">{returnCollectableTotal(props.data)}</span>
        Books:{" "}<span className="books_total">{returnCollectableTotal(props.data2)}</span>
        Cards:{" "}<span className="cards_total">{returnCollectableTotal(props.data3)}</span>
        Comics:{" "}<span className="comics_total">{returnCollectableTotal(props.data4)}</span>
        Movies:{" "}<span className="movies_total">{returnCollectableTotal(props.data5)}</span>
      </h4>
    </article>
  );
};

export { MultiBarGraph };
