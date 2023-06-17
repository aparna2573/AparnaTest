let button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status=false, weight_statuses=false;

    if(height == '' || isNaN(height) || (height<=0)){
        document.getElementById('height_error').innerHTML ='Please provide a valid Height';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_statuses=true;

    }

    if(height_status && weight_status){
        const bmi = (weight/ (height*height)/10000).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML='Under weight: '+ bmi;
        }else if(bmi < 18.6 && bmi < 24.9){
            result.innerHTML='Normal: '+ bmi;

        }else{
            alert('The form has error');
            result.innerHTML='';
        }
    }
});