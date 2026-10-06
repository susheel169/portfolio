const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const progress = document.querySelector('.progress');

menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : '0%';
};
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
