// родительский компонент для:
// "Сейчас в сми"
// новостей
// блока правый "работа над ошибками"
import React from "react";
import NewsLeft from "./NewsLeft/NewsLeft";
import NewsRight from "./NewsRight";
import CurrentNews from "./NewsLeft/CurrentNews";

function News() {
  return (
    <>
      <CurrentNews />
      <div className="row justify-content-between">
        <NewsLeft />
        <NewsRight />
      </div>
    </>
  );
}
export default News;
