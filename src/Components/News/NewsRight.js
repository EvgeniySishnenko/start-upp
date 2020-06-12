import React from "react";
import icon1 from "../../img/palm-of-hand.png";

function RecommendationsRight() {
  const errArr = [
    {
      icon: icon1,
      news: "новость1",
      txt: "Смотрите на яндексе",
      href:
        "https://github.com/alfa-laboratory/arui-feather/blob/v16.0.0/src/dropdown/dropdown.jsx",
    },
  ];
  return (
    <div className="NewsRight">
      <a href={errArr[0].href}>
        <div className="icon">
          <img src={icon1} alt="" />
        </div>
        <div className="txt">{errArr[0].news}</div>
        <div className="txt">{errArr[0].txt}</div>
      </a>
    </div>
  );
}
export default RecommendationsRight;
