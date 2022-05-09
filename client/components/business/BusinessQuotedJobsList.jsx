import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BusinessQuoteItem from './BusinessQuoteItem'
import { APIgetJobById } from '../../apis/business'

function BusinessQuotedJobsList() {
  const [job, setJob] = useState({})
  const { jobId } = useParams()
  useEffect(() => {
    APIgetJobById(jobId).then((job) => {
      setJob(job)
    })
  }, [])

  const userData = useSelector((state) => state.userData)
  const { userId, category } = userData

  const [jobs, setJobs] = useState([])
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')
  const [jobsQuotedOn, setJobsQuotedOn] = useState([])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    APIgetJobsByUser(userId).then((quotedJobs) => {
      setJobsQuotedOn(quotedJobs)
    })
  }, [])

  useEffect(() => {
    // if (dropDownSelection === 'unmatched') {
    //   const unmatchedJobs = allJobs.filter((obj) => obj.status === 'open')
    //   setJobs(unmatchedJobs)
    // }
    if (dropDownSelection === 'active') {
      setJobs(allJobs.filter((obj) => obj.status === 'in progress'))
    } else if (dropDownSelection === 'completed') {
      setJobs(allJobs.filter((obj) => obj.status === 'closed'))
    } else if (dropDownSelection === 'all') {
      setJobs(allJobs)
    }
  }, [allJobs, dropDownSelection])

  function showDetails(jobsId, status) {
    if (status === 'open') {
      navigate(`/business/open/${jobsId}`)
    } else if (status === 'in progress') {
      navigate(`/business/active/${jobsId}`)
    } else if (status === 'closed') {
      navigate(`/business/completed/${jobsId}`)
    }
  }

  function handleDropDown(event) {
    setdropDownSelection(event.target.value)
  }

  return (
    <>
      <div className="quote-submitted flex flex-col flex-align-center">
        <h2>Your quote has been submitted</h2>
        <p>Your quote has been successfully passed on to your customer.</p>
        <p>You'll get a message soon if they accept the quote.</p>
      </div>
      <form>
        <label htmlFor="filter">Filter your jobs:</label>
        <select
          name="status"
          id="status"
          defaultValue={'quoted'}
          required
          onChange={handleDropDown}
        >
          <option value="unmatched">Unmatched</option>
          <option value="quoted">Quoted</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </form>
      <h1>Job Listings</h1>
      <section>
        {jobs?.map((job) => {
          console.log(job)
          return (
            <BusinessQuoteItem
              key={job.id}
              jobListing={job}
              showDetails={showDetails}
            />
          )
        })}
      </section>
    </>
  )
}

export default BusinessJobsList
