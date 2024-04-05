import React from 'react'

function AvailabilityTable() {
    // Mock data
    const appointments = {
        5: ['06:00', '06:45', '07:35', '08:20', '09:10', '09:55', '10:45', '11:30', '12:20', '13:05', '13:55', '14:40', '15:30', '16:15', '17:05', '17:50', '18:40', '19:25', '20:15', '21:00', '21:50', '22:35', '23:25', '00:10'],
        6: ['06:00', '06:45', '08:20', '09:10', '09:55', '10:45', '11:30', '12:20', '13:05', '13:55', '14:40', '15:30', '16:15', '17:05', '17:50', '18:40', '19:25', '20:15', '21:00', '21:50', '22:35', '23:25', '00:10'],
        8: ['06:00', '06:45', '12:20', '13:05', '13:55', '14:40', '15:30', '16:15', '17:05', '17:50', '18:40', '19:25', '20:15', '21:00', '21:50', '22:35', '23:25', '00:10'],
        9: [ '18:40', '19:25', '20:15', '21:00', '21:50', '22:35', '23:25', '00:10'],
        10: ['06:00', '06:45', '07:35', '08:20', '09:10', '09:55', '10:45', '11:30', '12:20', '13:05', '13:55', '14:40', '15:30', '16:15', '17:05', '17:50', '18:40', '19:25', '20:15', '21:00', '21:50', '22:35', '23:25', '00:10'],
        11: ['06:00', '06:45', '07:35', '08:20', '09:10', '09:55', '10:45', '11:30', '12:20', '13:05', '13:55', '14:40', '19:25', '20:15', '21:00', '21:50', '22:35', '23:25', '00:10'],
      }

    const checkAppointment = (dock, time) => {
        if (appointments[dock].includes(time)) {
          return 'booked';
        }
        return 'available';
    }
    
  return (
    <div className="timeTable">
        <table>
          <thead>
            <tr>
              <th>Dock</th>
              <th>06:00</th>
              <th>06:45</th>
              <th>07:35</th>
              <th>08:20</th>
              <th>09:10</th>
              <th>09:55</th>
              <th>10:45</th>
              <th>11:30</th>
              <th>12:20</th>
              <th>13:05</th>
              <th>13:55</th>
              <th>14:40</th>
              <th>15:30</th>
              <th>16:15</th>
              <th>17:05</th>
              <th>17:50</th>
              <th>18:40</th>
              <th>19:25</th>
              <th>20:15</th>
              <th>21:00</th>
              <th>21:50</th>
              <th>22:35</th>
              <th>23:25</th>
              <th>00:10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>5</th>
              <td>{checkAppointment(5, '06:00')}</td>
              <td>{checkAppointment(5, '06:45')}</td>
              <td>{checkAppointment(5, '07:35')}</td>
              <td>{checkAppointment(5, '08:20')}</td>
              <td>{checkAppointment(5, '09:10')}</td>
              <td>{checkAppointment(5, '09:55')}</td>
              <td>{checkAppointment(5, '10:45')}</td>
              <td>{checkAppointment(5, '11:30')}</td>
              <td>{checkAppointment(5, '12:20')}</td>
              <td>{checkAppointment(5, '13:05')}</td>
              <td>{checkAppointment(5, '13:55')}</td>
              <td>{checkAppointment(5, '14:40')}</td>
              <td>{checkAppointment(5, '15:30')}</td>
              <td>{checkAppointment(5, '16:15')}</td>
              <td>{checkAppointment(5, '17:05')}</td>
              <td>{checkAppointment(5, '17:50')}</td>
              <td>{checkAppointment(5, '18:40')}</td>
              <td>{checkAppointment(5, '19:25')}</td>
              <td>{checkAppointment(5, '20:15')}</td>
              <td>{checkAppointment(5, '21:00')}</td>
              <td>{checkAppointment(5, '21:50')}</td>
              <td>{checkAppointment(5, '22:35')}</td>
              <td>{checkAppointment(5, '23:25')}</td>
              <td>{checkAppointment(5, '00:10')}</td>
            </tr>
            <tr>
              <th>6</th>
              <td>{checkAppointment(6, '06:00')}</td>
              <td>{checkAppointment(6, '06:45')}</td>
              <td>{checkAppointment(6, '07:35')}</td>
              <td>{checkAppointment(6, '08:20')}</td>
              <td>{checkAppointment(6, '09:10')}</td>
              <td>{checkAppointment(6, '09:55')}</td>
              <td>{checkAppointment(6, '10:45')}</td>
              <td>{checkAppointment(6, '11:30')}</td>
              <td>{checkAppointment(6, '12:20')}</td>
              <td>{checkAppointment(6, '13:05')}</td>
              <td>{checkAppointment(6, '13:55')}</td>
              <td>{checkAppointment(6, '14:40')}</td>
              <td>{checkAppointment(6, '15:30')}</td>
              <td>{checkAppointment(6, '16:15')}</td>
              <td>{checkAppointment(6, '17:05')}</td>
              <td>{checkAppointment(6, '17:50')}</td>
              <td>{checkAppointment(6, '18:40')}</td>
              <td>{checkAppointment(6, '19:25')}</td>
              <td>{checkAppointment(6, '20:15')}</td>
              <td>{checkAppointment(6, '21:00')}</td>
              <td>{checkAppointment(6, '21:50')}</td>
              <td>{checkAppointment(6, '22:35')}</td>
              <td>{checkAppointment(6, '23:25')}</td>
              <td>{checkAppointment(6, '00:10')}</td>
            </tr>
            <tr>
              <th>8</th>
              <td>{checkAppointment(8, '06:00')}</td>
              <td>{checkAppointment(8, '06:45')}</td>
              <td>{checkAppointment(8, '07:35')}</td>
              <td>{checkAppointment(8, '08:20')}</td>
              <td>{checkAppointment(8, '09:10')}</td>
              <td>{checkAppointment(8, '09:55')}</td>
              <td>{checkAppointment(8, '10:45')}</td>
              <td>{checkAppointment(8, '11:30')}</td>
              <td>{checkAppointment(8, '12:20')}</td>
              <td>{checkAppointment(8, '13:05')}</td>
              <td>{checkAppointment(8, '13:55')}</td>
              <td>{checkAppointment(8, '14:40')}</td>
              <td>{checkAppointment(8, '15:30')}</td>
              <td>{checkAppointment(8, '16:15')}</td>
              <td>{checkAppointment(8, '17:05')}</td>
              <td>{checkAppointment(8, '17:50')}</td>
              <td>{checkAppointment(8, '18:40')}</td>
              <td>{checkAppointment(8, '19:25')}</td>
              <td>{checkAppointment(8, '20:15')}</td>
              <td>{checkAppointment(8, '21:00')}</td>
              <td>{checkAppointment(8, '21:50')}</td>
              <td>{checkAppointment(8, '22:35')}</td>
              <td>{checkAppointment(8, '23:25')}</td>
              <td>{checkAppointment(8, '00:10')}</td>
            </tr>
            <tr>
              <th>9</th>
              <td>{checkAppointment(9, '06:00')}</td>
              <td>{checkAppointment(9, '06:45')}</td>
              <td>{checkAppointment(9, '07:35')}</td>
              <td>{checkAppointment(9, '08:20')}</td>
              <td>{checkAppointment(9, '09:10')}</td>
              <td>{checkAppointment(9, '09:55')}</td>
              <td>{checkAppointment(9, '10:45')}</td>
              <td>{checkAppointment(9, '11:30')}</td>
              <td>{checkAppointment(9, '12:20')}</td>
              <td>{checkAppointment(9, '13:05')}</td>
              <td>{checkAppointment(9, '13:55')}</td>
              <td>{checkAppointment(9, '14:40')}</td>
              <td>{checkAppointment(9, '15:30')}</td>
              <td>{checkAppointment(9, '16:15')}</td>
              <td>{checkAppointment(9, '17:05')}</td>
              <td>{checkAppointment(9, '17:50')}</td>
              <td>{checkAppointment(9, '18:40')}</td>
              <td>{checkAppointment(9, '19:25')}</td>
              <td>{checkAppointment(9, '20:15')}</td>
              <td>{checkAppointment(9, '21:00')}</td>
              <td>{checkAppointment(9, '21:50')}</td>
              <td>{checkAppointment(9, '22:35')}</td>
              <td>{checkAppointment(9, '23:25')}</td>
              <td>{checkAppointment(9, '00:10')}</td>
            </tr>
            <tr>
              <th>10</th>
              <td>{checkAppointment(10, '06:00')}</td>
              <td>{checkAppointment(10, '06:45')}</td>
              <td>{checkAppointment(10, '07:35')}</td>
              <td>{checkAppointment(10, '08:20')}</td>
              <td>{checkAppointment(10, '09:10')}</td>
              <td>{checkAppointment(10, '09:55')}</td>
              <td>{checkAppointment(10, '10:45')}</td>
              <td>{checkAppointment(10, '11:30')}</td>
              <td>{checkAppointment(10, '12:20')}</td>
              <td>{checkAppointment(10, '13:05')}</td>
              <td>{checkAppointment(10, '13:55')}</td>
              <td>{checkAppointment(10, '14:40')}</td>
              <td>{checkAppointment(10, '15:30')}</td>
              <td>{checkAppointment(10, '16:15')}</td>
              <td>{checkAppointment(10, '17:05')}</td>
              <td>{checkAppointment(10, '17:50')}</td>
              <td>{checkAppointment(10, '18:40')}</td>
              <td>{checkAppointment(10, '19:25')}</td>
              <td>{checkAppointment(10, '20:15')}</td>
              <td>{checkAppointment(10, '21:00')}</td>
              <td>{checkAppointment(10, '21:50')}</td>
              <td>{checkAppointment(10, '22:35')}</td>
              <td>{checkAppointment(10, '23:25')}</td>
              <td>{checkAppointment(10, '00:10')}</td>
            </tr>
            <tr>
              <th>11</th>
              <td>{checkAppointment(11, '06:00')}</td>
              <td>{checkAppointment(11, '06:45')}</td>
              <td>{checkAppointment(11, '07:35')}</td>
              <td>{checkAppointment(11, '08:20')}</td>
              <td>{checkAppointment(11, '09:10')}</td>
              <td>{checkAppointment(11, '09:55')}</td>
              <td>{checkAppointment(11, '10:45')}</td>
              <td>{checkAppointment(11, '11:30')}</td>
              <td>{checkAppointment(11, '12:20')}</td>
              <td>{checkAppointment(11, '13:05')}</td>
              <td>{checkAppointment(11, '13:55')}</td>
              <td>{checkAppointment(11, '14:40')}</td>
              <td>{checkAppointment(11, '15:30')}</td>
              <td>{checkAppointment(11, '16:15')}</td>
              <td>{checkAppointment(11, '17:05')}</td>
              <td>{checkAppointment(11, '17:50')}</td>
              <td>{checkAppointment(11, '18:40')}</td>
              <td>{checkAppointment(11, '19:25')}</td>
              <td>{checkAppointment(11, '20:15')}</td>
              <td>{checkAppointment(11, '21:00')}</td>
              <td>{checkAppointment(11, '21:50')}</td>
              <td>{checkAppointment(11, '22:35')}</td>
              <td>{checkAppointment(11, '23:25')}</td>
              <td>{checkAppointment(11, '00:10')}</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default AvailabilityTable