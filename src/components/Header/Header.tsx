import './Header.css';

const Header = () => {

  let titleImage = `images/claytonGraph.jpeg`;
  console.log(titleImage)

  return (
    <header className="main_title">
      <h1>Clayton Graphs!</h1>
      <img 
        className="title_image"
        alt="Clayton Graph" 
        src={titleImage}
      />
    </header>
  )
}

export { Header }