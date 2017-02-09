var screenSaver = (function () {
    var config = {};
    return {
        init(obj) {
            config = obj || {};
            console.log(config);
            if (config != {}) {
                var img = document.getElementsByClassName('image')[0];

                img.style.height = '200px';
                img.style.width = '200px';

                var imgPos = img.getBoundingClientRect();
                console.log(imgPos);
                document.body.style.height = "100%";
                var bodyPos = document.body.getBoundingClientRect();
                console.log(bodyPos);

                var bottonPos = bodyPos.bottom - imgPos.height;
                var rightPos = bodyPos.width - imgPos.width;


                var topPlus = 1,leftPlus = 1;

                var timeIntervalSpeed = config['speed'];
                var timer1,timer2,timer3,timer4;
                img.style.position = 'absolute';
                var t1 = function () {
                    topPlus++;
                    leftPlus++;
                    img.style.top = topPlus;
                    img.style.left = leftPlus;
                    if (parseInt(img.style.top) >= bottonPos) {
                        clearInterval(timer1);
                        timer2 = setInterval(t2, timeIntervalSpeed);
                    }
                    else if (parseInt(img.style.left) >= rightPos) {
                        clearInterval(timer1);
                        timer4 = setInterval(t4, timeIntervalSpeed);
                    }
                }
                timer1 = setInterval(t1, timeIntervalSpeed);
                var t2 = function () {
                    topPlus--;
                    leftPlus++;
                    img.style.top = topPlus;
                    img.style.left = leftPlus;
                    if (parseInt(img.style.left) >= rightPos) {
                        clearInterval(timer2);
                        timer3 = setInterval(t3, timeIntervalSpeed);
                    }
                    else if (parseInt(img.style.top) <= 0) {
                        clearInterval(timer2);
                        timer1 = setInterval(t1, timeIntervalSpeed);
                    }
                }
                var t3 = function () {
                    topPlus--;
                    leftPlus--;
                    img.style.top = topPlus;
                    img.style.left = leftPlus;
                    if (parseInt(img.style.top) <= 0) {
                        clearInterval(timer3);
                        timer4 = setInterval(t4, timeIntervalSpeed);
                    }
                    else if (parseInt(img.style.left) <= 0) {
                        clearInterval(timer3);
                        timer2 = setInterval(t2, timeIntervalSpeed);
                    }
                }
                var t4 = function () {
                    topPlus++;
                    leftPlus--;
                    img.style.top = topPlus;
                    img.style.left = leftPlus;
                    if (parseInt(img.style.left) <= 0) {
                        clearInterval(timer4);
                        timer1 = setInterval(t1, timeIntervalSpeed);
                    }
                    else if (parseInt(img.style.top) >= bottonPos) {
                        clearInterval(timer4);
                        timer3 = setInterval(t3, timeIntervalSpeed);
                    }
                }


            }
        }

    }
})();

