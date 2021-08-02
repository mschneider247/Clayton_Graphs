import './ClearButton.css'

interface Iprops {
  handler: Function;
}

const ClearButton = (props: Iprops) => {
  return (
    <section className="filter_by_type">
          <button
            className="clear_button"
            onClick={() => props.handler(0)}
          >
            go back
          </button>
    </section>
  );
};

export { ClearButton };
