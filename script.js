document.body.style.backgroundColor = '#dbdab6'; 
let container = addClass('div','container mt-3');
container.style.backgroundColor = '#ccc95e';
container.style.width = '500px'
let row = addClass('div','row');
let form = addClass('form');
form.setAttribute('method','POST');
form.style.margin = '8px 30px';
let formClass = addClass('div','row');
let col = addClass('div','col');
let label = addClass('label');
label.innerHTML = 'Firstname';
let input = addClass('input','form-control');
input.setAttribute('type','text');
let col1 = addClass('div','col');
let label1 = addClass('label');
label1.innerHTML = 'Lastname';
let input1 = addClass('input','form-control');
input1.setAttribute('type','text');
let rGroup = addClass('div','form-row m-2');
let rDiv = addClass('div','form-check');
let gender = addClass('input','form-check-input');
gender.setAttribute('type','radio');
gender.setAttribute('name','gender');
let genderLabel = addClass('label');
genderLabel.innerHTML = 'Male';
let rDiv1 = addClass('div','form-check ml-2');
let gender1 = addClass('input','form-check-input');
gender1.setAttribute('type','radio');
gender1.setAttribute('name','gender');
let genderLabel1 = addClass('label');
genderLabel1.innerHTML = 'Female';

let cDiv = addClass('div','form-check');
let food = addClass('input','form-check-input');
food.setAttribute('type','checkbox');
food.setAttribute('name','gender');
let foodLabel = addClass('label');
foodLabel.innerHTML = 'Indian dishes';

let cDiv1 = addClass('div','form-check');
let food1 = addClass('input','form-check-input');
food1.setAttribute('type','checkbox');
food1.setAttribute('name','gender');
let foodLabel1 = addClass('label');
foodLabel1.innerHTML = 'Italian dishes';

let cDiv2 = addClass('div','form-check');
let food2 = addClass('input','form-check-input');
food2.setAttribute('type','checkbox');
food2.setAttribute('name','gender');
let foodLabel2 = addClass('label');
foodLabel2.innerHTML = 'Mexican dishes';

let cDiv3 = addClass('div','form-check');
let food3 = addClass('input','form-check-input');
food3.setAttribute('type','checkbox');
food3.setAttribute('name','gender');
let foodLabel3 = addClass('label');
foodLabel3.innerHTML = 'Arabian dishes';

let cDiv4 = addClass('div','form-check');
let food4 = addClass('input','form-check-input');
food4.setAttribute('type','checkbox');
food4.setAttribute('name','gender');
let foodLabel4 = addClass('label');
foodLabel4.innerHTML = 'Traditional dishes';

let countryClass = addClass('div','form-group');
let countryLabel = addClass('label');
countryLabel.innerHTML = 'Select Country';
let country = addClass('select','form-control');
let option = addClass('option');
option.setAttribute('value','India');
option.innerHTML = 'India';
let option1 = addClass('option');
option1.setAttribute('value','Australia');
option1.innerHTML = 'Australia';
let option2 = addClass('option');
option2.setAttribute('value','Canada');
option2.innerHTML = 'Canada';
let option3 = addClass('option');
option3.setAttribute('value','Germany');
option3.innerHTML = 'Germany';
let option4 = addClass('option');
option4.setAttribute('value','Singapore');
option4.innerHTML = 'Singapore';

let stateClass = addClass('div','form-group');
let stateLabel = addClass('label');
stateLabel.innerHTML = 'Select State';
let state = addClass('select','form-control');
let option5 = addClass('option');
option5.setAttribute('value','TN');
option5.innerHTML = 'TamilNadu';
let option6 = addClass('option');
option6.setAttribute('value','AP');
option6.innerHTML = 'Andhra';
let option7 = addClass('option');
option7.setAttribute('value','KL');
option7.innerHTML = 'Kerala';
let option8 = addClass('option');
option8.setAttribute('value','UP');
option8.innerHTML = 'Uttar Pradesh';
let option9 = addClass('option');
option9.setAttribute('value','BH');
option9.innerHTML = 'Bihar';

let addressClass = addClass('div','form-group');
let addlabel = addClass('label');
addlabel.innerHTML = 'Address';
let addText = addClass('textarea','form-control');
addText.setAttribute('rows',3);

let pincodeClass = addClass('div','form-group');
let pinLabel = addClass('label');
pinLabel.innerHTML = 'Pincode';
let pinInput = addClass('input','form-control');

let button = addClass('button','btn btn-danger');
button.setAttribute('type','submit');
button.innerHTML='SUBMIT';
button.style.margin = '0px 180px'

pincodeClass.append(pinLabel,pinInput);
addressClass.append(addlabel,addText);
state.append(option5,option6,option7,option8,option9);
stateClass.append(stateLabel,state);
country.append(option,option1,option2,option3,option4);
countryClass.append(countryLabel,country);
cDiv.append(food,foodLabel);
cDiv1.append(food1,foodLabel1);
cDiv2.append(food2,foodLabel2);
cDiv3.append(food3,foodLabel3);
cDiv4.append(food4,foodLabel4);
rDiv.append(gender,genderLabel);
rDiv1.append(gender1,genderLabel1);
rGroup.append(rDiv,rDiv1);
col1.append(label1,input1);
col.append(label,input);
formClass.append(col,col1);
form.append(formClass,rGroup,cDiv,cDiv1,cDiv2,cDiv3,cDiv4,countryClass,stateClass,addressClass,pincodeClass,button);
row.append(form);
container.append(row);
document.body.append(container);


function addClass(elem,elclass=''){
    let element = document.createElement(elem);
    element.setAttribute('class', elclass);

    return element;
}