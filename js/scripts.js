document.addEventListener('DOMContentLoaded', function() {
   const projects = document.querySelectorAll('.project');
   const options = {
       root: null,
       rootMargin: '0px',
       threshold: 0.1
   };

   const observer = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('fade-in');
               observer.unobserve(entry.target);
           }
       });
   }, options);

   projects.forEach(project => {
       observer.observe(project);
   });
});
