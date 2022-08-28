

const App = ({props}) => {
  return (
    <section className="card" id={props.id}>
      <div className="back"></div>
        <div>
          <img src={'https://image.tmdb.org/t/p/w500'+props.backdrop_path} alt=""/>
          <p>{props.original_title}</p>
        </div>
    </section>
  );
}

export default App;
