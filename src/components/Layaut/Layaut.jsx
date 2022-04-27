import { Outlet } from "react-router-dom"
import Sidebar from "./../Sidebar/Sidebar"
import "./layaut.scss"

const Layaut = () => (
  <div className="page">
    <Sidebar />
    <section className="container">
      <Outlet />
    </section>
  </div>
)

export default Layaut
