import React, { useState } from "react";
import CreateShift from "./CreateShift";
import "../App.css";

function ShiftsTable({ shifts, userId, userName }) {
  // const timeStamp = Date.parse(shifts[0].start)
  // const date = new Date(timeStamp)
  // const year = date.getFullYear()
  // const month = date.getMonth()
  // const day = date.getDate()

  // console.log(date.toLocaleTimeString())

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Shift Date</th>
            <th>Start Time</th>
            <th>Finish Time</th>
            <th>Break Length</th>
            <th>hours worked</th>
            <th>shift cost</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift) => (
            <tr key={shift.id}>
              <td>{shift.employee_name}</td>
              <td>{`${new Date(Date.parse(shift.start)).toDateString()}`}</td>
              <td>{`${new Date(
                Date.parse(shift.start)
              ).toLocaleTimeString()}`}</td>
              <td>{`${new Date(
                Date.parse(shift.finish)
              ).toLocaleTimeString()}`}</td>
              <td>{shift.break}</td>
              <td>{shift.hours_worked}</td>
              <td>${shift.shift_cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CreateShift userId={userId} userName={userName} />
    </div>
  );
}

export default ShiftsTable;
