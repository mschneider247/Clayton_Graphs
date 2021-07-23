import './YearNavigation.css'

interface IProps {
  handler: Function;
  years: string[];
  yearFilter: string;
}

const YearNavigation = (props: IProps) => {
  return (
    <nav>
      {props.years.map((year, index) => {
        let buttonClass = "year_navigation";
        if (year === props.yearFilter) {
          buttonClass = "year_navigation selected"
        }
        return (
          <button
            className={buttonClass}
            key={index}
            onClick={() => props.handler(year)}
          >
            {year}
          </button>
        )
      })}
    </nav>
  )
}

export { YearNavigation }