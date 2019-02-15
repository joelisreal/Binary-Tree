var tree;
function setup() {
    createCanvas(900, 400);
    background(51);
    tree = new Tree;
    for (var i = 0; i < 30; i++) {
        tree.addValue(floor(random(0, 100)));
    } 
    tree.traverse();
    var result = tree.search(10);
    if (result == null) {
        console.log("not found");
    } else {
        console.log('Found');
    }
}



