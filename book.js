


// window.onload = function() {
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     const userList = document.getElementById('appointment-details');
//     userList.innerHTML = ''; // Clear any previous data

//     users.forEach((user, index) => {
//         const userDiv = document.createElement('div');
//         userDiv.innerHTML = `
//             <h3>
//                 Name: ${user.name} <br>
//                 Email: ${user.email} <br>
//                 Doctor: ${user.doctor} <br>
//                 Date: ${user.date} <br>
//                 Time: ${user.time} <br>
//             </h3>
//             <button class="editButton" onclick="editUser(${index})">Edit</button>
//             <button class="deleteButton" onclick="deleteUser(${index})">Delete</button>
//         `;
//         userList.appendChild(userDiv);
//     });

//     document.getElementById('backButton').addEventListener('click', function() {
//         window.location.href = 'index.html';
//     });
// };

// function editUser(index) {
//     const users = JSON.parse(localStorage.getItem('users'));
//     const user = users[index];

//     localStorage.setItem('editIndex', index);
//     localStorage.setItem('name', user.name);
//     localStorage.setItem('email', user.email);
//     localStorage.setItem('doctor', user.doctor);
//     localStorage.setItem('date', user.date);
//     localStorage.setItem('time', user.time);

//     window.location.href = 'index.html';
// }

// function deleteUser(index) {
//     const users = JSON.parse(localStorage.getItem('users'));
//     users.splice(index, 1);

//     localStorage.setItem('users', JSON.stringify(users));
//     window.location.reload();
// }





window.onload = function() {

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
};
