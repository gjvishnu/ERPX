import { Outlet } from "@remix-run/react";
import Header from "~/components/header";
import Home from "~/components/home";

export default function Service(){
    return(
        <>
        <div className="flex"> 
<Home/>
<div style={{width:'100%'}}>
<Header data={"Services"}/>
<div className="mainIndex">
   <Outlet/>
 </div>
</div>

</div>
        </>
    )
}