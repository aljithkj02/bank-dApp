import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import './App.css'

function App() {

  const [ state, setState ] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState("Not Connected");

  useEffect(() => {
    // template();
  }, [])
  
  const template = async () => {
    const contractAddress = "";
    const contractABI = "";

    try {
      const {ethereum} = window;
      
      const accountData = await ethereum.request({
        method: 'eth_requestAccounts'
      })

      setAccount(accountData);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )

      setState({ provider, signer, contract });

    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <>
      <h1>Block Chain</h1>
    </>
  )
}

export default App
