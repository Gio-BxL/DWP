import { useContext } from "react";
import Counter from "../Counter/counter";
import { GlobalContext } from "../../Context/Global/global.context";
import myimage from "../../asesst/gio.jpeg" 
import php from "../../asesst/php.png"
import css from "../../asesst/css.png"
import html from "../../asesst/html.png"
import java from "../../asesst/js.png"
import { useTranslation } from "react-i18next";
import imagen from "../../asesst/twitter.png" 


function InformationComponent() {
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
    const { handleCount } = useContext(GlobalContext);

  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <p >Home</p>
          </li>
          <li>
              <p onClick={() => changeLaguage("en")}>Ingles</p>
          </li>
          <li>
              <p  onClick={() => changeLaguage("es")} >Español</p>
          </li>
        </ul>

        <div className="n1">
          <p><b>in</b></p>
        </div>
        <div className="n1-img">
          <img src={imagen}  height="22px" class="logs"></img>
        </div>
        

      </div>
      <div className="card-info">
        <div className="container-info">
          <h1 className="tit">{t("title")}</h1>
          <p className="text-info" >{t("subtitle")}</p>
          <br/>
          <button className="botonV" onClick={() => handleCount("increment")}><p>{t("botons")}</p></button>
          <Counter />
        </div>
      </div>
      <img src={myimage} className="myimage"/>
      <br/><br/><br/>
      <div className="cad-info-tecnologias">
        <div className="tech">
            <div className="card-tech">
                <img src={php} className="img-tech"/>
                <p className="text-tech">PHP</p>
            </div>
            <div className="card-tech">
                <img src={html} className="img-tech"/>
                <p className="text-tech">HTML</p>
            </div>
            <div className="card-tech">
                <img src={css} className="img-tech"/>
                <p className="text-tech">CSS</p>
            </div>
            <div className="card-tech">
                <img src={java} className="img-tech"/>
                <p className="text-tech">JavaS</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InformationComponent;