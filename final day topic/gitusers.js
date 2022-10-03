

async function m1()
{
    let response=await fetch("https://api.github.com/users");

    let users=await response.json();
    console.log(users);

    for (let user of users) {
        console.log(user.login);

        let gitusers=document.getElementById("gitusers");
        gitusers.innerHTML+=
        `
        <tr>
        <td>${user.login}</td>
        <td>
            <img src=${user.avatar_url} height=200 width=200>
        </td>
        <td>${user.node_id}</td>
        <td>${user.site_admin}</td>
        <td>${user.type}</td>
  </tr>
        `
    }
}

m1()