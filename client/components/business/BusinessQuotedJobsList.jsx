import React, { useEffect } from 'react'
import BusJobItem from './BusinessJobItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllJobs } from '../../actions/business'

function BusinessJobsList() {
  const jobListing = useSelector((state) => state.openJobs) 
  const dispatch = useDispatch()
  
  // const [inputs, setInputs] = useState({ userId })

  // const handleChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   setInputs((values) => ({ ...values, [name]: value }))
  // }
  
  // const [inputs, setInputs] = useState({ userId })

  // const handleChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   setInputs((values) => ({ ...values, [name]: value }))
  // }

  useEffect(() => {
    dispatch(fetchAllJobs())
  }, [])

  return (
    <div>
      <select name="category" id="category" required>
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="in_progress">In Progress</option>
        <option value="complete">Complete</option>
      </select>

      <h1>Job Listings</h1>
      <section>
        {jobListing?.map((jobListing) => {
          console.log(jobListing)
          return <BusJobItem key={jobListing.id} jobListing={jobListing} />
        })}
      </section>
    </div>
  )
}

export default BusinessJobsList
