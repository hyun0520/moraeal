import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Details from "./components/sections/Details";
import BookList from "./pages/BookList";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />

      {/* 책 목록 */}
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
      {/* ✅ BookList (Header/Footer 자동 포함) */}
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
  );
}

export default App;
