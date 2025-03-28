const createContactPage=()=>{
    const content=document.querySelector('#content');
    const pageContent= document.createElement('div');
    pageContent.classList.add('page-content');

    const form =document.createElement('form');
    form.classList.add('contact-form')

    const headingInput=document.createElement('input');
    headingInput.type="text";
   headingInput.placeholder="Enter heading";
form.appendChild(headingInput);




const addressInput=document.createElement('input')
addressInput.type="text";
addressInput.placeholder="Enter address";
form.appendChild(addressInput);
if (addressInput.value.trim().length < 5) {
    errors.push("Address must be at least 5 characters long.");
}
 

const phoneInput=document.createElement('input');
phoneInput.type="number";
phoneInput.placeholder="Enter phone number";
form.appendChild(phoneInput);
const phonePattern = /^\d{10,}$/;
if (!phonePattern.test(phoneInput.value)) {
    errors.push("Phone number must contain at least 10 digits.");
}




const submitButton=document.createElement('input')
submitButton.type="submit";
submitButton.value="submit";
form.appendChild(submitButton);

pageContent.appendChild(form);
content.appendChild(pageContent)
};

export default createContactPage; 






