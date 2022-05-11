import React from 'react'

function IndividualQuote(props) {
  return (
    <div className="container mt-3">
      <h2 className="text-success mb-3">Quote</h2>
      <div className="card my-2 p-4 col-xl-6">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Description</th>
              <td className="text">{props.description}</td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td className="text">${props.price}.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default IndividualQuote
