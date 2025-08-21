function changeBackground() {
  const colors = ['#ffdddd', '#ddffdd', '#ddddff', '#fffacd', '#e6e6fa'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
