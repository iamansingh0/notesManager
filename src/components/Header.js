import React from 'react'

function Header() {
  return (
    <div>
      <div className='container' style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
        <div className='row' >
            <div className='col-sm' style={{display: "flex", justifyContent: "space-around", height: "10vh", alignItems: "center"}}>
                <h2>Notes Manager</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
