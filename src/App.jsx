import { HeaderComponent } from "./components/HeaderComponent.jsx";
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import { AddThoughtPage } from "./pages/AddPage.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { FooterComponent } from "./components/FooterComponent.jsx";


export default function App() {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section> 
        <Routes>
          <Route path= "/" element = { <AddThoughtPage></AddThoughtPage> }> </Route>
          <Route path= "/search" element = { <SearchPage></SearchPage> }> </Route>
          <Route path="/*" element = { <Navigate to = "/"></Navigate>}> </Route>
        </Routes>
      </section>
      <FooterComponent></FooterComponent>
    </>
  )
}

