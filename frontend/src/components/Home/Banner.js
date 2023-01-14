import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {

  const onSearchChange = (e) => {
    props.onSearch(e.target.value, (page)=>
      agent.Items.byTitle(e.target.value, page), agent.Items.byTitle(e.target.value),
    )
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input onChange={onSearchChange} className="m-2" type="text" placeholder="what is it that you truly desire" name="term" id="search-box"/>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
