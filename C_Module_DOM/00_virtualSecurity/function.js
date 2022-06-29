
function InvitedFunction() {
   const invitedList = ['Nina','Vanas','Jão', 'Romeu', 'Alec', 'Renan', 'Tobias'];
   const invitersList = ['Renan', 'Snow', 'Milu'];
   let invited = document.getElementById("name").nodeValue
   let inviter = document.getElementById("inviter").nodeValue
if (invitedList.includes(invited) && invitersList.includes(inviter)){
   document.getElementById("search").innerText = 'Ok, you can pass'
}else {
   document.getElementById("search").innerText = 'Sorry, but dont'
}}