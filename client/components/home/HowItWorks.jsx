import React from 'react'
import { Link } from 'react-router-dom'

function HowItWorks() {
  return (
    <div className="how-it-works-page">
      <h2>How it works page</h2>

      <div className="hero">
        <p className="tagline">
          Have you ever read a webpage or document that used this text without
          paying much attention to it? The lorem ipsum is a placeholder text
          used in publishing and graphic design. This filler text is a short
          paragraph that contains all the letters of the alphabet. The
          characters are spread out evenly so that the readers attention is
          focused on the layout of the text instead of its content. Many
          software programs and applications have made it their default dummy
          text. Since the lorem ipsum is always used as a placeholder text, its
          use indicates that this is not a final version of a document, thus
          helping to avoid unnecessary printing.
        </p>
        <button>
          <Link to="/">Home</Link>
        </button>
        {/* </button><button className="back-btn">Back</button> */}
      </div>
    </div>
  )
}

export default HowItWorks
