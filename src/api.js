export const fetchUserEmailData = async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9"
    );
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchUserPasswordData = async ({ email, password }) => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          email: email,
          password: password,
        },
      }
    );
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
