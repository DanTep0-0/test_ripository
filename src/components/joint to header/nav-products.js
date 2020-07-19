import React from "react";
import { Link } from "gatsby";

export default () => (
  <div>
    <ul>
      <li>
        <Link to="/p_receivers">Профессиональные ресиверы (IRD)</Link>
      </li>
      <li>
        <Link to="/multiplexors">Мультиплексоры DVB</Link>
      </li>
      <li>
        <Link to="/modulators">Модуляторы</Link>
      </li>
      <li>
        <Link to="/cod882asi">Энкодеры MPEG-2</Link>
      </li>
      <li>
        <Link to="/cas_crypton">Система условного доступа Crypton</Link>
      </li>
      <li>
        <Link to="/scramblers">Скремблеры</Link>
      </li>
      <li>
        <Link to="/biss">BISS CA-модуль</Link>
      </li>
      <li>
        <Link to="/tutorial/part-four">Сумматоры мощности</Link>
      </li>
 
    </ul>
  </div>
);