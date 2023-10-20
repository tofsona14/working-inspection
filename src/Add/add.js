// import React, {useState} from 'react'
// import './add.css'
// import Photo from './png/choosePhoto.jpg'
// import Arrow from './png/leftArrow.png'



// const Add = () => {
//     const [question,setQuestion] = useState(["მიუთითეთ სტატუსი",'აქვთ თუ არა მშენებლობაზე მუშებს სპეციალური აღჭურვილობა'])
//     const answers = [
//     [
//     {id:1, option: "არაინსპექტირებული",},
//     {id:2, option: "ინსპექტირებული",}
//     ],
//     [
//     {id:3, option: "კი",},
//     {id:4, option: "არა",}
//     ]
// ]
//     const [checkboxes,setCheckboxes] = useState(null)
//     const handleCheckboxes = (value) => {
//         setCheckboxes(value)
//     }
//     return(
//     <div>
//         <div className='add--back--arrow'>
//                 <img src={Arrow}/>
//             </div>
//         <div className='add--Main'>
//             <img className='add--Main--Img' src={Photo}></img>
            
//             <div className='add--Main--firsts'>
//             {question.map((i, e) => (
//                 <div className='add--Main--first'>
//                     <label className='add--Main---first--label' htmlFor='add--first'> <p>{e+1}.{i}</p> </label>
//                     <div className='dropdown'>
//                         <div>
//                             {answers.map((o, s)=> (
//                                 console.log(o)
//                             // <div className='dropdown--option--1'>
//                             //     {answers[e][s].option ? <input type='checkbox' className='checkbox1' onChange={handleCheckboxes}></input> : console.log("") }

//                             //     <p>{answers[e][s].option}</p>
//                             // </div>

//                             ))}
                            
//                         </div>
//                     </div>
                
//                 </div>

//             ))}

//             </div>
//         </div>
//     </div>
//     )
// }

// export default Add



import React, {useState} from 'react'
import './add.css'
import Photo from './png/choosePhoto.jpg'
import Arrow from './png/leftArrow.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Add = () => {
    const quest = useSelector((prev) => {
        return prev.questions
    })
    const answers = useSelector((prev) => {
        return prev.answers
    })
    
    const [answer, setAnswer] = useState(answers)
    const [takeinfo, setTakeinfo] = useState(['', '', ''])
    const [checkboxes,setCheckboxes] = useState(['', '', ''])
    const handleCheckboxes = (e, s) => {
        setCheckboxes((prev) => {
            const a = [...checkboxes]
            a[e] = s
            return a
        })
        setTakeinfo((prev) => {
            const b = [...takeinfo]
            b[e] = answers[e][s]  
            return b      })

        }
            console.log(takeinfo)
    return(
    <div>
        <div className='add--back--arrow'>
               <Link to="/base"> <img src={Arrow}/> </Link>
            </div>
            <div className='add--save--abort'>
                <div className='add--save--abort--buttons'>
                    <Link to="/base"className='save--change'>
                    <button className='add--save--abort--button1'>შენახვა</button>
                    
                    </Link>
                    <Link to="/base"className='save--change'>
                        <button className='add--save--abort--button1'>გაუქმება</button>
                    </Link>

                </div>
            </div>
        <div className='add--Main'>
            <img className='add--Main--Img' src={Photo}></img>
            
            <div className='add--Main--firsts'>
            {quest.map((i, e) => (
                <div className='add--Main--first'>
                    <label className='add--Main---first--label' > <p>{e+1}.{i}</p> </label>
                    <div className='dropdown'>
                        <div>
                            {answer.map((o, s)=> (
                            <div className='dropdown--option--1'>
                                {answer[e][s] ? <input
                                value={answer[e][s]}
                                
                                onChange={() => handleCheckboxes(e,s)} checked={checkboxes[e] === s} type='checkbox' className='checkbox1' ></input> :console.log('s') }

                                <p>{answer[e][s]}</p>
                            </div>

                            ))}
                            
                        </div>
                    </div>
                
                </div>

            ))}

            </div>
        </div>
    </div>
    )
}

export default Add