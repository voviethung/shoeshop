import React, { Children } from 'react'

const AdminTemple = ({children}) => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '25%', minHeight: '100vh', background: '' }}> Logo
                </div>
                <div style={{ width: '75%', minHeight: '100vh', background: '' }}>
                    {children}
                </div>
            </div>


        </div>
    )
}

export default AdminTemple