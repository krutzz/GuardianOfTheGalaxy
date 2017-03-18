class Projectile extends Unit{
    constructor(x, y, ctx, sprite, speed, direction, shooter){
        super(x, y, ctx, sprite, speed);

        this._shooter = shooter;
        this.direction = direction;
    }

    get shooter(){
        return this._shooter;
    }

    get direction(){
        return this._direction;
    }
    set direction(value){
        if(value < 0){
            this._direction = -1;
        }
        else if (value > 0){
            this._direction = 1;
        }
        else{
            throw new Error("Projectile speed can not be 0");
        }
    }

    move(){
        this.y = y + (speed * this.direction);
    }

}