import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
            showContent,
            showLeftNavbar,
            showRightNavbar,
          } = value

          return (
            <div className="c-bg">
              <h1 className="heading">Layout</h1>
              <div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="content"
                    onChange={onToggleShowContent}
                    checked={showContent}
                  />
                  <label htmlFor="content">Content</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="l-nav"
                    onChange={onToggleShowLeftNavbar}
                    checked={showLeftNavbar}
                  />
                  <label htmlFor="l-nav">Left Navbar</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="r-nav"
                    onChange={onToggleShowRightNavbar}
                    checked={showRightNavbar}
                  />
                  <label htmlFor="r-nav">Right Navbar</label>
                </div>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
