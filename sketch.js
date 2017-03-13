// for red, green, and blue color values
const sites = []
const voronoi = new Voronoi()
let diagram = null

const TotalSites = 40

function setup() {
    const w = 720
    const h = 480
    createCanvas(w, h)

    const bbox = {
        xl: 0, // x-left
        xr: w, // x-right
        yt: 0, // y-top
        yb: h  // y-bottom
    }

    for (var i = 0; i < TotalSites; i++) {
        sites.push(new p5.Vector(random(width), random(height)))
    }

    diagram = voronoi.compute(sites, bbox)

    // console.group('Voronoi Diagram')
    // console.debug('>> diagram', diagram)
    // console.table(diagram)
    // console.groupEnd('Voronoi Diagram')
}

function draw() {
    background(51)

    stroke(255)
    strokeWeight(4)
    noFill()

    sites.forEach(p => {
        point(p.x, p.y)
    })

    stroke(40, 210, 199)
    strokeWeight(2)
    diagram.edges.forEach(e => {
        line(e.va.x, e.va.y, e.vb.x, e.vb.y)
    })
}
