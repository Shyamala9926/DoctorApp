import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Appointment() {

  const  {docID} = useParams()
  const {doctors}= useContext(AppContext) 

  const [docInfo, setDocInfo]= userState(null)

  const fetchDocInfo = async()=>{
    const docInfo = doctors.find(doc=> doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docID])
  return docInfo && (
    <div>
      {/*----- Doctor Details -----*/}
      <div>
        <div>
          <img src={docInfo.image} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Appointment