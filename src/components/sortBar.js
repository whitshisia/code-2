import React from "react";

function SortBar({ onSort }) {
    return (
      <div className="sort-bar ui segment">
        <button className="ui button primary" onClick={() => onSort('health')}>Sort by Health</button>
        <button className="ui button primary" onClick={() => onSort('damage')}>Sort by Damage</button>
        <button className="ui button primary" onClick={() => onSort('armor')}>Sort by Armor</button>
      </div>
    );
  }
  
  export default SortBar;