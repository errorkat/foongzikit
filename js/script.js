scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
    console
  }
  
  document.getElementById("toWorks").addEventListener('click', () => {
    scrollTo(document.getElementById("sectionWorks"));
  });
  
  document.getElementById("toAbout").addEventListener('click', () => {
    scrollTo(document.getElementById("sectionAbout"));
  });
  
  document.getElementById("toContact").addEventListener('click', () => {
    scrollTo(document.getElementById("sectionContact"));
  });

// autotyped
  var typed = new Typed('#autoTyped', {
    strings: ["am a designer", "build things","bring ideas to life"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});

function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 