export const image =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  export const bg = "https://wallpapercave.com/wp/wp1917128.jpg";

  const token=import.meta.env.VITE_BEARER_TOKEN


export const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: token
  }
}
