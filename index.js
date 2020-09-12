const triangulate = require('delaunay-triangulate')
const fs = require('fs').promises

var points = new Array(100)
for(var i=0; i<100; ++i) {
  var p = new Array(3)
  for(var j=0; j<3; ++j) {
    p[j] = 2.0 * Math.random() - 1.0
  }
  points[i] = p
}

const dtpoints = triangulate(points)

fs.writeFile('points.txt', JSON.stringify(dtpoints)).then(data => console.log(`finished writing file :: ${data}`))

