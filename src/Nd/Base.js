import React, {useState} from 'react'
import Left from './png/leftArrow.png'
import { Link } from 'react-router-dom'
import './base.css'
import photo from './png/choosePhoto.jpg'
import { useSelector } from 'react-redux'

 const Base = () => {
    const company = useSelector((prev) => {
        return prev.company
    })
    const [data, setData] = useState(company)
    const [seconddata,setSeconddata] = useState(['ინსპექტირებული', 'არაინსპექტირებული', ])
    const [input,setInput] = useState("")
    const inputChanger = (event) => {
        setInput(event.target.value)
    }
    return(
        <div className='img'>
            <img className='sss' src={photo}></img>
            <div>
                <div className='base--Main--LeftArrow'>
                        <Link to="/"> <img src={Left}></img> </Link>
                    </div>
                <div className='base--Main'>
                    <div className='base--Main--Default'>
                        <div className='base--Main--Default--N'><p>N</p></div>
                        <div className='base--Main--Default--Description'><p>დასახელება</p></div>
                        <div className='base--Main--Default--Status'><p>სტატუსი</p></div>
                    </div>
                    {data.map((i, e) => (
                        <div className='base--Map' key={e}>
                                <div className='base--Map--Number'>
                                    <p>{e+1}</p>
                                </div>
                                <div className='base--Map--Name'>
                                    <p>{i}</p>
                                </div>
                                <div className={(seconddata[e] == 'ინსპექტირებული') ? 'base--Map--Condition--success' : "base--Map--Condition--foul"}>
                                    <p>{seconddata[e]}</p>
                                </div>
                            </div>
                        
                    ))}
                    <div className='input--Main'>
                        <button className='search--Button'>ძებნა</button>
                        <input
                        className='Search'
                        type='text'
                        id='textInput'
                        value={input}
                        onChange={inputChanger}
                        ></input>
                    </div>
                    <div className='add-Change-Button'>
                        <Link to='/add'><button className='add--Button'> ახალის დამატება</button></Link>
                        <button className='change-Button'>არსებულის რედაქტირება</button>
                    </div>

                </div>
            </div>
        </div>
    )
 }

 export default Base;