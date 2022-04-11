// form.addEventListener('submit',function()) {
//     const name  = document.getElementById('add-name').value
//     const email = document.getElementById('add-email').value
//     const role = document.getElementById('add-role').value

//     console.log(name + ' ' + email + ' ' + role);
// };



$(document).ready(function () {
    $("form").parsley();
});

$(function () {
    $('#add-team-member')
        .parsley().on("field:validated", function () {
            var ok = $(".parsley-error").length === 0;
            $(".bs-callout-info").toggleClass("hidden", !ok);
            $(".bs-callout-warning").toggleClass("hidden", ok);
        })
        .on("form:submit", function () {
            return false; // Don't submit form for this demo
        });
});


const btn = document.getElementById('btn');
btn.addEventListener('click',clickHandler);

function clickHandler(event) {
    console.log("Button Clicked");
}


async function newFormHandler(event) {
    event.preventDefault();

    const name = document.getElementById('add-team-member').value.trim();
    const response = await fetch (`/api/user-routes`, {
        method: 'POST',
        body: JSON.stringify({
            name
        }),
        headers: { 
            'Content-Type': 'application/json' 
        }
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
};

document.getElementById('add-btn').addEventListener('click', newFormHandler)

<script src="/javascript/add-teamMember.js"></script>