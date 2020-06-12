import React from "react";
import icon1 from "../../../img/palm-of-hand.png";
import icon2 from "../../../img/footprints.png";
import Exchange from "./Exchange";
function Newsleft() {
  const recommendation = [
    {
      icon: icon1,
      news: "новость1",
      href:
        "https://github.com/alfa-laboratory/arui-feather/blob/v16.0.0/src/dropdown/dropdown.jsx",
    },
    {
      icon: icon2,
      news: "новость2",
      href:
        "https://github.com/alfa-laboratory/arui-feather/blob/v16.0.0/src/dropdown/dropdown.jsx",
    },
    {
      icon: icon1,
      news: "новость3",
      href:
        "https://github.com/alfa-laboratory/arui-feather/blob/v16.0.0/src/dropdown/dropdown.jsx",
    },
  ];
  return (
    <div className="NewsRight">
      <div className="list ">
        {recommendation.map((a) => (
          <a href={a.href} className="item-link flex mt-2">
            <div className="icon">
              <img src={a.icon} alt="" />
            </div>
            <div className="txt">{a.news}</div>
          </a>
        ))}
      </div>
      <Exchange />
    </div>
  );
}

export default Newsleft;
