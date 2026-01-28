import { Navbar } from "@/src/components/navbar"
import { Sidebar } from "@/src/components/sidebar/sidebar"
import React from "react"

const UserLayout = ({children}:React.PropsWithChildren) =>{
return(
      <div className="min-h-screen bg-[#FBFDFD]">
            <Navbar/>
            <div className="flex mt-1 h-[calc(100vh-68px)] ">
                <Sidebar/>
                {children}
            </div>
            </div>

)
}
export default UserLayout;