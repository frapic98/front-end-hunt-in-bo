var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class','survey_options');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Another Field');
  survey_options.appendChild(newField);
}

remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  if(input_tags.length > 2) {
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

document.getElementById('print-values-btn').onclick = function() {
    let allTextBoxes = document.getElementsByClassName('survey_options');  
    for(let i of allTextBoxes){
        console.log(i.value) //here you will be able to see all values in the console
    }
}