import { useState } from 'react';
import { Line } from "react-chartjs-2";
import "./LineWTotalGraph.css";

interface IStyle {
  mainDark: string;
  mainLight: string;
  secondDark: string;
  secondLight: string;
  thirdDark: string;
  thirdLight: string;
}

interface Iprops {
  style: IStyle;
  name: string;
  data: number[];
  data2?: number[];
  type: string;
}

const LineWTotalGraph = (props: Iprops) => {

  const [articleClass, setArticleClass]: [string, (articleClass: string) => void] = useState<string>("");

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
        label: "Miles Run",
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
        beginAtZero: true,
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
        position: "bottom",
        onHover: () => {
          toggleTrigger();
        },
        onLeave: () => {
          toggleTrigger();
        }
      },
      title: {
        display: false
      }
    }
  };

  const toggleTrigger = () => {
    if (articleClass === '') {
      setArticleClass("trigger")
    }
    else {
      setArticleClass("")
    }
  }


  const returnYearTotal = () => {
    let total = 0;
    props.data2?.forEach(number => {
      total += number;
    });
    return total;
  };

  return (
    
    <article className={articleClass}>
      <h3>Miles Run</h3>
      <Line data={data} options={options} />
      <h3>
        {props.name + " total: "}
        <span className="year_total_miles_run">{returnYearTotal()}</span>
      </h3>
    </article>
  );
};

export { LineWTotalGraph };
