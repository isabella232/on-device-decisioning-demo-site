/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React, { Component } from 'react'
/**
 * Create Footer Component
 */
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <p>
              Transactions on this site are not real. <br></br>
              Forked from <a href="https://github.com/david-babunashvili/React-Redux-Ecommerce">GitHub</a><br></br>
              Report bugs and feedback to Bennet Roy @ Adobe Customer Solutions
            </p>
          </div>
      </footer>
    )
  }
}
export default Footer
