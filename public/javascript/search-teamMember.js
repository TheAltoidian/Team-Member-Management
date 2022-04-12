// $(function () {
//     $("#demo-form")
//         .parsley()
//         .on("field:validated", function () {
//             var ok = $(".parsley-error").length === 0;
//             $(".bs-callout-info").toggleClass("hidden", !ok);
//             $(".bs-callout-warning").toggleClass("hidden", ok);
//         })
//         .on("form:submit", function () {
//             return false; // Don't submit form for this demo
//         });
// });

// $(document).ready(function () {
//     $("form").parsley();
// });


// const name = document.getElementById("search-btn").value;
// console.log(name);

// document.getElementById('search-btn').addEventListener('click', function (event) {
//     event.preventDefault();

//     const searchName = document.getElementById('search-name').value;
//     console.log(searchName);


// });

async function newFormHandler(event) {
    event.preventDefault();

    const searchName = document.getElementById('search-name').value;
    console.log(searchName);

    const response = await fetch(`/api/home-routes`, {
        method: "GET",
        body: JSON.stringify({
            searchName,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace('/main');
    } else {
        alert(response.statusText);
    }
}

document.getElementById('search-btn').addEventListener('click', newFormHandler);


// <script src="/javascript/search-teamMember.js"></script>;
