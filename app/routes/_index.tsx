import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Header from "~/components/header";
import Home from "~/components/home";
import pageCOn from '/underconstPage.jpg'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <div className="flex"> 
<Home/>
<div style={{width:'100%'}}>
<Header data={"Employee management"}/>
<div className="mainIndex flex justify-center items-center">
  <img src={pageCOn} style={{width:"600px"}}/>
</div>
</div>

</div>
    </>
   );
}
