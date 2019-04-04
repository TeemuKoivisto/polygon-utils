
// https://stackoverflow.com/questions/2792443/finding-the-centroid-of-a-polygon
// https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon
/**
 * Calculates the centroid of a polygon from a list of [x,y] coordinates.
 * @param vertices List of [x,y] coordinates.
 * @return Centroid as [x,y] coordinates eg. [23.5960126585797, 63.19228972849327].
 */
export function centroid(vertices: number[][]) : [number, number] {
  const centroid = [0, 0]
  let signedArea = 0
  for (let i = 0; i < vertices.length - 1; i += 1) {
    const x0 = vertices[i][0]
    const y0 = vertices[i][1]
    const x1 = vertices[i + 1][0]
    const y1 = vertices[i + 1][1]
    const a = x0 * y1 - x1 * y0
    signedArea += a
    centroid[0] += (x0 + x1) * a
    centroid[1] += (y0 + y1) * a
  }
  const firstVertex = vertices[0]
  const lastVertex = vertices[vertices.length - 1]
  const a = firstVertex[0] * lastVertex[1] - lastVertex[0] * firstVertex[1]
  signedArea += a
  centroid[0] += (firstVertex[0] + lastVertex[0]) * a
  centroid[1] += (firstVertex[1] + lastVertex[1]) * a

  signedArea *= 0.5
  centroid[0] /= (6.0 * signedArea)
  centroid[1] /= (6.0 * signedArea)

  return centroid as [number, number]
}

/**
 * Calculates a weighted average of polygons' centroids.
 * A reasonable estimate for the centroid instead of using the first centroid of the list.
 * @param polygons List of polygons.
 * @return Centroid as [x,y] coordinates eg. [23.5960126585797, 63.19228972849327].
 */
export function centroidMultiPolygon(polygons: number[][][][]) : [number, number] {
  const polygonsCount = polygons.length
  return polygons.reduce(
    (acc: [number, number], polygon: number[][][]) => {
      const c = centroid(polygon[0])
      acc[0] += c[0] / polygonsCount
      acc[1] += c[1] / polygonsCount
      return acc
    },
    [0, 0] as [number, number])
}

/**
 * Calculates the bounding box area of a polygon.
 * @param vertices List of [x,y] coordinates.
 * @return Area as floating number eg. 0.21966561631020753.
 */
export function boundingBoxArea(vertices: number[][]) : number {
  let maxX = 0
  let maxY = 0
  let minX = vertices[0][0]
  let minY = vertices[0][1]
  for (let i = 0; i < vertices.length; i += 1) {
    const x = vertices[i][0]
    const y = vertices[i][1]
    if (x > maxX) maxX = x
    if (x < minX) minX = x
    if (y > maxY) maxY = y
    if (y < minY) minY = y
  }
  return (maxX - minX) * (maxY - minY)
}

/**
 * Convenience method to compute the polygon area for a MultiPolygon shape.
 * @param polygons List of polygons.
 * @return Area as a floating number eg. 5.20340858889998636.
 */
export function boundingBoxAreaMultiPolygon(polygons: number[][][][]) : number {
  return polygons.reduce((acc: number, polygon: number[][][]) => acc + boundingBoxArea(polygon[0]), 0)
}
