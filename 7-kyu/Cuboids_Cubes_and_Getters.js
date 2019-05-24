class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get surfaceArea() {
        return (this.length * this.width + this.width * this.height + this.height * this.length) * 2;
    }
    get volume() {
        return this.length * this.width * this.height;
    }
    // TODO: Program Me
}
class Cube extends Cuboid {
    constructor(length, width, height) {
        super(width, height)
        this.length = length;
        this.width = length;
        this.height = length

    }
}