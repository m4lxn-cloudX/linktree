# linktree | A personalized linktree + 100% free to use!

If you need help, Support or just have questions, contact me [here](https://discord.com/users/1215682123219079259).

----

1. Click on [this](https://github.com/m4lxn-cloudX/linktree) site on the green button **<> Code** and click **Download Zip**.

2. Go into your downloads and extract the files.

3. Move the files to a save place, where its safe and not getting deleted. For example, i am using *Documents/GitHub/projects/*.

4. Open [Index.html](https://github.com/m4lxn-cloudX/linktree/blob/main/index.html) in a localhost and see if everything is working. You should now see a personal linktree with already filled in Data.

5. Go to *assets/js/* and open **fillin.js**. 
Now you should see something like this:
´´´
//FILL IN USER-SPECIFIC DATA HERE! (e.g. name, profile picture, social media links, etc.)

//Fill in your date here.
const TEXT_REPLACEMENTS = {
  'UserName': 'Milan',
};

//Fill in your profile picture path, here. If you have another data type, just type the data type. For example, profile.jpeg -> profile.png .
const IMAGE_REPLACEMENTS = {
  'ProfilePicture': 'assets/img/individually/profile.jpeg',
};

//Fill in your social media locations here. Only edit after >>window.open('<< and stop before >>', '_blank');<<. 
// For example, if your Instagram is https://www.instagram.com/milan_.1410/, then you would only paste your link in the underlined part >>window.open('https://www.instagram.com/milan_.1410/', '_blank');<<.
const ONCLICK_REPLACEMENTS = {
  'discord': "window.open('https://discord.com/users/1215682123219079259', '_blank');",
  'instagram': "window.open('https://www.instagram.com/milan_.1410/', '_blank');",
  'tiktok': "window.open('https://www.tiktok.com/@milan_.1410', '_blank');",
  'spotify': "window.open('https://open.spotify.com/user/31pi3ohexpsdoho4yrktnbnlyd6u?si=6c370749be9f449e', '_blank');",
  'snapchat': "window.open('https://www.snapchat.com/@milan_angus', '_blank');",
  'github': "window.open('https://github.com/m4lxn-cloudX', '_blank');",
};

//Choose the picture you want as your body background, and paste the path here. If you don't want a background, just leave it as an empty string.
const BACKGROUND = 'assets/img/individually/Background.webp';
´´´
![-](assets/img/Screenshot%202026-04-03%20084831.png)

6. Now you just follow the instructions in the fillin.js file and save the file with *file -> save* or just *CTRL + S*.

----

-> If you are having issues with the script problems with the instrcutions, feel free to contact me [here](https://discord.com/users/1215682123219079259).

----

**more comming soon...**