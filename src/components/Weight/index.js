import {useState,useEffect} from 'react'
import './index.css'

const getBmi = (height, weight) => {
    const heightInMeters = height / 100
    const bmi = weight / heightInMeters ** 2
    return bmi.toFixed(2)
  }

const Weight = () => {

    const storedHeight = JSON.parse(localStorage.getItem('height')) 
    const storedWeight = JSON.parse(localStorage.getItem('weight'))
    const [height,setheight] = useState(storedHeight !== null ? storedHeight : 170) 
    const [weight,setweight] = useState(storedWeight !== null ? storedWeight : 60)

    

    useEffect(() => {
        document.title = `Your BMI: ${getBmi(weight, height)}`
        localStorage.setItem('height', JSON.stringify(height))
        localStorage.setItem('weight', JSON.stringify(weight))
    })

    const heightAdd = () => {
        setheight(prevheight => prevheight +1 )
    }
    const heightMinus = () => {
        setheight (prevheight => prevheight - 1)
    }

    const weightAdd = () => {
        setweight(prevweight => prevweight+1)
    }

    const weightMinus = () => {
        setweight(prevweight => prevweight - 1)
    }


    return (
        <div className='container'>
            <h1 className='heading'>BMI CALCULATOR</h1>
            <img src= 'https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png' alt='bmi levels' className='img'/>
            <div className='height-container'>
                <div className='sub-container'>
                <p>Height</p>
                <p>{height}</p>
                <button type= 'button' className='butt' onClick={heightAdd}>+</button>
                <button type= 'button'className='butt' onClick={heightMinus}>-</button>
                </div>
                </div>


             <div className='height-container'>
             <div className='sub-container'>
                <p>Weight</p>
                <p>{weight}</p>
                <button type= 'button' className='butt' onClick={weightAdd}>+</button>
                <button type= 'button'className='butt' onClick={weightMinus}>-</button>
                </div>
            </div>

            <div>
                BMI : <p className='para'>{getBmi(height,weight)}</p>
            </div>
            
            
        </div>
    )

}

export default Weight