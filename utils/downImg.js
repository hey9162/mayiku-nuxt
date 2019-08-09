export function downImg(img) {
  let a = document.createElement('a')
  a.download = 'dibaqu' + new Date().getTime()
  a.href = img.src
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}