//画面上をランダムに徘徊する線

let x;
let y;
let px; // 前のx(previous x)
let py; // 前のy(previous y)
let step = 50; //1ステップでの最大移動幅
var disX;
var disY;
var diameter;

function setup() {
    createCanvas(windowWidth, windowHeight); // 幅600px,高さ600px
    angleMode(DEGREES); //角度指定を度数法に変更

    //変数x,yの初期値として画面の中心の座標を代入
    x = width / 2;
    y = height / 2;
    px = x;
    py = y;
}

function draw() {

    background(240, 240, 255, 3);
    //x,yの移動幅をランダムに生成，計算しx,yにそれぞれ代入
    disX = random(-1, 1) * step;
    x = x + disX;
    disY = random(-1, 1) * step;
    y = y + disY;
    diameter = (disX + disY) * 2;

    if ((disX + disY) * 2 > 20) {
        noStroke();
        fill(random(x),20,100,30);
        ellipse(x, y, diameter);
    }

    stroke(145,123,123);
    line(px, py, x, y);

    px = x;
    py = y;

    //画面からx,yがはみ出したときを条件分岐で考え，反対側から出てくるようにする
    if (x > width) {
        x = 0;
        px = 0;
    } else if (x < 0) {
        x = width;
        px = width;
    }
    if (y > height) {
        y = 0;
        py = 0;
    } else if (y < 0) {
        y = height;
        py = height;
    }
}
