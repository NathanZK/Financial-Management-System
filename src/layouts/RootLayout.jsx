import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";


export default function RootLayout() {
  return (<div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        </div>
  )
}