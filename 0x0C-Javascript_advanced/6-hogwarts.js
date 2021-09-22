const studentHogwarts = function() {
  let privateScore = 0;
  let name =  null;
  
  let changeScoreBy = function(points) {
    privateScore += points;
  };

  this.setName = function(newName) {
    name = newName;
  };
  
  this.rewardStudent = function() {
    changeScoreBy(1);
  };
  
  this.penalizeStudent = function() {
    changeScoreBy(-1);
  };
  
  this.getScore = function() {
    return(`${name}: ${privateScore}`)
  };

  changeScoreBy.bind(this);
};

// Harry
const harry = new studentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}

// print score to Harry
console.log(harry.getScore());


// Draco
const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}

// print score to Draco
console.log(draco.getScore());