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

  const response = await fetch(process.env.REACT_APP_API_URL, requestOptions);
  const data = await response.json();

  return data;
};
