import { Link } from "gatsby"
import React from "react"


export default () => (
    <div> 
        <ul>
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to="/products">Оборудование</Link>
            </li>
            <li>
                <Link to="/solutions">Решения</Link>
            </li>
            <li>
                <Link to="/services">Сервис</Link>
            </li>
            <li>
                <Link to="/contact">Контакты</Link>
            </li>
        </ul>
    </div> 
);
