const renderUsers = (users) => {
  const itemsContainerElement = document.getElementById("itemsContainer");
  let htmlUser = "";
  for (const user of users) {
    htmlUser += `<li>${user.id} - ${user.username}</li>`;
  }
  itemsContainerElement.innerHTML = htmlUser;
};
