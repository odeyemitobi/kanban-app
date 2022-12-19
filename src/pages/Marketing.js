import React from 'react'
import Layout from '../components/Layout/Layout'

function Marketing() {
  return (
    <Layout>
       <div className="flex gap-6">
        <div className="flex items-center gap-3 p-10">
          <div className="rounded-full h-4 w-4 bg-[#49c4e5]"></div>
          <h2 className="text-[#828fa3] text-[.75rem] font-[700] pt-1.5">TODO ( 3 )</h2>
        </div>
        <div className="flex items-center gap-3 p-10">
          <div className="rounded-full h-4 w-4 bg-[#8471f2]"></div>
          <h2 className="text-[#828fa3] text-[.75rem] font-[700] pt-1.5">DOING ( 0 )</h2>
        </div>
        <div className="flex items-center gap-3 p-10">
          <div className="rounded-full h-4 w-4 bg-[#67e2ae]"></div>
          <h2 className="text-[#828fa3] text-[.75rem] font-[700] pt-1.5">DONE ( 0 )</h2>
        </div>
      </div>  
    </Layout>
  )
}

export default Marketing