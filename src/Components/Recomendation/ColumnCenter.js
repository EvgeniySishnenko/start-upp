// Компонтент выводит центральную колнку
import React from "react";
import List from "./List";
import icon1 from "../../img/palm-of-hand.png";
function ColumnCenter() {
  return (
    <div className="ColumtCenter">
      <List titles="Карта Германии">
        <div className="item ">Расписание</div>
      </List>
      <List titles="Телепрограмма">
        <div className="item">
          <span>01:00</span> - о сталинках
        </div>
        <div className="item">
          <span>01:00</span> - о сталинках
        </div>
        <div className="item">
          <span>01:00</span> - о сталинках
        </div>
      </List>
    </div>
  );
}
export default ColumnCenter;
