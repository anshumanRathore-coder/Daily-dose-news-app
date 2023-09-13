import React, {useReducer, useState } from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default function App() {
  const query = {
    country: "in",
    category: "top",
    language: "en",
  };

  const updateSearch=(value)=>{
    setSearch(value);
  }

  const reducer = (apiVariables, action) => {
    const type = action.type;
    const value = action.value;
    const data = { ...apiVariables };
    console.log(action);
    if (type === "country") {
      data.country = value;
    }
    if (type === "language") {
      data.language = value;
    }
    if (type === "category") {
      data.category = value;
    }
    apiVariables = data;
    return apiVariables;
  };

  const [apiVariables, dispatch] = useReducer(reducer, query);
  const [search,setSearch]=useState("top");
  
  return (
    <>
      <Header dispatch={dispatch} updateSearch={updateSearch}/>
      <NavBar dispatch={dispatch}/>
      <News apiVariables={apiVariables} search={search} updateSearch={updateSearch}/>
    </>
  );
}
