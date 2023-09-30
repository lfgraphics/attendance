let joinedBtn = document.getElementById("joined")
let leftBtn = document.getElementById("leaving")
let doneTodayBtn = document.getElementById("done")

// Event listener for the "Joined" button
joinedBtn.addEventListener("click", () => {
    console.log("joinedBtn is clicked");
    // const currentTime = new Date().toLocaleTimeString();
    // // Create a new row and add it to the table
    // const newRow = document.createElement("tr");
    // newRow.innerHTML = `
    //     <td class="border px-4 py-2">Joined</td>
    //     <td class="border px-4 py-2">${currentTime}</td>
    //     <td class="border px-4 py-2">-</td>
    // `;
    // attendanceTable.appendChild(newRow);
    
    // // Disable "Joined" button and enable "Left" button
    // joinedBtn.disabled = true;
    // leftBtn.disabled = false;
    
    // // Save attendance data to local storage
    // saveAttendanceData();
});

// Event listener for the "Left" button
leftBtn.addEventListener("click", () => {
    console.log("leftBtn is clicked");
    // const currentTime = new Date().toLocaleTimeString();
    // const rows = attendanceTable.getElementsByTagName("tr");
    // const lastRow = rows[rows.length - 1];
    
    // // Update the last row with "Left" and the current time
    // const cells = lastRow.getElementsByTagName("td");
    // cells[0].textContent = "Left";
    // cells[1].textContent = currentTime;
    
    // // Calculate and update the time difference
    // const joinedTime = new Date(cells[1].textContent);
    // const leftTime = new Date(currentTime);
    // const timeDiff = (leftTime - joinedTime) / 1000; // in seconds
    // cells[2].textContent = `${timeDiff} seconds`;

    // // Enable "Joined" button and disable "Left" button
    // joinedBtn.disabled = false;
    // leftBtn.disabled = true;
    
    // // Save attendance data to local storage
    // saveAttendanceData();
});

// Event listener for the "Done Today" button
doneTodayBtn.addEventListener("click", () => {
    console.log("doneTodayBtn is clicked");
    // Call the "sendToServer" function
    // sendToServer();
});

// Function to save attendance data to local storage
function saveAttendanceData() {
    const rows = attendanceTable.getElementsByTagName("tr");
    const attendanceData = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const action = cells[0].textContent;
        const time = cells[1].textContent;
        const timeDiff = cells[2].textContent;
        attendanceData.push({ action, time, timeDiff });
    }

    // Store attendance data in local storage
    localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
}