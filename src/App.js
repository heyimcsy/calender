import React, { useState } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment/moment'
import '../src/itCalender.css'

function App() {
  const [value, onChange] = useState(new Date())
  console.log('onChange', Calendar)
  const marks = ['15-04-2023', '20-04-2023']
  return (
    <div>
      캘린더 연습
      <Calendar onChange={onChange} value={value} />
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-EN"
        tileClassName={({ date, view }) => {
          if (marks.find((x) => x === moment(date).format('DD-MM-YYYY'))) {
            return 'highlight'
          }
        }}
      />
    </div>
  )
}

export default App
