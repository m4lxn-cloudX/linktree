//FILL IN USER-SPECIFIC DATA HERE! (e.g. name, profile picture, social media links, etc.)

//Fill in your date here.
const TEXT_REPLACEMENTS = {
  'UserName': 'Milan',
};

//Fill in your profile picture path, here. If you have another data type, just type the data type. For example, profile.jpeg -> profile.png .
const IMAGE_REPLACEMENTS = {
  'ProfilePicture': './assets/img/individually/profile.jpeg',
};

//Fill in your social media locations here. Only edit after >>window.open('<< and stop before >>', '_blank');<<. 
// For example, if your Instagram is https://www.instagram.com/milan_.1410/, then you would only paste your link in the underlined part >>window.open('https://www.instagram.com/milan_.1410/', '_blank');<<.
const ONCLICK_REPLACEMENTS = {
  'instagram': "window.open('https://www.instagram.com/milan_.1410/', '_blank');",
};

//Choose the picture you want as your body background, and paste the path here. If you don't want a background, just leave it as an empty string.
const BACKGROUND = './assets/img/individually/Background.webP';


//------------------------------------------------------------------------------------------------------------------------------------------------------------



//DO NOT EDIT BELOW THIS LINE!
//IF YOU EDIT BELOW THIS LINE, YOUR CHANGES MAY BE OVERWRITTEN AND LOST FOREVER! (Unless you know what you're doing)
document.addEventListener('DOMContentLoaded', () => {
  for (const [id, value] of Object.entries(TEXT_REPLACEMENTS)) {
    const el = document.getElementById(id);
    if (el) el.textContent = value || id;
  }

  for (const [id, src] of Object.entries(IMAGE_REPLACEMENTS)) {
    if (!src) continue;
    const el = document.getElementById(id);
    if (el) el.src = src;
  }

  for (const [id, handler] of Object.entries(ONCLICK_REPLACEMENTS)) {
    if (!handler) continue;
    const el = document.getElementById(id);
    if (el) el.setAttribute('onclick', handler);
  }

  if (BACKGROUND) {
    document.body.style.backgroundImage = `url('${BACKGROUND}')`;
  }
});