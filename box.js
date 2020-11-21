class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options,this.Visiblity = 255);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        if (this.body.speed  < 4) {
            this.body.display()
        } else {
            World.remove(world,this.body);
            push()
            var pos =this.body.position;
            this.Visiblity = this.Visiblity-5
            rectMode(CENTER);
            fill(255,192,203);
            tint(255,this.Visiblity)
            rect(pos.x, pos.y, this.width, this.height);
            pop()
        }
        }
    }
