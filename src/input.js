export default class InputHandler {
  constructor(pill) {
    
    this.pill = pill;
    this.handleInput = this.handleInput.bind(this);

    document.addEventListener("keydown", this.handleInput);

    /*
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 74:
          pill.moveLeft();
          break;
        case 76:
          pill.moveRight();
          break;
        case 75:
          pill.speedDrop();
          break;
        case 83:
          pill.flipLeft();
          break;
        case 70:
          pill.flipRight();
          break;
      }
    });
    */
  }

  handleInput(event) {
    switch (event.keyCode) {
      case 74:
        event.preventDefault();
        this.pill.moveLeft();
        break;
      case 37:
        event.preventDefault();
        this.pill.moveLeft();
        break;
      case 76:
        event.preventDefault();
        this.pill.moveRight();
        break;
      case 39:
        event.preventDefault();
        this.pill.moveRight();
        break;
      case 75:
        event.preventDefault();
        this.pill.speedDrop();
        break;
      case 40:
        event.preventDefault();
        this.pill.speedDrop();
        break;
      case 83:
        event.preventDefault();
        this.pill.flipLeft();
        break;
      case 70:
        event.preventDefault();
        this.pill.flipRight();
        break;
      case 32:
        event.preventDefault();
        let game = this.pill.game;
        game.paused = !game.paused;
    }
  }

  removeListener() {
    document.removeEventListener("keydown", this.handleInput);
  }
}