const xConrdinates=[0,1,2,3,4]
const yConrdinates=[0,1,2,3,4]

// directions
let directions=['NORTH','SOUTH','EAST','WEST']
let moveTypes=['RIGHT','LEFT']
let commands=['PLACE','MOVE','REPORT']


let direction=Math.floor(Math.random() * directions.length)

// information
// (X,Y)

function createXY() {
    let X=Math.floor(Math.random() * xConrdinates.length);
    let Y=Math.floor(Math.random() * yConrdinates.length);
    let points=[X,Y]

    return points
}

function move() {
    return directions[direction]
}


// PLACE
let [x,y]=createXY()
console.log('robot is at point ',createXY(), ' now');

// MOVE
let robotPosition=move()
console.log(robotPosition);

function report() {
    switch (robotPosition) {
        case 'NORTH':
            if(y+1 <= 4){
                x=x
                y=y+1
              
            }else{
                console.log("invalid move");
            }
            break;
    
        case 'SOUTH':
            if(y-1 >= 0){
                x=x
                y=y-1
              
            }else{
                console.log("invalid move");
            }
            break;
        case 'EAST':
            if(x+1 <= 4){
                x=x+1
                y=y
              
            }else{
                console.log("invalid move");
            }
            break;
    
        case 'WEST':
            if(x-1 >= 0){
                x=x-1
                y=y
              
            }else{
                console.log("invalid move");
            }
            break;
    
        default:
            break;
    }
    console.log("***robot new poistion is***");
    console.log("x: ",x);
    console.log("y: ",y);
}
// REPORT
report()