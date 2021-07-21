interface IProps {
  handler: Function;
  years: string[];
  yearFilter: string;
}
const GraphNavigation = (props: IProps) => {
  return (
    <h5>This is a graph a navagation</h5>
  )
}

export { GraphNavigation }