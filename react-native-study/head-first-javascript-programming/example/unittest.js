function assert(description, expression) {
    if (expression) {
        console.log("success: " + description);
    } else {
        console.error("failed: " + description);
    }
}

function unittest() {
    // Test for regular triangle
    var regularTriangle = RegularPolygonFactory.create(
        [new Point(0, 0), new Point(2, 0), new Point(1, Math.sqrt(3))]
    );

    assert("regularTriangle must be a subtype of RegularPolygon",
        regularTriangle instanceof RegularPolygon);
    assert("regularTriangle must be a subtype of Polygon",
        regularTriangle instanceof Polygon);
    assert("regularTriangle must be a subtype of Shape",
        regularTriangle instanceof Shape);
    assert("regularTriangle must has 3 vector of vertices exactly.",
        3 == regularTriangle.vertices.length);
    assert("the area of regularTriangle is equal to sqrt(3) / 4 * side * side.",
        Math.abs(regularTriangle.getArea() - 1.73205) < 1E6);

    // Test for square
    var square = RegularPolygonFactory.create(
        [new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2)]
    );

    assert("square must be a subtype of RegularPolygon",
        square instanceof RegularPolygon);
    assert("square must be a subtype of Polygon",
        square instanceof Polygon);
    assert("square must be a subtype of Shape",
        square instanceof Shape);
    assert("square must has 4 vector of vertices exactly.",
        4 == square.vertices.length);
    assert("the area of square is equal to 4.",
        Math.abs(square.getArea() - 4) < 1E6);
}

unittest();

