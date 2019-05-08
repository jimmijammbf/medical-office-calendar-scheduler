import React from 'react';

const AppointmentHeaders = () => {
  return (
    <tr className='appointment-headers'>
      <th>#</th>
      <th>Patient</th>
      <th>Time</th>
      <th>Kind</th>
    </tr>
  );
}

const AppointmentRows = (props) => {
  const timeformat = 'TIME_FORMAT(time, \'%h:%i%p\'\)'
  return (
    <tr className={'appointment-rows'+props.index%2}>
      <td>{props.index+1}</td>
      <td>{props.appointment.patient}</td>
      <td>{props.appointment[timeformat]}</td>
      <td>{props.appointment.kind}</td>
    </tr>
  )
}

const Appointments = (props) => {
  if (!props.appointments.length) {
    return (
      <h1>Please Select a Physician to View Calendar.</h1>
    )
  }
  return (
    <div id='appointments-panel'>
      <h1>{props.doctor}</h1>
      <h3>{props.email}</h3>
      <table id='appointments-table'>
        <thead>
          <AppointmentHeaders />
        </thead>
        <tbody>
          {props.appointments.map((appointment, index) => {
            return (
              <AppointmentRows appointment={appointment} index={index} key={index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;
