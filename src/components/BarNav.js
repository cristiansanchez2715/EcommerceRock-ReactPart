import { useState } from 'react'
import React from 'react'


function BarNav({setVisibilityCarBuy ,visibilityCarBuy, carBuy ,setVisibilityWomens, setVisibilityMens, setVisibilityBarNavMens, setVisibilityBarNavWomens}) {


    const challangeVisibilityCarBuy = () => {
    setVisibilityCarBuy(true)
}


    const challangeMenFunction = () => {
    setVisibilityBarNavMens(true)
    setVisibilityMens(true)
    setVisibilityBarNavWomens(false)
    setVisibilityWomens(false)
}

const challangeWomenFunction = () => {
    setVisibilityBarNavMens(false)
    setVisibilityMens(false)
    setVisibilityBarNavWomens(true)
    setVisibilityWomens(true)
}



    return (
    <nav className='central-barnav'>
<button>Home</button>
<button>Help</button>
<button onClick={() => challangeVisibilityCarBuy()}>CarBuy</button>
<button onClick={challangeMenFunction}>Men</button>
<button onClick={challangeWomenFunction}>Women</button>

    </nav>
    
  )
}

export default BarNav