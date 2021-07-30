import { useState } from 'react';
import { Bar } from "react-chartjs-2";
import './StackedBarGraph.css'

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

const StackedBarGraph = (props: Iprops) => {

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
        label: "winners",
        data: props.data,
        backgroundColor: props.style.secondDark,
        borderColor: props.style.secondLight,
        borderWidth: 1
      },
      {
        label: "losers",
        data: props.data2,
        backgroundColor: props.style.thirdDark,
        borderColor: props.style.thirdLight,
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: props.style.secondLight
        }
      },
      y: {
        stacked: true,
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
        text: props.name,
        font: {
          size: 18
        }
      }
    }
  };

  let performanceTotal = 0;

  const returnPerformanceColor = () => {
    let total = 0;
    let wins: any = props.data;
    let loses: any = props.data2;
    wins.forEach((win:any) => total += win);
    loses.forEach((loss:any) => total += loss);
    performanceTotal = total;
    if (total > 0) {
      return "green"
    }
    return "red";
  }

  return (
    <article>
      <h3>Swing Trades</h3>
      <Bar data={data} options={options} />
      <h4 className="alt_totals">
        <section className="section_totals">
          <div>
            {props.name} performance: {" "} 
            <span className={returnPerformanceColor()}>{performanceTotal}</span>
          </div>
        </section>
      </h4>
    </article>
  );
};

export { StackedBarGraph };
