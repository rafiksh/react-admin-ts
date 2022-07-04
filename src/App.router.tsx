import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  const { i18n, t } = useTranslation(["common"]);

  const toggleLanguage = () =>
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {t("HELLO")}{" "}
              <button onClick={toggleLanguage}>{t("CURRENT_LANGUAGE")}</button>
            </>
          }
        />
        <Route path="/home" element={<>Home</>} />
        <Route path="/about" element={<>About</>} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
