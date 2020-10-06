// const login = async () => {
//   const userNameElement = document.getElementById("username");
//   //   const passwordElement = document.getElementById("password");
//   //   if(validate )
//   const searchBy = `username=${userNameElement.value}`;
//   const user = await fetchUserBy(searchBy);
//   console.log("user data ===>", user);
//   if (user[0] && user[0].role === "admin") {
//     alert("hello admin");
//   } else {
//     alert("Hello user");
//   }
// };

// const registerUser = async () => {
//   const userNameElement = document.getElementById("username");
//   const users = await fetchUser();

//   const newUser = {
//     data: { id: users.length, username: userNameElement.value, role: "user" },
//   };

//   const isSuccess = await postUser(newUser);
//   if (isSuccess && isSuccess.created === 1) {
//     alert("register success");
//   }
// };
