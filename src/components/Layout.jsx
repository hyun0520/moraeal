// src/components/Layout.jsx
import Header from "../components/sections/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
