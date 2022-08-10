class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" +this.index;
    if (this.index === 1){
      this.positionX=width/2-100;
    } else {
      this.positionX=width/2+100;
    }

    database.ref(playerIndex).set({
      name:this.name,
      x: this.positionX,
      y:this.positionY
    });

  }

  getCount() {
    var playerCountRef = database.ref("playercount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playercount: count
    });
  }
}
