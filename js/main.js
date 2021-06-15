let imgArr, curIndex, timer;
function slide (Container) {
    let width = imgArr[curIndex].width;
    let distanceMoved = 0;
    let step = 10;
    let curConLeft = Container.offsetLeft;
    let slideInterval = setInterval(function (){
        if (Math.abs(width - distanceMoved) > step) {
            curConLeft -= step;
            Container.style.left = `${curConLeft}px`;
            distanceMoved += step;
        } else {
            clearInterval(slideInterval);
            Container.style.left = `${curIndex - width + distanceMoved}px`;
            distanceMoved = 0;
            if (++curIndex === imgArr.length) {
                curIndex = 0;
                Container.style.left = 0;
            }
        }
    }, 10);
    (function start() {
        let config = {
            height: "20rem",
            interval: 5000
        }
        document.getElementById("carousel").style.height = config.height;
        document.querySelectorAll("#carousel img").forEach(v => imgArr.push(v));
        let slideContainer = document.querySelector("#carousel > li");
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = imgArr[0].src;
        li.appendChild(img);
        slideContainer.appendChild(li);
        timer = setInterval(() => {
            slide(slideContainer)
        }, config.interval);
    })();
}
