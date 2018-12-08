declare module 'polygon-utils' {

// https://stackoverflow.com/questions/2792443/finding-the-centroid-of-a-polygon
// https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon
/**
 * Calculates the centroid of a polygon from a list of [x,y] coordinates.
 * @param vertices List of [x,y] coordinates.
 * @return Returns the centroid as [x,y] coordinates eg. [23.5960126585797, 63.19228972849327].
 */
export function centroid(vertices: number[][]) : [number, number]

/**
 * Calculates the bounding box area of a polygon.
 * @param vertices List of [x,y] coordinates.
 * @return Area as floating number eg. 0.21966561631020753.
 */
export function boundingBoxArea(vertices: number[][]) : number

}
