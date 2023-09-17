function addData() {
  // Get input of user name
  let name = document.getElementById('nameInput').value
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
  newRow.insertCell(0).innerHTML = '16 September'
  newRow.insertCell(1).innerHTML = name
  newRow.insertCell(2).innerHTML = nineInput
  newRow.insertCell(3).innerHTML = tenInput
  newRow.insertCell(4).innerHTML = elevenInput
}

function createCalendar(elem, year, month) {
  let mon = month - 1 // months in JS are 0..11, not 1..12
  let d = new Date(year, mon)

  let table =
    '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>'

  // spaces for the first row
  // from Monday till the first day of the month
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>'
  }

  // <td> with actual dates
  while (d.getMonth() == mon) {
    table +=
      '<td onclick="deleteTable(),tableCreate();">' + d.getDate() + '</td>'

    if (getDay(d) % 7 == 6) {
      // sunday, last day of week - newline
      table += '</tr><tr>'
    }

    d.setDate(d.getDate() + 1)
  }

  // add spaces after last days of month for the last row
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>'
    }
  }

  // close the table
  table += '</tr></table>'

  elem.innerHTML = table
}

function getDay(date) {
  // get day number from 0 (monday) to 6 (sunday)
  let day = date.getDay()
  if (day == 0) day = 7 // make Sunday (0) the last day
  return day - 1
}

createCalendar(calendar, 2023, 9)

if (window.addEventListener) {
  document.addEventListener('click', function (e) {
    if (e.target.id.indexOf('br') === 0) {
      alert(e.target.innerHTML)
    }
  })
}

function selectTime() {
  console.log('print')
}

// function tableCreate() {
//   const body = document.body,
//     tbl = document.createElement('table')
//   tbl.style.width = '100px'
//   tbl.style.border = '1px solid black'

//   for (let i = 0; i < 3; i++) {
//     const tr = tbl.insertRow()
//     for (let j = 0; j < 2; j++) {
//       if (i === 2 && j === 1) {
//         break
//       } else {
//         const td = tr.insertCell()
//         td.appendChild(document.createTextNode(`Cell I${i}/J${j}`))
//         td.style.border = '1px solid black'
//         if (i === 1 && j === 1) {
//           td.setAttribute('rowSpan', '2')
//         }
//       }
//     }
//   }
//   body.appendChild(tbl)
// }

// function deleteTable() {
//   if (tbl != null) {
//     return '1'
//   } else {
//     body.deleteChild(tbl)
//   }
// }
