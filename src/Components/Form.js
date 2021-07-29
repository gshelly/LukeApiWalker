import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Form = (props) => {

  const [apiName, setApiName] = useState([])
  const [type, setType] = useState("")
  const [id, setId] = useState(0)

  useEffect(() => {
    axios.get(`https://swapi.dev/api`)
      .then(response => {
        let data = response.data
        setApiName(data)
      })
      .catch(error => console.log(error))
  }, [])

  const findResult = (e) => {
    e.preventDefault();

    let url = `https://swapi.dev/api/${type}/${id}`
    axios.get(url)
      .then(response => {
        let data = response.data
        props.setResult(data)
        navigate(`/${id}`)
      })
      .catch(error => {
        console.log(error)
        navigate('/error')
      })
  }

  return (
    <form onSubmit={findResult}>
      <span>Search For:</span>
      <select
        onChange={(e) => setType(e.target.value)}
        name="type"
        style={{
          margin: "10px",
          width: "200px",
          height: "40px",
          backgroundColor: "#f4ebeb",
          display: "inline-block",
          border: "none",
          borderRadius: "4px",
          padding: "10px"
        }}
      >
        <option value="" disabled selected>
          Select...
        </option>
        {
          Object.keys(apiName).map((key, index) =>
            <option value={key} key={index}>{key}</option>
          )
        }
      </select>
      <span> ID:</span>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        name="ref_num"
        className="validate white darken-1"
        style={{
          borderRadius: "4px",
          margin: "10px",
          width: "30px",
          height: "20px",
          padding: "10px",
          backgroundColor: "#f4ebeb",
          border: "none",
          display: "inline-block"
        }}
      />
      <button
        type="submit"
        style={{
          borderRadius: "4px",
          margin: "10px",
          width: "100px",
          height: "40px",
          backgroundColor: "blue",
          color: "white",
          display: "inline-block"
        }}
      >
        <span>Search</span>
      </button>
    </form>
  );
}

export default Form;