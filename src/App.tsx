import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";
import { AppRouter } from "./App.router";

const App = () => {
  const { i18n } = useTranslation();

  /** This useEffect rerenders dir */
  useEffect(() => {}, [i18n.language]);

  return <AppRouter />;
};

export { App };
