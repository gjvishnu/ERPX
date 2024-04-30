import Header from "~/components/header";
import Home from "~/components/home";

export default function Service(){
    return(
        <>
   <div className="mainIndexBG p-4">

    {/* new save & delete buttons and attachemt part */}
    <div className="bg-white py-2 px-2 rounded-sm flex items-center justify-between"> 
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 colorP">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>
</div>
    <div>
        <button className="serCaseBtn px-5 rounded-sm" >New</button>
        <button className="mx-4 serCaseBtn px-5 rounded-sm">Save</button>
        <button className="serCaseBtn px-5 rounded-sm">Delete</button>
    </div>
    </div>
    {/*END new save & delete buttons and attachemt part END*/}

    <div className="bg-white py-2 px-2 rounded-sm mt-3 flex items-center justify-between">
      <div><h5 className="colorP">Case</h5></div>
      <div className="flex"> <h5 className="colorP">My View</h5> <h5 className="colorP mx-5">User 1</h5> <h5 className="colorP">User 2</h5> </div>
      <div className="flex">
        <div className="flex items-center"> <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 colorP">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
</svg>
</div>
        <h6 className="colorP mx-1">Customise</h6>
        </div>
        <div className="flex items-center mx-3"> <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 colorP">
  <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
</svg>
</div> 
        <h6 className="colorP x-1">Filter</h6>
        </div>
        <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 colorP">
  <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
</div>
<div className="flex items-center mx-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 colorP">
  <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
</svg>
</div>
      </div>
    </div>
{/* table starts  here */}
<div className="mt-5">
<table>
  <thead>
    <tr>
      <th>Case Number</th>
      <th>Case Subject</th>
      <th>Case Type</th>
      <th>Customer ID</th>
      <th>Case Format</th>
      <th>Case Priority</th>
      <th>Due Date</th>
      <th>Assigned To</th>
      <th>Case Source</th>
      <th>Created On</th>
      <th>Case Stages</th>
      <th>Department</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-center">01</td>
      <td className="text-center">Laptop Service</td>
      <td className="text-center">Internal</td>
      <td className="text-center">11901253</td>
      <td className="text-center">Problem</td>
      <td className="text-center text-red-500">High</td>
      <td className="text-center">24/7/2024</td>
      <td className="text-center">XXX</td>
      <td className="text-center">Email</td>
      <td className="text-center">25/8/2024</td>
      <td className="text-center text-green-500">Open</td>
      <td className="text-center">IT</td>
    </tr>
    <tr>
      <td className="text-center">02</td>
      <td className="text-center">Laptop Service</td>
      <td className="text-center">Internal</td>
      <td className="text-center">11901253</td>
      <td className="text-center">Problem</td>
      <td className="text-center text-red-500">High</td>
      <td className="text-center">24/7/2024</td>
      <td className="text-center">XXX</td>
      <td className="text-center">Email</td>
      <td className="text-center">25/8/2024</td>
      <td className="text-center text-green-500">Open</td>
      <td className="text-center">IT</td>
    </tr>
  </tbody>
</table>
</div>

   </div>
        </>
    )
}