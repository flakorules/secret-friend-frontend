export const fetchSecretFriendsService = async (friendsList) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ friendsList });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch("http://localhost:3001", requestOptions);

  const data = await response.json();

  return data;
};
