import { useState } from "react"
import axios from "axios"
function SendMoney() {
    const [receiverEmail, setReceiverEmail] = useState("")
    const [amount, setAmount] = useState("")
    const handleTransfer = async () => {
        try {
            await axios.post(
                "http://localhost:5000/api/account/transfer",
                { receiverEmail, amount },
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
    return (
        <div>
            <h2>Send Money</h2>
            <input placeholder="Receiver Email" onChange={(e) => setReceiverEmail(e.target.value)} />
            <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleTransfer}> Send </button>
        </div>
    )
}

export default SendMoney