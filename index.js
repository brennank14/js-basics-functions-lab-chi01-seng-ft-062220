
function distanceFromHqInBlocks(location) {
    let distance = Math.abs(42-location);
    return distance;
}

function distanceFromHqInFeet(location){
    let blocks = distanceFromHqInBlocks(location);
    return blocks*264;
}

function distanceTravelledInFeet(start, end){
    let blockDistance = Math.abs(start - end);
    //let feetDistance = blockDistance*264;
    //return feetDistance;
    return blockDistance*264;
}

function calculatesFarePrice(start, end){
    let feet = distanceTravelledInFeet(start, end);
    if (feet < 400){
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet-400)*.02
    } else if (feet > 2000 && feet <= 2500) {
        return 25
    }else if (feet > 2500) {
        return 'cannot travel that far'
    }
}