import React from "react";
// компонент отвечает за ввод поисковых фраз
function Search() {
  return (
    <>
      <div className="container-search">
        <label class="flex">
          <div>Яндекс</div>
          <input className="search-input" type="text" />
          <button>Найти</button>
        </label>
      </div>
      <div className="container">
        <div className="example">Найдется все</div>
      </div>
    </>
  );
}
export default Search;
