import React from "react"
import { Link } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";


export default class NotFoundPage extends React.Component {

  // <div className="pageNotFound_div">
  //   <p>Возможно, вы искали одну из этих страниц:</p>
  //   {this.getLinks()}
  // </div>
  // getLinks() {
  //   var url = window.location.pathname[1];
  //   var pages = [];
  //   return(
  //     <ul>
  //       <li><Link to="/"></Link></li>
  //       <li><Link to="/"></Link></li>
  //       <li><Link to="/"></Link></li>
  //     </ul>
  //   );
  // }

  render () {
    return (
    <>

      <Helmet>
        <title>Страница не найдена | Crypton.com.ua</title>
        <meta name="description" content="К сожалению, по запрошенному адресу страница не найдена. Попытайтесь найти страницу, воспользовавшись меню." />
      </Helmet>

      <Header></Header>

      <div className="page notFound_page">
        <div className="container">

          <h1 className="error_code">404</h1>
          <h2 className="title">Упс! Что-то пошло не так</h2>
          <div className="textDiv">
            <p>К сожалению, по запрошенному адресу страница не найдена.</p>
            <p>Пожалуйста, убедитесь, что вы ввели правильную ссылку или попробуйте найти нужную страницу с помощью меню.</p>
          </div>

          <Link to="/" className="btn">Вернуться на главную</Link>

        </div>
      </div>

      <Footer></Footer>

    </>
    )
  }
}
