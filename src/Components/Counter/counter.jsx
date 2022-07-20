import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { GlobalContext } from "../../Context/Global/global.context";

function Counter() {
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
  const { count } = useContext(GlobalContext);
  return (
    <div >
      <p className="texinco">{t("counter")} {count ?? "No tiene ningun dato"}</p>
    </div>
  );
}

export default Counter;