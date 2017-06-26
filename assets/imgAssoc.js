var mains = [
  {id:300, img:'cisse'},
  {id:301, img:'ronaldo'},
  {id:302, img:'murray'},
  {id:303, img:'rangeRover'},
  {id:304, img:'lufthansaPlane'}
]

var solutions = [
  {id:300, img:'adidasBoots'},
  {id:301, img:'nikeBoots'},
  {id:302, img:'headRacket'},
  {id:303, img:'rangeRoverCar'},
  {id:304, img:'lufthansaLogo'}
]

var decoys = [
  {id:000, img:'dog'},
  {id:001, img:'duck'},
  {id:002, img:'mug'},
  {id:003, img:'pen'},
  {id:004, img:'plate'}
]

var ImgAssoc = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  var mainImage = mains[randomIndex]

  this.type = 'imgAssoc'
  this.gameKey = mainImage.id
  this.promptStrings = this.newPromptArray(mainImage.id)

  this.gameData = {
    mainString: mainImage.img,
    promptStrings: this.promptStrings
  };
};

ImgAssoc.prototype.newPromptArray = function(mainImageId){

  var decoy1 = decoys[Math.floor(Math.random() * decoys.length)].img
  var decoy2 = decoys[Math.floor(Math.random() * decoys.length)].img

  var getDecoy2 = function(){
    while(decoy1 == decoy2){ decoy2 = decoys[Math.floor(Math.random() * decoys.length)].img }
    return decoy2
  };

  newPromptArray = []
  newPromptArray.push(decoy1)
  newPromptArray.push(getDecoy2())
  newPromptArray.push(this.getSolution(mainImageId).img)

  function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    };
  };

  shuffle(newPromptArray)
  return newPromptArray
};

ImgAssoc.prototype.getSolution = function(mainImageid){
  function findSolution(hash) {
    return hash.id === mainImageid;
  };
  return solutions.find(findSolution);
};

ImgAssoc.prototype.checkAnswer = function(gameKey, name){
  function findImage(hash) {
    return gameKey === hash.id;
  };
  var returnedImage = solutions.find(findImage);
  return returnedImage.img === name
}

module.exports = ImgAssoc;
