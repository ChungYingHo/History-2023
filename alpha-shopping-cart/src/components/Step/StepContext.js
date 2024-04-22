import { createContext, useState } from 'react'

const StepContext = createContext()

export function StepProvider({children}){
    const [info, setInfo] = useState({
        cardName: '',
        cardNumber: '',
        dates: '',
        ccc: ''
    })

    return(
        <StepContext.Provider value={{ info, setInfo }}>
            {children}
        </StepContext.Provider>
    )
}

export default StepContext