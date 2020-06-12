// Компонтент выводит все рекомндации

import React from "react";
import ColumnRight from "./ColumnRight";
import ColumnLeft from "./ColumnLeft";
import ColumnCenter from "./ColumnCenter";
function Recomendation() {
  return (
    <div className="Recomendation mt-3 row justify-content-between">
      <ColumnLeft />
      <ColumnCenter />
      <ColumnRight />
    </div>
  );
}
export default Recomendation;
