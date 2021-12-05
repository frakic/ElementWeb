// No custom commands were required for this demo
// Here's an example of how an API login could be done in a real project

// Cypress.Commands.add("login", (username, password) => {
//   cy.request("POST", "http://APPLICATION_URL/", {
//     username: username,
//     password: password,
//   }).then((response) => {
//     const user = {
//       ...response.body.user,
//       userRoles: parseUserRolesFromToken(response.body.accessToken),
//     };

//     window.localStorage.setItem("/", "0");
//     window.localStorage.setItem("user", JSON.stringify(user));
//     window.localStorage.setItem("refreshToken", response.body.refreshToken);
//     window.localStorage.setItem("token", response.body.accessToken);
//   });
// });