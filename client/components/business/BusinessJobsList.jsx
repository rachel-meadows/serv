import React, { useEffect } from 'react'
// import BusJobItem from './BusJobItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOpenJobs } from '../../actions/business'

function BusinessJobsList({ children }) {
  const jobListings = useSelector((state) => state.openJobs)
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
    dispatch(fetchOpenJobs())
  }, [])

  return (
    <div>
      <select name="category" id="category" required>
        <option value="">Select Category</option>
        <option value="plumbing">Plumbing</option>
        <option value="gardening">Gardening</option>
        <option value="building">Building</option>
      </select>

      <h1>Open Job Listings</h1>
      <section>
        {children} {/* This holds the WaitIndicator (from App) */}
        {jobListings?.map((jobListing) => {
          return jobListing.description
          // return <BusJobItem key={jobListing.id} jobListing={jobListing} />
        })}
      </section>
    </div>
  )
}

export default BusinessJobsList
