import { Bar } from "react-chartjs-2";

interface IStyle {
  mainDark: string,
  mainLight: string,
  secondDark: string,
  secondLight: string,
  thirdDark: string,
  thirdLight: string,
}

interface Iprops {
  style: IStyle,
  name: string;
  data: number[];
  data2?: number[];
  type: string;
}

const BarLineGraph = (props: Iprops) => {
  
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
        label: "Total subs",
        type: "line",
        data: props.data2,
        backgroundColor: props.style.thirdDark,
        borderColor: props.style.thirdLight,
        borderWidth: 1
      },
      {
        label: "New subs",
        data: props.data,
        backgroundColor: props.style.secondDark,
        borderColor: props.style.secondLight,
        borderWidth: 1
      },
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
        display: true,
        position: "right"
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

export { BarLineGraph }