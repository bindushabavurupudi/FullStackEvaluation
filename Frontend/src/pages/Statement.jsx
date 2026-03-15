import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Statement() {
    const navigate = useNavigate()

    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        const fetchTransactions = async () => {
            const res = await axios.get(
                "http://localhost:5000/api/account/statement",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            setTransactions(res.data)
        }
        fetchTransactions()
    }, [])
    const goToSendMoney = () => {
        navigate("/send")
    }
    const goDashboard = () => {
        navigate("/dashboard")
    }

    return (
        <div>
            <h2>Account Statement</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id}>
                            <td>{new Date(t.created_at).toLocaleDateString()}</td>
                            <td style={{ color: t.transaction_type === "credit" ? "green" : "red" }}>
                                {t.transaction_type}
                            </td>
                            <td>₹{t.amount}</td>
                        </tr>

                    ))}
                </tbody>
            </table>

            <br />

            <button onClick={goToSendMoney}>
                Send Money
            </button>
            <br />
            <br />
            <button onClick={goDashboard}>
                Go to Dashboard
            </button>

            <br /><br />
        </div>
    )
}

export default Statement