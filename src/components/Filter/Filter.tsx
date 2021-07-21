import './Filter';

const Filter = () => {

  const categories: string[] = ["All", "Subscribers", "Investments", "Collectables", "Fitness"]
  return (
    <section>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
          >
            {category}
          </button>
        )
      })}
    </section>
  )
}

export { Filter }