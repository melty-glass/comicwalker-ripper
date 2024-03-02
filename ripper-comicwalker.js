arr = document.querySelectorAll('canvas');
n = 1;

for (i of arr) {
    n >= 10 ? g = n : g = `0${n}`;
    a = document.createElement('a');
    a.href = i.toDataURL("image/png").replace("image/png", "image/octet-stream");
    a.download = `${g}.png`;

    a.click();
    n++;

    a = null;
    c = null;
    canvas = null;
    img = null;
}