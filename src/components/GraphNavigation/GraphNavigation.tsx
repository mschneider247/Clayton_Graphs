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
        return (
          <button
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