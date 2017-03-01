function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Vector(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.getDistance = function() {
        var distanceX = p2.x - p1.x;
        var distanceY = p2.y - p1.y;
        return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    }
}

function Shape(pointArr) {
    if (!pointArr) {
        return;
    }

    // check validation of pointArr
    for (var i = 0; i < pointArr.length; ++i) {
        if (pointArr[i] instanceof Point) {
            
        } else {
            throw new TypeError("Construction failed, pointArr[ + " + i + "] is not a Point object.");
        }
    }

    this.vertices = pointArr;
    this.vectorOfVertices = [];

    // fill vectorOfVertices
    var j = this.vertices.length - 1;
    for (var i = 0; i < this.vertices.length; ++i) {
        this.vectorOfVertices.push(
            new Vector(new Point(pointArr[j].x, pointArr[j].y), new Point(pointArr[i].x, pointArr[i].y)));
    }
}

function Polygon(pointArr) {
    if (!pointArr) {
        return;
    }

    Shape.call(this, pointArr);
    // Polygon must have vertices greater than 3 or equal.
    if (pointArr.length < 3) {
        throw new TypeError("Polygon must have vertices greater than 3 or equal, but input is " + pointArr.length);
    }

    this.getArea = function() {
        // This is a simple way of getting polygon's area.
        var area = 0;
        var j = this.vertices.length - 1;
        for (var i = 0; i < this.vertices.length; ++i) {
            area += (this.vertices[j].x + this.vertices[i].x) * (this.vertices[j].y - this.vertices[i].y)
            j = i;
        }

        return Math.abs(area) / 2;
    }
}

Polygon.prototype = new Shape();
Polygon.prototype.constructor = Shape;

function RegularPolygon(pointArr) {
    if (!pointArr) {
        return;
    }

    Polygon.call(this, pointArr);
    // RegularPolygon must equal distances of all vector of vertices.
    for (var i = 0; i < this.vectorOfVertices.length; ++i) {
        for (var j = 0; j < this.vectorOfVertices.length; ++j) {
            if (i == j) {
                continue;
            }

            var distance1 = this.vectorOfVertices[i].getDistance();
            var distance2 = this.vectorOfVertices[j].getDistance();
            // Approximate under 6th fractions
            if (Math.abs(distance1 - distance2) > 1E6) {
                throw new TypeError("RegularPolygon must equal distances of all vector of vertices.");
            }
        }
    }
}

RegularPolygon.prototype = new Polygon();
RegularPolygon.prototype.constructor = RegularPolygon;

function RegularPolygonFactory() {
}

RegularPolygonFactory.create = function(pointArr) {
    if (Array.isArray(pointArr)) {
        return new RegularPolygon(pointArr);
    } else {
        return null;
    }
}