(function() {
    let screen = document.querySelector('.screen');
    let button = document.querySelector('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
})

//retrieve data from clicked numbers
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
    
});
equal.addEventListener('click', function (e) {
    if (screen.value === '') {
        screen.value = "Please Enter a Value"
    } else {
        let answer = eval(screen.value);
        screen.value = answer; 
    }
})

clear.addEventListener('click', function (e) {
    screen.value = '';
})

