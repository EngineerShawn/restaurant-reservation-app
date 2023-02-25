import React from "react";
import { Link } from "react-router-dom";
import { today, previous, next } from "../utils/date-time";
import "./DateNav.css";
/**
 * DateNavigation allows the user to change the active date for the Dashboard.
 */

function DateNavigation({ date }) {
  return (
    <>
      <h5 className="text-center mt-3 text-monospace">Date Navigation</h5>
      <nav
        className="nav mb-1 bg-light w-75 mx-auto justify-content-center text-center"
        aria-label="Change date"
      >
        <div className= "d-flex justify-content-center ">
        <Link
          className="nav-link border border-left border-secondary bg-white rounded" id="previousButton"
          to={`/dashboard?date=${previous(date)}`}
          aria-label="Previous"
        >
          <span aria-hidden="true" className="font-size-12 font-weight-bold" >
            &laquo;{" "}
          </span>
          <span> &nbsp;Prev</span>
        </Link>
        <Link
          className="nav-link border border-top border-primary mx-3 px-2 bg-white rounded" id="todayButton"
          to={`/dashboard?date=${today()}`}
          aria-label="Today"
        >
          <span>Today</span>
        </Link>
        <Link
          className="nav-link border border-secondary bg-white rounded" id="nextButton"
          to={`/dashboard?date=${next(date)}`}
          aria-label="Next"
        >
          <span>Next&nbsp; </span>
          <span aria-hidden="true" className="font-weight-bold">
            {" "}
            &raquo;
          </span>
        </Link>
        </div>
      </nav>
    </>
  );
}

export default DateNavigation;
