enum DayOfWeek {
  Monday = 'true',
  Tuesday = 'true',
  Wednesday = 'true',
  Thursday = 'true',
  Friday = 'true',
  Saturday = 'false',
  Sunday = 'false'
}


const isWeekend = (day: DayOfWeek):string => {
  if (day === 'true') { 
    return "This day is On"
  } else {
    return "This day is Off"
  }
}
