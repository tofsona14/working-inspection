import React from 'react'
import './Choose.css'
import photo from './Png/choosePhoto.jpg'
import { Link } from 'react-router-dom'

const Choose = () => {
    return(
        <div>

            
            <div className='choose--main--first'><img src={photo}></img></div>
            <div className='Choose--main'>
                <div className='choose--main--second'>
                    <div className='choose--second--first'>
                        <Link to='/base'>
                            <button>მონაცემთა ბაზა</button>
                        </Link>
                    </div>
                    <div className='choose--second--third'>
                        <Link to="/add">
                        <button> ახალის დამატება </button>
                        </Link>
                    </div>
                    <div className='choose--second--second'>
                        <Link to="/change">
                        <button> არსებულის რედაქტირება</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose ;