import './GraphNavigation.css'

interface IProps {
  handler: Function;
  years: string[];
  yearFilter: string;
  updateData: Function;
}

const GraphNavigation = (props: IProps) => {
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
            onClick={() => (props.handler(year), (props.updateData()))}
          >
            {year}
          </button>
        )
      })}
    </nav>
  )
}

export { GraphNavigation }