export const toggleDarkMode = () => {
  const root = document.getElementById('root');
  const indicator = document.getElementById('indicator');
  if (!root!.classList.contains('dark')) {
    indicator!.style.transform = "translate(24px)";
    root!.classList.add('dark');
  } else {
    indicator!.style.transform = "translate(0px)";
    root!.classList.remove('dark');
  }
};1
