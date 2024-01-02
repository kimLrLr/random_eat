import { Header } from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Sub } from "./pages/sub/Sub";
import { Result } from "./pages/result/Result";
import { PageNotFound } from "./pages/PageNotFound";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
