var loadSpinner = function (value, object) {
    var spinner = value;
    document.querySelector('main section').style.display = 'none';
    document.querySelector('main').classList.add(spinner);

    setTimeout(() => {
        document.querySelector('main').classList.remove(spinner);
        document.querySelector('main section').style.display = 'block';


    }, 5000);
}
