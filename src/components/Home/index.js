import Header from '../Header'

import './index.css'

// Write your JS code here

const Home = () => (
  <>
    <Header />
    <div className="h">
      <div className="home-container">
        <div className="div1">
          <h1 className="heading">Clothes That Get YOU Noticed</h1>
          <p>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time.Clothes have always been a marker of the era
            and we are in a revolution.Your fashion makes you been seen and
            heard that way you are.So,celebrate the seasons new and exciting
            fashion in your own way
          </p>
          <button type="button" className="shop-btn">
            Shop Now
          </button>
        </div>
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="img"
          />
        </div>
      </div>
    </div>
  </>
)

export default Home
