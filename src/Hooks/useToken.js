import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if(email) {
            fetch(`https://test.nexisltd.com/login?email=${ email }`)
            .then(res => res.json())
            .then(data => {
                if(data.accessToken){
                    localStorage.setItem('timeWatchAccessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
        }
    }, [email])
    return [token]
}

export default useToken