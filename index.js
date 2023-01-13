document.addEventListener('DOMContentLoaded',() => {
    const activeLatest = document.getElementById('active-latest');
    const activePopular = document.getElementById('active-popular');



    var btnleft = document.getElementById("button-left");
    btnleft.addEventListener("click", function() {
        this.classList.add("active");
        btnright.classList.remove("active");
        activeLatest.style.display='block';
    });

    var btnright = document.getElementById("button-right");
    btnright.addEventListener("click", function() {
        this.classList.add("active");
        btnleft.classList.remove("active");
            activePopular.style.display='block';
    });

    btnleft.onclick = function () {
        activePopular.style.display='none';
    };

    btnright.onclick = function () {
        activeLatest.style.display='none';
    };

});