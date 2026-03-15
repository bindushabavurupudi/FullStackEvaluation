import { useEffect, useState } from "react"
import axios from "axios"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Dashboard() {
    const navigate = useNavigate()

    const [balance, setBalance] = useState(0)

    useEffect(() => {

        const fetchBalance = async () => {

            const res = await axios.get(
                "http://localhost:5000/api/account/balance",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )

            setBalance(res.data.balance)
        }

        fetchBalance()

    }, [])

    const goToSendMoney = () => {
        navigate("/send")
    }

    const goToStatement = () => {
        navigate("/statement")
    }

    return (

        <div style={{ textAlign: "center" }}>

            <h1>Dashboard</h1>

            <h2>Current Balance: ₹{balance}</h2>

            <br />

            <button onClick={goToSendMoney}>
                Send Money
            </button>

            <br /><br />

            <button onClick={goToStatement}>
                Account Statement
            </button>

        </div>
    )
}

export default Dashboard