import React from "react";
import { Link } from "gatsby";

export default class StartBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      extraInfo: getExtraInfo()
    };
  }

  render () {
    return (
      <>
        {getCodeOfClass()}
      </>
    )
  }

  componentDidMount() {
    setClass();
  }

}



function setClass() {
}

function getExtraInfo() {
}

function getCodeOfClass(){
  return(
    <div className="block startBlock">
      <h2 className="startH">
        Компания "Криптон" - это высокотехнологичные системы  телевизионного вещания
      </h2>
      <div className="textDiv">
        <p>Вже понад 26 років продукція Криптон використовується державними установами України та іноземними замовниками для забезпечення високотехнологічного криптозахисту інформації різних ступенів таємності, її спеціалізованої обробки, збереження та передачі каналами зв'язку...</p>
        <p className="moreBtn"><Link to="/profile" className="moreBtn_link">Узнать больше</Link></p>
      </div>
    </div>
  )
}
