const newFormHandler = function() {
    const addName = document.getElementById("add-name").value;
    const addEmail = document.getElementById("add-email").value;
    const addRole = document.getElementById("add-role").value;
    console.log("test");
    console.log(addName + addEmail + addRole);

    // return member = {
    //     name: addName,
    //     email: addEmail,
    //     role: addRole
    // };

    await fetch(`/api/teamMembers`, {
        method: 'POST',
        body: JSON.stringify({
            addName,
            addEmail,
            addRole
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


document.querySelector('#add-btn').addEventListener('submit', newFormHandler);