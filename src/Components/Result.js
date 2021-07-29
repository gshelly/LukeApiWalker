const Result = (props) => {
  const { result } = props
  return (
    <div>
      {
        Object.keys(result).map((key, index) => {
          return (
            <div key={index}>
              {
                key === "name" ?
                  <h1> {result[key]}</h1> :
                  <>
                    <span style={{ color: "blue" }}> <b>{key}: </b></span>
                    <h5 style={{ display: "inline-block" }}>  {result[key]}</h5>
                  </>
              }

            </div>)
        })
      }
    </div>
  );
}

export default Result;