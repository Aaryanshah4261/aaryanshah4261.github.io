// Function to hide the loader and show the page content
function myFunction() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page-content").style.display = "block";
}

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const tng = entry.target.querySelector('.scroll-left')
        if (entry.isIntersecting) {
            tng.classList.add('animate-container');
            return;
        }
        tng.classList.remove('animate-container');
    });
});
observer1.observe(document.querySelector('#whoiam'));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const tng = entry.target.querySelector('.scroll-left')
        if (entry.isIntersecting) {
            tng.classList.add('animate-container');
            return;
        }
        tng.classList.remove('animate-container');
    });
});
observer2.observe(document.querySelector('#things-learnt'));

document.addEventListener('click', function(event) {
    var isClickInside = event.target.closest('.project');
    if (!isClickInside) {
        var descriptions = document.querySelectorAll('.project-description');
        descriptions.forEach(function(desc) {
            desc.style.display = 'none';
        });
    }
});

function toggleDescription(element) {
    var description = element.querySelector('.project-description');
    var isVisible = description.style.display === 'block';
    var allDescriptions = document.querySelectorAll('.project-description');
    allDescriptions.forEach(function(desc) {
        desc.style.display = 'none';
    });
    description.style.display = isVisible ? 'none' : 'block';
}
