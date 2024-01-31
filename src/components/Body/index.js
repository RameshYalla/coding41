import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="body">
              {showLeftNavbar && (
                <div className="l-nav">
                  <h2>Left Navbar Menu</h2>
                  <ul className="ul">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              )}

              {showContent && (
                <div className="content">
                  <h2>Content</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incidiunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              )}

              {showRightNavbar && (
                <div className="l-nav">
                  <h2>Right Navbar</h2>
                  <ul className="ul">
                    <li>
                      <div className="ad">Ad 1</div>
                    </li>
                    <li>
                      <div className="ad">Ad 2</div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
