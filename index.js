// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hq = 42;
    return Math.abs(hq - block);
  }
  
  function distanceFromHqInFeet(block) {
    const blockDistance = distanceFromHqInBlocks(block);
    return blockDistance * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    if (distance <= 1) {
      return 0;
    } else if (distance <= 4) {
      return (distance - 1) * 264;
    } else {
      return 2000 + (distance - 4) * 264;
    }
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400) {
      return (distance - 400) * 0.02;
    } else {
      return 0;
    }
  }