// Компонтент выводит правую колнку
import React from "react";
import List from "./List";
import icon1 from "../../img/palm-of-hand.png";
function ColumnRight() {
  return (
    <div className="ColumnRight">
      <List titles="Эфир">
        <div className="item flex">
          <div>
            <img className="icon" src={icon1} alt="" />
          </div>
          <div>Управление как искусство</div>
        </div>
        <div className="item flex">
          <div>
            <img className="icon" src={icon1} alt="" />
          </div>
          <div>Управление как искусство</div>
        </div>
        <div className="item flex">
          <div>
            <img className="icon" src={icon1} alt="" />
          </div>
          <div>Управление как искусство</div>
        </div>
      </List>
    </div>
  );
}
export default ColumnRight;
