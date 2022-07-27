import React from 'react'
import AdminHeader from '../Header/admin'
import SideBar from '../Header/sidebar'

type LayoutProps = {
    children: React.ReactNode
}

const AdminLayout = ({children}: LayoutProps) => {
  return (
    <div className='grid grid-cols-[200px,auto]'>
        <div>
            <SideBar/>
        </div>
        <div>
            <div>
                <AdminHeader/>
            </div>
            <main>{children}</main>
        </div>
    </div>
  )
}

export default AdminLayout