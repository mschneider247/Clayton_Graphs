import { Bar } from "react-chartjs-2";
import './PyramidGraph.css'

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

const PyramidGraph = (props: Iprops) => {

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "C Cash",
        data: props.data?.map(number => number * -1),
        backgroundColor: props.style.secondLight,
        borderColor: props.style.secondLight,
        borderWidth: 1
      },
      {
        label: "C Assets",
        data: props.data2?.map(number => number * -1),
        backgroundColor: props.style.secondDark,
        borderColor: props.style.secondDark,
        borderWidth: 1
      },
      {
        label: "S Cash",
        data: props.data3,
        backgroundColor: props.style.thirdLight,
        borderColor: props.style.thirdLight,
        borderWidth: 1
      },
      {
        label: "S Assets",
        data: props.data4,
        backgroundColor: props.style.thirdDark,
        borderColor: props.style.thirdDark,
        borderWidth: 1
      }
    ]
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: props.style.fourthDark,
          callback: (xvalue: number) => {
            return xvalue < 0 ? -xvalue : xvalue;
          }
        }
      },
      y: {
        stacked: true,
        ticks: {
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
        position: "bottom",
      },
      title: {
        display: false,
        color: props.style.mainLight,
        text: props.name,
        font: {
          size: 18
        }
      },
      tooltip: {
        callbacks: {
          label: (label: any) => {
            let value = Number(label.formattedValue.replace(/,/g, ""));
            let positiveOnly = value < 0 ? -value : value;
            let returnString = "";
            if (label.datasetIndex === 0) {
              returnString = `Clayton Cash: $`;
            } else if (label.datasetIndex === 1) {
              returnString = `Clayton Assets: $`;
            } else if (label.datasetIndex === 2) {
              returnString = `Stephen Cash: $`;
            } else if (label.datasetIndex === 3) {
              returnString = `Stephen Assets: $`;
            }
            return `${returnString}${positiveOnly.toString()}`;
          }
        }
      }
    }
  };

  const returnClaytonTotal = () => {
    let total = 0;
    let cash: number[] = props.data;
    let assets: any = props.data2;
    total = cash[cash.length - 1] + assets[assets.length - 1];
    return total;
  };

  const returnStephenTotal = () => {
    let total = 0;
    let cash: any = props.data3;
    let assets: any = props.data4;
    total = cash[cash.length - 1] + assets[assets.length - 1];
    return total;
  };

  return (
    <article >
      <h3>Alt Asset Challenge</h3>
      <Bar 
        data={data} 
        options={options} 
      />
      <h4>Current Portfolio Values:</h4>
      <h4 className="alt_totals">
        Clayton $<span className="clayton_total">{returnClaytonTotal()}</span>
        Stephen $<span className="stephen_total">{returnStephenTotal()}</span>
      </h4>
    </article>
  );
};

export { PyramidGraph };
