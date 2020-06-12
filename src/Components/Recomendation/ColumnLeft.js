// Компонтент выводит левую колнку
import React from "react";
import List from "./List";
import icon1 from "../../img/palm-of-hand.png";
function ColumnLeft() {
  return (
    <div className="ColumnLeft">
      <List titles="Погода">
        <div className="item flex">
          <div>
            <img className="icon" src={icon1} alt="" />
          </div>
          <div className="mr-1 ml-1">+17</div>
          <div>
            <div>Утром +11</div>
            <div>Ночью +7</div>
          </div>
        </div>
      </List>
      <List titles="Посещаемость">
        <div className="item ">
          <strong>Недвижимость</strong> - о сталинках
        </div>
        <div className="item">
          <strong>Недвижимость</strong> - о сталинках
        </div>
        <div className="item">
          <strong>Недвижимость</strong> - о сталинках
        </div>
      </List>
    </div>
  );
}
export default ColumnLeft;
