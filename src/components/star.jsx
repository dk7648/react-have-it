
function Star(props) {
    console.log(props.rating)
  return (
    <div className="rating">
      {Array.from({ length: props.rating }, (_, i) => (
        <div key={i} >
          <img
            src={"https://codingapple1.github.io/shop/shoes1.jpg"}
            width="30"
          />
        </div>
      ))}
    </div>
  );
}

  export default Star;