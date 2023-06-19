class Ground {
  
  constructor(x, y, w, h) {

    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);

    this.w = w; //width (largura)
    this.h = h; //height (altura)
    
    World.add(world, this.body);
    
  }

  show() {

    var pos = this.body.position;

    Matter.Body.rotate(this.body,angle);

    push();

    rectMode(CENTER);
    
    stroke("white"); //contorno
    fill("gray"); //cor do rect

    translate(pos.x,pos.y);
    rotate(angle);

    rect(0,0, this.w, this.h);
    //rect(pos.x, pos.y, this.w, this.h);

    pop();

    angle +=0.07;

  }
  
}
