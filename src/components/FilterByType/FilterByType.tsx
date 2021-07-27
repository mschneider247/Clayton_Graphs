import './FilterByType.css';

interface Iprops {
  handler: Function;
  typeFilter: string;
}

const FilterByType = (props: Iprops) => {

  const categories: string[] = ["All", "Subscribers", "Investments", "Collectables", "Fitness"]
  return (
    <section className="filter_by_type">
      {categories.map((category, index) => {
        let buttonClass = "filter_button";
        if (category === props.typeFilter) {
          buttonClass = "filter_button selected"
        }
        return (
          <button
            className={buttonClass}
            key={index}
            onClick={() => props.handler(category)}
          >
            {category}
          </button>
        )
      })}
    </section>
  )
}

export { FilterByType }