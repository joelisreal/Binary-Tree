function Node(val, x, y) {
    this.left = null;
    this.right = null; 
    this.value = val;
    this.distance = 2;
    this.x = x;
    this.y = y;
    this.txt = 10;
    this.width = 20;
}

Node.prototype.search = function(val) {
    if (this.value == val) {
        return this;
    } else if(val < this.value && this.left != null) {
        return this.left.search(val);
    } else if(val > this.value && this.right != null) {
        return this.right.search(val);
    }
    return null;
}
Node.prototype.visit = function(parent) {
    if (this.left != null) {
        this.left.visit(this);
    }
    console.log(this.value);
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(this.txt);
    text(this.value, this.x, this.y);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.width, this.width);
    line(parent.x, parent.y, this.x, this.y);
    if (this.right != null) {
        this.right.visit(this);
    }
}
Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n
            this.left.x = this.x - (width / pow(2, n.distance));
            this.left.y = this.y + (height / 12);
            this.left.width = this.width - 1;
            this.left.txt = this.txt - 0.5;
        } else {
            n.distance++;
            this.left.addNode(n);
    }
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
            this.right.x = this.x + (width / pow(2, n.distance));
            this.right.y = this.y + (height / 12);
            this.right.width = this.width - 1;
            this.right.txt = this.txt - 0.5;
        } else {
            n.distance++;
            this.right.addNode(n);
    }
    }
}
