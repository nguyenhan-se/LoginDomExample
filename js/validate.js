const validateLoginForm = async (username, password) => {
  const mySpinner = document.getElementById("mySpinner");
  mySpinner.classList.remove("d-none");

  if (!username && !password) {
    const loginErrorElement = document.getElementById("loginError");
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("run async ====>");

        // mySpinner.classList.add("d-none");
        addClass(mySpinner, "d-none");
        removeClass(loginErrorElement, "d-none");
        // loginErrorElement.classList.remove("d-none");
        resolve();
        return false;
      }, 1500)
    );
  }
  return true;
};
