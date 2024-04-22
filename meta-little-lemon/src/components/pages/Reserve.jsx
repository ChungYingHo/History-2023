import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';
import { useState } from 'react'

export default function Reserve(){
    // the state and function for storage and change the input value
    const [info, setInfo] = useState({
      date: '',
      time: '17:00',
      guests: '1',
      occasion: 'Birthday'
    })

    const handleChange = (e)=>{
      const {name, value} = e.target
      setInfo((prevInfo) => ({ ...prevInfo, [name]: value }))
    }

    const handleSubmit = ()=>{
        alert(`Date:${info.date}\nTime:${info.time}\nGuests:${info.guests}\nOccasion${info.occasion}`)
    }

    return(
        <>
            <Header/>
            <Form onChange={handleChange} onClick={handleSubmit}/>
            <Footer/>
        </>
    )
}