// form.addEventListener('submit',function()) {
//     const name  = document.getElementById('add-name').value
//     const email = document.getElementById('add-email').value
//     const role = document.getElementById('add-role').value

//     console.log(name + ' ' + email + ' ' + role);
// };



const btn = document.getElementById('btn');
btn.addEventListener('click',clickHandler);

function clickHandler(event) {
    console.log("Button Clicked");
}