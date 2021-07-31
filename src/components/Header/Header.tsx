import './Header.css';
import claytonGraph from '../../assets/claytonGraph.png'

const Header = () => {

  const titleImage = `images/claytonGraph.png`;
  console.log(titleImage)

  return (
    <header className="main_title">
      <img 
        className="title_image"
        src={claytonGraph}
        alt="Clayton Graph" 
      />
    </header>
  )
}

export { Header }