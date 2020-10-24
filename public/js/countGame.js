// self executed anonymous function
(function(){
    // your code here.
    const message = document.querySelector("#message");
    const numbers = document.querySelector("#numbers");
    const template = document.querySelector("#number-template");
    
    // game setting
    let totalNumbers = 10;
    
    // variables
    let nextNumberToCount = totalNumbers;
    let isGameStarted = false;
    let beginTimeStamp = undefined;
    let endTimeStamp = undefined;
    
    function handleNumberClick() {
      if (!isGameStarted) {
        isGameStarted = true;
        beginTimeStamp = Date.now();
      }
      if (nextNumberToCount == this.textContent) {
        this.remove();
        nextNumberToCount -= 1;
        
        if (nextNumberToCount < 0) {
          endTimeStamp = Date.now();
          alert(endTimeStamp - beginTimeStamp);
        }
      }
    }
    
    function initGame(){
      // construcut the number array
      let array = []
      for (let i=totalNumbers; i>=0; i--) {
        array.push(i);
      }
      
      // https://flaviocopes.com/how-to-shuffle-array-javascript/
      array = array.sort(() => Math.random() - 0.5)
      
      for (let i of array) {
        let clone = template.content.cloneNode(true);
        clone.querySelector(".number").textContent = i;
        clone.querySelector(".number").onclick = handleNumberClick;
        numbers.appendChild(clone);
        
      }
      
    }
    initGame();
    
  })();
  
  
  