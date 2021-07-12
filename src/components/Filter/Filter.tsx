import './Filter';

const Filter = () => {

  const categories: string[] = ["All", "Finance", "Tech", "Health", "Fitness"]
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