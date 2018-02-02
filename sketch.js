// more colors:
// http://www.colourlovers.com/palettes/search?query=neon
// neon - http://www.colourlovers.com/palette/7315/Pop_Is_Everything
//
const colors = {
    green: { r: 130, g: 230, b: 194 },
    pink: { r: 242, g: 188, b: 224 },
    purple: { r: 104, g: 143, b: 244 },
    blue: { r: 5, g: 200, b: 246 },
    cyan: { r: 3, g: 233, b: 248 }
}
const neon = {
    green: [170,255,0],
    orange: [255,170,0],
    pink: [255,0,170],
    purple: [170,0,255],
    blue: [0,170,255]
}
const sites = []
const voronoi = new Voronoi()
let delaunay;
let diagram = null

const TotalSites = 255

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

    for (var i = 0; i < sqrt(w * h); i++) {
        sites.push(new p5.Vector(random(width), random(height)))
    }

    diagram = voronoi.compute(sites, bbox)

    var i = 0
    const vertices = diagram.edges.reduce((acc, val) => {
        // i++ < 1 && console.debug('=> map', acc, { vax: val.va.x, vay: val.va.y })
        // acc.push(new Delaunay.Point(val.va.x, val.va.y))
        // acc.push(new Delaunay.Point(val.vb.x, val.vb.y))
        // return acc
    }, [])
    // const vertices = diagram.edges.map(v => {
    //     console.debug('=> map', v)
    //     return new Delaunay.Point(v.x, v.y)
    // })
    // const triangles = diagram.edges.map(v => {
    //     return { x: v.x, y: v.y }
    // })
    console.debug('vertices', vertices)
    // delaunay = Delaunay.triangulate(vertices)
    delaunay = Delaunay.triangulate(sites)


    // console.group('Voronoi Diagram')
    // console.debug('>> diagram', diagram)
    // console.table(diagram)
    // console.groupEnd('Voronoi Diagram')
}

function draw() {
    background(40)

    stroke(neon.orange)
    strokeWeight(4)
    noFill()

    sites.forEach(p => {
        point(p.x, p.y)
    })

    // stroke(40, 210, 199)
    stroke(neon.blue)
    strokeWeight(2)
    diagram.edges.forEach(e => {
        line(e.va.x, e.va.y, e.vb.x, e.vb.y)
    })

    noLoop()
}
