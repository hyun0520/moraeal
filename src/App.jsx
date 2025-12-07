import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Details from "./components/sections/Details";
import BookList from "./pages/BookList";
import ScrollToTop from "./components/sections/ScrollToTop";

function App() {
  return (
    <>
      {/* ✅ Router는 main.jsx에 있으므로 여기서는 쓰면 안됨 */}
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainPage />
            </Layout>
          }
        />

        <Route
          path="/books"
          element={
            <Layout>
              <Details />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />

        <Route
          path="/booklist"
          element={
            <Layout>
              <BookList />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
    </>
  );
}

export default App;
