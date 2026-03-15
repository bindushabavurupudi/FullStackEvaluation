import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function SendMoney() {
    const navigate = useNavigate()

    const [receiverEmail, setReceiverEmail] = useState("")
    const [amount, setAmount] = useState("")
    const handleTransfer = async () => {
        try {
            await axios.post(
                "http://localhost:5000/api/account/transfer",
                { receiverEmail, amount: Number(amount) },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            alert("Money Sent Successfully")
        } catch (error) {
            alert("Transfer failed")
        }
    }
    const goDashboard = () => {
        navigate("/dashboard")
    }
    const goToStatement = () => {
        navigate("/statement")
    }
    return (
        <div>
            <h2>Send Money</h2>
            <input placeholder="Receiver Email" onChange={(e) => setReceiverEmail(e.target.value)} />
            <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleTransfer}> Send </button>

            <br />
            <br />
            <button onClick={goDashboard}>
                Go to Dashboard
            </button>
            <br />
            <br />
            <button onClick={goToStatement}>
                Account Statement
            </button>
        </div>
    )
}

export default SendMoney