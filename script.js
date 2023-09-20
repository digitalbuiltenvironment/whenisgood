function addData() {
  // Get input of user name and meeting name
  let name = document.getElementById('nameInput').value
  let meetingName = document.getElementById('meetingInput').value
  // Get input values for specific date
  if (document.getElementById('nineInput').checked) {
    nineInput = document.getElementById('nineInput').value
  } else {
    nineInput = document.getElementById('nineInputHidden').value
  }

  if (document.getElementById('tenInput').checked) {
    tenInput = document.getElementById('tenInput').value
  } else {
    tenInput = document.getElementById('tenInputHidden').value
  }

  if (document.getElementById('elevenInput').checked) {
    elevenInput = document.getElementById('elevenInput').value
  } else {
    elevenInput = document.getElementById('elevenInputHidden').value
  }

  // Get the table and insert a new row at the end
  let table = document.getElementById('outputTable')
  let newRow = table.insertRow(table.rows.length)

  // Insert data into cells of new row
  newRow.insertCell(0).innerHTML = selectedDayElement.textContent
  newRow.insertCell(1).innerHTML = name
  newRow.insertCell(2).innerHTML = nineInput
  newRow.insertCell(3).innerHTML = tenInput
  newRow.insertCell(4).innerHTML = elevenInput
}

// Get a reference to the table body and selectedDayElement
const calendarBody = document.querySelector('#calendar tbody')
const selectedDayElement = document.querySelector('#selectedDay')

// Function to generate the calendar for the current month
function generateCalendar(year, month) {
  calendarBody.innerHTML = ''

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  let currentDate = new Date(firstDay)

  while (currentDate <= lastDay) {
    const cell = document.createElement('td')
    cell.textContent = currentDate.getDate()

    // Add a click event listener to record the selected day
    cell.addEventListener('click', function () {
      const clickedDate = new Date(
        year,
        month,
        parseInt(event.target.textContent)
      )
      selectedDayElement.textContent = `${clickedDate.toDateString()}`
    })

    // Add the cell to the calendar
    calendarBody.appendChild(cell)

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1)

    // Start a new row at the beginning of the week
    if (currentDate.getDay() === 0) {
      const newRow = document.createElement('tr')
      calendarBody.appendChild(newRow)
    }
  }
}

// Initial load
generateCalendar(2023, 8) // September is month 8 (0-based index)
