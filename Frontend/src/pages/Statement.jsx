import { useEffect, useState } from "react"
import axios from "axios"

function Statement() {
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
        </div>
    )
}

export default Statement