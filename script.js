var g = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

var l = [];

var n = 0;

do {
    ri = Math.floor(Math.random()*(g.length));
    r = g[ri];

    if(r!= -1) {
        l.push(r);
        g[ri] = -1;
        n+=1;
    }

} while(n<16);



function drawPuzzle() {

    for(i = 0; i < 16; i++) {
        document.getElementsByTagName('td')[i].innerHTML = '<img src="img/'+l[i]+'.png">';
    }
    chkWin();
}

function keyPressed(e) {
    k = e.keyCode;
    //up = 38
    //dw = 40
    //lf = 37
    //rt = 39

    if(k==40) {mvUp();}
    if(k==38) {mvDown();}
    if(k==39) {mvLeft();}
    if(k==37) {mvRight();}
}

function mvDown() {
    if(l.indexOf(0)>4) {
        i = l.indexOf(0);
        j = i - 4;
        t = l[i];
        l[i] = l[j];
        l[j] = t;
        drawPuzzle();
    }
}

function mvUp() {
    if(l.indexOf(0)<12) {
        i = l.indexOf(0);
        j = i + 4;
        t = l[i];
        l[i] = l[j];
        l[j] = t;
        drawPuzzle();
    }
}

function mvRight() {
    if(!(i==0 || i==4 || i==8 || i==12)) {
        i = l.indexOf(0);
        j = i - 1;
        t = l[i];
        l[i] = l[j];
        l[j] = t;
        drawPuzzle();
    }
}

function mvLeft() {
    if(!(i==3 || i==7 || i==11 || i==15)) {
        i = l.indexOf(0);
        j = i + 1;
        t = l[i];
        l[i] = l[j];
        l[j] = t;
        drawPuzzle();
    }
}

function chkWin(){
    var a = 1;
    for(i=0; i<14; i++) {
        if(l[i]!=i+1) {
            a=0;
        }
    }
    if (a==1) {
        alert('You won!')
    }
}
drawPuzzle();