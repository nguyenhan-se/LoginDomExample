const btnLoginElement = document.getElementById("btnLogin");

btnLoginElement.addEventListener("click", async () => {
  const inputUserNameElement = document.getElementById("inputUserName");
  const inputPasswordElement = document.getElementById("inputPassword");
  const isOk = await validateLoginForm(
    inputUserNameElement.value,
    inputPasswordElement.value
  );
  if (isOk) {
    const searchUser = `username=${inputUserNameElement.value}&password=${inputPasswordElement.value}`;
    const result = await fetchUserBy(searchUser);
    if (result[0]) {
      const loginContainer = document.getElementById("loginContainer");
      const mainContainer = document.getElementById("mainContainer");
      const mySpinner = document.getElementById("mySpinner");
      removeClass(mySpinner, "d-none");
      addClass(loginContainer, "d-none");
      removeClass(mainContainer, "d-none");
    }
    console.log("result data here ===>", result);
  }
});
