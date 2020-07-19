import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import Header from "../components/Header"
import Footer from "../components/Footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class ProductInfo extends React.Component {

  scrollToRef(ref, headerRef){window.scroll({top: ref.current.offsetParent.offsetTop + ref.current.offsetTop - (headerRef.current.offsetWidth > 1006 ? 0 : headerRef.current.offsetHeight), left: 0, behavior: "smooth"})}

  getVisibleOrNoPhotos(refsArray){
    if(refsArray.length <= 1){
      return(
        <div className="product-photo_box">
          {this.map(this.props.photos, "product-photo_img", "dnone", refsArray)}
        </div>
      );
    } else {return(
      <>
      <ul className="product-thumb">
        <div className="scrollbar_layout">
          {this.map(this.props.photos, "product-photo_img", false, refsArray)}
        </div>
      </ul>
      <div className="product-photo_box">
        {this.map(this.props.photos, "product-photo_img", "dnone", refsArray)}
      </div>
      </>
    )}

  }

  map(photos, addedClass, invisibleClass, refsArray){
    var photosArray = new Array(photos.length);

    if(invisibleClass === false && photos.length !== 1){
      for(var i = 0; i < photos.length; i++){
        var currentPhoto = photos[i];

        var func = invisibleClass !== false ? null : this.selectThisImage(refsArray, photosArray, i);

        photosArray[i] =
          <li key={i} ref={React.createRef()} className={i === 0 ? "active" : null} >
            <button onClick={func}>
            <Img fluid={currentPhoto} key={i}
              className={"flexbox"} alt={this.props.name+" Crypton"}></Img>
              </button>
          </li>

      }
      return(
        <div className="scrollbar_inner">
          {photosArray}
        </div>
      )
    } else {
      if(invisibleClass !== false){
        for(var j = 0; j < photos.length; j++){
          currentPhoto = photos[j];
          photosArray[j] =
            <div  ref={refsArray[j]} className={addedClass + " " + (j === 0 ? "" : invisibleClass)} >
              <Img fluid={currentPhoto} key={j} alt={this.props.name+" Crypton"}></Img>
            </div>

        }
        return photosArray;
      }
    }
  }

  selectThisImage(refsArray, photosArray, i){
    function selectImage(){
      for(var j = 0; j < refsArray.length; j++){
        if(j !== i){
          refsArray[j].current.classList.add("dnone");
          photosArray[j].ref.current.classList.remove("active");
        } else {
          refsArray[j].current.classList.remove("dnone");
          photosArray[j].ref.current.classList.add("active");
        }
      }
    }
    return selectImage;
  }

  getPageProperties(propertiesRef){
    if(this.props.propertiesTable() === false){
      return(<></>);
    } else {
      return(
        <div className="properties" ref={propertiesRef}>
          <h2>Характеристики</h2>
            {this.props.propertiesTable()}
        </div>
      );
    }
  }

  getBreadCrumbs(){
    return(
      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Все товары</Link></li>
            {this.props.categories.length <= 1 ?
              <li><Link to={"/" + this.props.categories[0].link}>{this.props.categories[0].text}</Link></li> : ""}
            <li><span>{this.props.name}</span></li>
          </ul>
        </div>
      </div>
    );
  }

  getCategories(categories){
    if(categories.length <= 1){
      return;
    } else {
      var categoriesArray = [];

       for(var i = 0; i < categories.length; i++){
         categoriesArray.push(
           <li key={"categories" + i}>
             <Link to={"/" + categories[i].link}>{categories[i].text}</Link>
           </li>
         );
       }

      return(
        <div className="categories">
          <p className="title">Категории:</p>
          <ul className="categories_ul flexbox" key={"product_page .categories" + i}>
          {categoriesArray}
          </ul>
        </div>
      )
    }

  }

  getButton(){
    return(
      <Link to={"/" + (this.props.categories.length === 1 ? this.props.categories[0].link : "products")} className="moreBtn backToCat_button">

        <FontAwesomeIcon className="fa_icon" icon={faChevronLeft}/>

        {this.props.categories.length === 1 ? this.props.categories[0].text : "Все товары"}
      </Link>)
  }

  getNavButton(text, ref, context, headerRef){
    if(context() === false){
      return;
    } else {
      return(
        <button onClick={(event) => {event.preventDefault()
          this.scrollToRef(ref, headerRef)}}>{text}</button>
      )
    }
  }

  readMore(e, excerpt){
    var excerptObj = excerpt.current;
    var readMore_btn = e.target;

    if(readMore_btn.textContent.toLowerCase() === "читать полностью"){
      readMore_btn.textContent = "Свернуть";
      excerptObj.classList.remove('excerpt_hidden');
      excerptObj.classList.add('excerpt_visible');
    } else {
      readMore_btn.textContent = "Читать полностью";
      excerptObj.classList.remove('excerpt_visible');
      excerptObj.classList.add('excerpt_hidden');
    }
  }


  render () {

      var propertiesRef = React.createRef();
      var descriptionRef = React.createRef();
      var allInfoRef = React.createRef();

      var headerRef = React.createRef();
      var excerpt = React.createRef();

      var refsArray = [];

      for(var a = 0; a < this.props.photos.length; a++){
        refsArray.push(React.createRef());
      }


    return (
      <>

      <Header refer={headerRef} />

        {this.getBreadCrumbs()}

        <div className="page product_page">
          <div className="container">

            <div className="productPage_top">
              {this.getButton()}

              <h1>{this.props.name}</h1>

              {this.getCategories(this.props.categories)}
            </div>

            <div className="productPage_main" ref={allInfoRef}>
              <div className="navbar">
                <ul className="tabs_list flexbox">
                  <li className="activeTab">
                    <button onClick={(event) => {event.preventDefault()
                      this.scrollToRef(allInfoRef, headerRef)}}>Все о товаре</button>
                  </li>
                  <li>
                    {this.getNavButton("Описание", descriptionRef, this.props.description, headerRef)}
                  </li>
                  <li>
                    {this.getNavButton("Характеристики", propertiesRef, this.props.propertiesTable, headerRef)}
                  </li>
                </ul>
              </div>

              <div className="product-gallery flexbox">
                {this.getVisibleOrNoPhotos(refsArray)}
              </div>

              <div className="description" ref={descriptionRef}>
                <h2 className="title">Описание</h2>
                <div ref={excerpt} className="js_excerpt excerpt_hidden">
                  {this.props.description()}
                </div>
                <button className="moreBtn readMore_btn" onClick={(e) => this.readMore(e, excerpt)}>Читать полностью
                  <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                </button>
              </div>

              {this.getPageProperties(propertiesRef)}
            </div>
          </div>
        </div>

      <Footer/>

      </>
      )}

  }


ProductInfo.propTypes = {
  categories: PropTypes.array.isRequired,
  // button: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  // pdf: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  description: PropTypes.func.isRequired,
  propertiesTable: PropTypes.func.isRequired,
};


// <div className="description" ref={descriptionRef}>
//   <h2 className="title">Описание</h2>
//   <div ref={excerpt} className="js_excerpt excerpt_hidden">
//     {this.props.description()}
//   </div>
//   <button className="moreBtn readMore_btn" onClick={(e) => this.readMore(e, excerpt)}>Читать полностью
//     <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
//   </button>
// </div>
