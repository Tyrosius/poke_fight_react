export const getUser = async token => {
  try {
    const res = await fetch('https://poke-fight-api-wdg009-g1.onrender.com/user/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error);
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

export const registerUser = async credentials => {

  try {
    const res = await fetch('https://poke-fight-api-wdg009-g1.onrender.com/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error);
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

export const loginUser = async credentials => {
  try {
    const res = await fetch(`https://poke-fight-api-wdg009-g1.onrender.com/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error);
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
};