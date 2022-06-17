/*File Name: app.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:3-June-2022
 */

/*Immediately invoked functional expression */
(function(){
function Start(){
    console.log("App started");
     
   let deleteButtons= document.querySelectorAll('.btn-danger')
   for(button of deleteButtons){
    button.addEventListener('click',(event)=>{
        if(!confirm("Are you sure?")){
          event.preventDefault();
          window.location.assign('/book-list');
        }
    });
   }
}
window.addEventListener('load',Start);
})();