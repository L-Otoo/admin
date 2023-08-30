toggling between dark mode and light mode 

const light_mode = document.querySelector(".div.theme-toggler span.light_mode");
const dark_mode = document.querySelector(".div.theme-toggler span.dark_mode");

dark_mode.addEventListener('click', () => {
    document.body.classList.add("dark-theme-variables");
    dark_mode.classList.add('active');
    light_mode.classList.remove('active');
})


light_mode.addEventListener('click', () => {
    document.body.classList.remove('dark-theme-variables');
    dark_mode.classList.remove('active');
    light_mode.classList.add('active');
});





// To get all employees

window.addEventListener('load', async () => {


const allEmployees = await fetch ('https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/employer/1')
const result = await allEmployees.json();
console.log(result)

const { employee } = result;
console.log(employee)


const table = document.querySelector('table + body')
let tableRow = ++


employee.forEach(em => {
    tableContents +=`
//                <tr>
//                    <td data-label="Job Title">${em.jobTitle}</td>
//                    <td data-label="Employee Name">${em.employeeName}</td>
//                    <td data-label="Email">${em.email}</td>
//                    <td data-label="Action">${em.action}</td>
//               </tr>      
//         `
         
      });
         tableContents += `
       </table>
       </tbody>
//       `
      container.innerHTML = tableContents
  })




//   To patch an employee
