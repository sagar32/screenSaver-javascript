var screenSaver = (function () {
    var config = {};
    var color = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#f1c40f', '#f39c12', '#d35400', '#27ae60', '#2980b9', '#e74c3c', '#8e44ad', '#2c3e50'];
    return {
        init(obj) {
            config = obj || {};
            console.log(config);
            if (config != {}) {
                if (config['noOfObj'] == "multiple") {
                    if (config['objType'] == "text") {
                        var enterByUser = window.prompt("Enter Your Name").trim();
                        var text = enterByUser || 'Sagar Chopada';
                        for (var i = 0; i < text.length; i++) {
                            this.multipleImg(text[i]);
                        }
                    } else if (config['objType'] == "randomChar") {
                        var rndomChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                        for (var i = 0; i < 40; i++) {
                            this.multipleImg(rndomChar[i]);
                        }
                    } else {
                        var noOfImges = Math.floor((Math.random() * 50) + 5);
                        for (var i = 0; i <= noOfImges; i++) {
                            this.multipleImg();
                        }
                    }

                } else {
                    this.singleImg();
                }
            }
        },
        multipleImg() {
            //console.log(arguments[0]);
            if (arguments.length > 0) {
                var img = document.createElement('font');
                var text = document.createTextNode(arguments[0]);
                img.appendChild(text);
                document.body.appendChild(img);

                var fontSize = Math.floor((Math.random() * 110) + 30);

                img.style.fontSize = fontSize + "px";

                img.style.color = color[Math.floor(Math.random() * color.length)];

                img.style.opacity = Math.random() + 0.4;

            } else {
                var img = document.createElement('img');
                img.src = './img.png';
                document.body.appendChild(img);

                var imgHeight = Math.floor((Math.random() * 110) + 15);
                // var imgWidth = Math.floor((Math.random() * 200) + 25);

                img.style.height = imgHeight + 'px';
                img.style.width = imgHeight + 'px';

                img.style.opacity = Math.random() + 0.1;
            }

            var imgPos = img.getBoundingClientRect();
            // console.log(imgPos);
            document.body.style.height = "100%";
            var bodyPos = document.body.getBoundingClientRect();
            // console.log(bodyPos);

            var bottonPos = bodyPos.bottom - imgPos.height;
            var rightPos = bodyPos.width - imgPos.width;

            var topPlus = Math.floor((Math.random() * bodyPos.bottom) + 1) - imgPos.height;
            var leftPlus = Math.floor((Math.random() * bodyPos.width) + 1) - imgPos.width;

            img.style.position = 'absolute';
            var timerArray = [];
            var t1, t2, t3, t4;

            var timeIntervalSpeed = Math.floor((Math.random() * config['speed']) + 2);

            t1 = function () {
                topPlus++;
                leftPlus++;
                img.style.top = topPlus;
                img.style.left = leftPlus;
                if (parseInt(img.style.top) >= bottonPos) { //if bottom of body
                    clearInterval(timerArray[0]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[1] = setInterval(t2, timeIntervalSpeed);

                }
                else if (parseInt(img.style.left) >= rightPos) { //if rightside of body 
                    clearInterval(timerArray[0]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[3] = setInterval(t4, timeIntervalSpeed);
                }
            }
            t2 = function () {
                topPlus--;
                leftPlus++;
                img.style.top = topPlus;
                img.style.left = leftPlus;
                if (parseInt(img.style.left) >= rightPos) { //if rightside of body
                    clearInterval(timerArray[1]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[2] = setInterval(t3, timeIntervalSpeed);
                }
                else if (parseInt(img.style.top) <= 0) { // if top of body
                    clearInterval(timerArray[1]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[0] = setInterval(t1, timeIntervalSpeed);
                }
            }
            t3 = function () {
                topPlus--;
                leftPlus--;
                img.style.top = topPlus;
                img.style.left = leftPlus;
                if (parseInt(img.style.top) <= 0) { // if top of body
                    clearInterval(timerArray[2]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[3] = setInterval(t4, timeIntervalSpeed);
                }
                else if (parseInt(img.style.left) <= 0) { // if leftside of body
                    clearInterval(timerArray[2]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[1] = setInterval(t2, timeIntervalSpeed);
                }
            }
            t4 = function () {
                topPlus++;
                leftPlus--;
                img.style.top = topPlus;
                img.style.left = leftPlus;
                if (parseInt(img.style.left) <= 0) { //if leftside of body
                    clearInterval(timerArray[3]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[0] = setInterval(t1, timeIntervalSpeed);
                }
                else if (parseInt(img.style.top) >= bottonPos) { // if bottom of body
                    clearInterval(timerArray[3]);
                    if (img.style.color)
                        img.style.color = color[Math.floor(Math.random() * color.length)];
                    timerArray[2] = setInterval(t3, timeIntervalSpeed);
                }
            }
            var funArray = [t1, t2, t3, t4];
            var index = Math.floor(Math.random() * funArray.length);
            var currFun = funArray[index];
            timerArray[index] = setInterval(currFun, timeIntervalSpeed);
        },//function multiple img
        singleImg() {
            var img = document.createElement('img');
            img.src = './img.png';
            document.body.appendChild(img);

            img.style.height = config['objHeight'] || '200px';
            img.style.width = config['objWidth'] || '200px';

            var imgPos = img.getBoundingClientRect();
            console.log(imgPos);
            document.body.style.height = "100%";
            var bodyPos = document.body.getBoundingClientRect();
            console.log(bodyPos);

            var bottonPos = bodyPos.bottom - imgPos.height;
            var rightPos = bodyPos.width - imgPos.width;


            var topPlus = 1, leftPlus = 1;

            var timeIntervalSpeed = config['speed'];
            var timer1, timer2, timer3, timer4;
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
        },//function single img
    }
})();

