import { useEffect, useState } from "react"
import axios from "axios"

function Dashboard() {

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

  return (
    <div>

      <h2>Dashboard</h2>

      <h3>Current Balance: ₹{balance}</h3>

    </div>
  )
}

export default Dashboard