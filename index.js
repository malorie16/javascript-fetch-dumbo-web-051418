const app = "I don't do much.";
const token = 'c32f6399c3407b0da55a2aa8e7ef9573ee8ed3d7'
fetch('https://api.github.com/repos/jquery/jquery/commits',
  headers: {
    Authorization: `token ${token}`
  })
  .then(res => res.json())
  .then(json => console.log(json));
