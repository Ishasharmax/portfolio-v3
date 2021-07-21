var myAudio = document.getElementById("myAudio");
var isPlaying = false;

var myAudio2 = document.getElementById("myAudio2");
var isPlaying2 = false;

var myAudio3 = document.getElementById("myAudio3");
var isPlaying3 = false;

var myAudio4 = document.getElementById("myAudio4");
var isPlaying4 = false;

var myAudio5 = document.getElementById("myAudio5");
var isPlaying5 = false;

var myAudio6 = document.getElementById("myAudio6");
var isPlaying6 = false;



function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    document.getElementById("myDIV").style.backgroundImage = "url(img/M0B000024VOK-source.jpg)";
    document.getElementById("myDIV").style.backdrop = "blur(8px)";

};

myAudio.onplaying = function () {
    isPlaying = true;
    if (document.getElementById("imgStar1").classList.contains('imgStar2')) {
        document.getElementById("imgStar1").classList.add('rotate22');
        document.getElementById("imgStar1").classList.remove('imgStar2');
    }
};
myAudio.onpause = function () {
    isPlaying = false;
    if (document.getElementById("imgStar1").classList.contains('rotate22')) {
        document.getElementById("imgStar1").classList.add('imgStar2');
        document.getElementById("imgStar1").classList.remove('rotate22');
    }
};

function togglePlay2() {
    isPlaying2 ? myAudio2.pause() : myAudio2.play();
    myAudio.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    document.getElementById("myDIV").style.backgroundImage = "url(img/hob-cover-censor-mobile.jpg)";

};

myAudio2.onplaying = function () {
    isPlaying2 = true;
    if (document.getElementById("imgStar2").classList.contains('imgStar2')) {
        document.getElementById("imgStar2").classList.add('rotate22');
        document.getElementById("imgStar2").classList.remove('imgStar2');
    }
};
myAudio2.onpause = function () {
    isPlaying2 = false;
    if (document.getElementById("imgStar2").classList.contains('rotate22')) {
        document.getElementById("imgStar2").classList.add('imgStar2');
        document.getElementById("imgStar2").classList.remove('rotate22');
    }
};

function togglePlay3() {
    isPlaying3 ? myAudio3.pause() : myAudio3.play();
    myAudio.pause();
    myAudio2.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    document.getElementById("myDIV").style.backgroundImage = "url(img/giphy.gif)";

};

myAudio3.onplaying = function () {
    isPlaying3 = true;
    if (document.getElementById("imgStar3").classList.contains('imgStar2')) {
        document.getElementById("imgStar3").classList.add('rotate22');
        document.getElementById("imgStar3").classList.remove('imgStar2');
    }

};
myAudio3.onpause = function () {
    isPlaying3 = false;
    if (document.getElementById("imgStar3").classList.contains('rotate22')) {
        document.getElementById("imgStar3").classList.add('imgStar2');
        document.getElementById("imgStar3").classList.remove('rotate22');
    }
};


function togglePlay4() {
    isPlaying4 ? myAudio4.pause() : myAudio4.play();
    myAudio.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio5.pause();
    myAudio6.pause();
    document.getElementById("myDIV").style.backgroundImage = "url(img/Johnson_Banks_Pink_Floyd_Later_Years_graphic_.width-1440_9TySTKamRxYu45MQ.jpg)";

};

myAudio4.onplaying = function () {
    isPlaying4 = true;
    if (document.getElementById("imgStar4").classList.contains('imgStar2')) {
        document.getElementById("imgStar4").classList.add('rotate22');
        document.getElementById("imgStar4").classList.remove('imgStar2');
    }

};
myAudio4.onpause = function () {
    isPlaying4 = false;
    if (document.getElementById("imgStar4").classList.contains('rotate22')) {
        document.getElementById("imgStar4").classList.add('imgStar2');
        document.getElementById("imgStar4").classList.remove('rotate22');
    }
};

function togglePlay5() {
    isPlaying5 ? myAudio5.pause() : myAudio5.play();
    myAudio.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio6.pause();
    document.getElementById("myDIV").style.backgroundImage = "url(img/tumblr_ohm960083i1uno395o1_r1_500.gif)";

};

myAudio5.onplaying = function () {
    isPlaying5 = true;
    if (document.getElementById("imgStar5").classList.contains('imgStar2')) {
        document.getElementById("imgStar5").classList.add('rotate22');
        document.getElementById("imgStar5").classList.remove('imgStar2');
    }

};
myAudio5.onpause = function () {
    isPlaying5 = false;
    if (document.getElementById("imgStar5").classList.contains('rotate22')) {
        document.getElementById("imgStar5").classList.add('imgStar2');
        document.getElementById("imgStar5").classList.remove('rotate22');
    }
};

function togglePlay6() {
    isPlaying6 ? myAudio6.pause() : myAudio6.play();
    myAudio.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio5.pause();
    myAudio4.pause();
    document.getElementById("myDIV").style.backgroundImage = "url(img/a8dc2291f7394dedf85c414cb24756e6.jpg)";

};

myAudio6.onplaying = function () {
    isPlaying6 = true;
    if (document.getElementById("imgStar6").classList.contains('imgStar2')) {
        document.getElementById("imgStar6").classList.add('rotate22');
        document.getElementById("imgStar6").classList.remove('imgStar2');
    }

};
myAudio6.onpause = function () {
    isPlaying6 = false;
    if (document.getElementById("imgStar6").classList.contains('rotate22')) {
        document.getElementById("imgStar6").classList.add('imgStar2');
        document.getElementById("imgStar6").classList.remove('rotate22');
    }
};
