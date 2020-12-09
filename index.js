const gamesiz=9

let nabersblok=1
const blokX=[]
const blokY=[]
const rabbitXY={x:60*randomInteger(0, gamesiz-1),y:60*randomInteger(0, gamesiz-1), rabbit:document.getElementById('net'), caught:false}
const homeXY={x:60*randomInteger(0, gamesiz-1),y:60*randomInteger(0, gamesiz-1), home:document.getElementById('home')}
const wolves1XY={x:60*randomInteger(0, gamesiz-1), y:60*randomInteger(0, gamesiz-1), wolves1:document.getElementById('wolves1')}
const wolves2XY={x:60*randomInteger(0, gamesiz-1), y:60*randomInteger(0, gamesiz-1), wolves2:document.getElementById('wolves2')}
const blok=[];
const imegg=[]

const gemetabel=document.getElementById('gamePagefather');
gemetabel.style.width = gamesiz*60+'px'
gemetabel.style.height = gamesiz*60+'px'

const creatBlok=(nabersblok)=>{
  imegg[nabersblok]=document.createElement('img');
  imegg[nabersblok].class='imeggid';
  blok[nabersblok]=document.createElement('div');
  blok[nabersblok].class='imgfader1';
  blok[nabersblok].style.position="absolute"
  blok[nabersblok].style.backgroundColor='blue';
  blok[nabersblok].style.zIndex=100
  blok[nabersblok].style.width=60+'px';
  blok[nabersblok].style.height=60+'px'
  gemetabel.appendChild(blok[nabersblok]);
  imegg[nabersblok].style.width=60+"px";
  imegg[nabersblok].style.height=60+"px";
  imegg[nabersblok].src='https://w7.pngwing.com/pngs/996/1011/png-transparent-fence-garden-lawn-fence-grass-flower-garden-chainlink-fencing.png'
  blok[nabersblok].appendChild(imegg[nabersblok]);
  blokX[nabersblok]= (60*randomInteger(0, gamesiz-1))
  blokY[nabersblok]= (60*randomInteger(0, gamesiz-1))
  blok[nabersblok].style.left = blokX[nabersblok] + "px";
  blok[nabersblok].style.top = blokY[nabersblok] + "px";


  nabersblok--
  if (nabersblok<0) {
    return
  }else {
    creatBlok(nabersblok)
  }
}

const creatBlokMov=(nabersblok2, x,y)=>{

  if (blokX[nabersblok2]==x && blokY[nabersblok2]==y) {
    console.log(blokX[0], blokY[0]);
    return false
  }
  nabersblok2--
  if (nabersblok2<0) {
    return true
  }else {
    creatBlokMov(nabersblok2, x, y)
  }
  return true
}

const wolvesMoving=(wolvesXY)=>{
  izMuve(1, 2)
  if (Math.abs(wolvesXY.x-rabbitXY.x)>=Math.abs(wolvesXY.y-rabbitXY.y )) {
    if (wolvesXY.x>rabbitXY.x) {
      if (izMuve(wolvesXY.x-60, wolvesXY.y) ) {
        wolvesXY.x=wolvesXY.x-60
      }
    }else {
      if (izMuve(wolvesXY.x+60, wolvesXY.y) ) {
        wolvesXY.x=wolvesXY.x+60
      }
    }
  }else {
    if (wolvesXY.y>rabbitXY.y) {
      if (izMuve(wolvesXY.x, wolvesXY.y-60) ) {
        wolvesXY.y=wolvesXY.y-60
      }
    }else {
      if (izMuve(wolvesXY.x, wolvesXY.y+60) ) {
        wolvesXY.y=wolvesXY.y+60
      }
    }
  }
  check()
}
document.onkeydown = blockTypeMovie;

function randomInteger(min, max) {

  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function check() {
  if (rabbitXY.x==homeXY.x && rabbitXY.y==homeXY.y && !rabbitXY.caught ) {
    document.getElementById('winn').style.zIndex=1001
  }
  if (rabbitXY.x==wolves1XY.x && rabbitXY.y==wolves1XY.y) {
    document.getElementById('gameover').style.zIndex=1000
    rabbitXY.caught=true
  }
  if (rabbitXY.x==wolves2XY.x && rabbitXY.y==wolves2XY.y) {
    document.getElementById('gameover').style.zIndex=1000
    rabbitXY.caught=true
  }
}

const movingXY=()=>{
  rabbitXY.rabbit.style.left=rabbitXY.x+'px'
  rabbitXY.rabbit.style.top=rabbitXY.y+'px'
  homeXY.home.style.left=homeXY.x+'px'
  homeXY.home.style.top=homeXY.y+'px'
  wolves1XY.wolves1.style.left=wolves1XY.x+'px'
  wolves1XY.wolves1.style.top=wolves1XY.y+'px'
  wolves2XY.wolves2.style.left=wolves2XY.x+'px'
  wolves2XY.wolves2.style.top=wolves2XY.y+'px'
  check()
}



function blockTypeMovie(e) {
  e = e || window.event;

  if (e.keyCode == "37") {

    if (rabbitXY.x>0) {
      rabbitXY.x-=60
    }
    movingXY()
    wolvesMoving(wolves1XY)
    wolvesMoving(wolves2XY)
    movingXY()
  } else if (e.keyCode == "39") {

    if (rabbitXY.x<(gamesiz-1)*60) {
      rabbitXY.x+=60
    }
    movingXY()
    wolvesMoving(wolves1XY)
    wolvesMoving(wolves2XY)
    movingXY()

  } else if (e.keyCode == "40") {

    if (rabbitXY.y<(gamesiz-1)*60) {
      rabbitXY.y+=60
    }
    movingXY()
    wolvesMoving(wolves1XY)
    wolvesMoving(wolves2XY)
    movingXY()
  } else if (e.keyCode == "38") {

    if (rabbitXY.y>0) {
      rabbitXY.y-=60
    }
    movingXY()
    wolvesMoving(wolves1XY)
    wolvesMoving(wolves2XY)
    movingXY()
  }

}
function izMuve(x, y) {
  nabersblok2=1
  if (homeXY.x==x && homeXY.y==y) {
    return false
  }else {

    return creatBlokMov(nabersblok2, x,y);
    return true
  }

}
movingXY()
creatBlok(nabersblok)
