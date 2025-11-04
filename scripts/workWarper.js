const container = document.querySelector('.work-container');
let isDragging = false;
let startX;
let scrollStart;

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  container.classList.add('dragging');
  startX = e.pageX - container.offsetLeft;
  scrollStart = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.classList.remove('dragging');
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.classList.remove('dragging');
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX);
  container.scrollLeft = scrollStart - walk;
});