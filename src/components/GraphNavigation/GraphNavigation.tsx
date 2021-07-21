interface IProps {
  handler: Function;
  years: string[];
  yearFilter: string;
}
const GraphNavigation = (props: IProps) => {
  return (
    <nav>
      {props.years.map((year, index) => {
        return (
          <button
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

export { GraphNavigation }