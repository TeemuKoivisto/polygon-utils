# polygon-utils [![npm version](https://badge.fury.io/js/polygon-utils.svg)](https://badge.fury.io/js/polygon-utils)
Library for calculation of polygon centroid and bounding box area.

Motive for this tiny library was:
1) There wasn't similar libraries in TypeScript.
2) I think it's very easy-to-understand.
3) It's modular so people can instead of importing this just copy and paste the code and that's fine! I'd much prefer that too. Every extra library adds bloat and is a security risk.

The algorithm for the centroid was transformed from this C++ version https://stackoverflow.com/questions/2792443/finding-the-centroid-of-a-polygon to TypeScript. And that is translated from its mathematical formula https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon.

NOTE: this doesn't take into consideration Earth's curvature like eg. this library does https://github.com/mapbox/geojson-area. But if very slight inaccuracies don't bother you, this is a good estimate nonetheless.

# How to install
```
npm i polygon-utils
```

# How to develop locally

Requires: Node.js >= 8.

1) Clone this repo & run `npm i`.
2) Start TypeScript compiler in watch mode: `npm run ts:watch`. All changes should update automatically.

To test as a local dependency:

1) In the root of this project run: `npm link`. This will make it available as a global dependency for any local npm projects.
2) In a project where you'd like to use it as a dependency run: `npm link polygon-utils`. Now you can use it inside the project like a normal dependency: `import { centroid } from 'polygon-utils'`.

# API

```ts
/**
 * Calculates the centroid of a polygon from a list of [x,y] coordinates.
 * @param vertices List of [x,y] coordinates.
 * @return Centroid as [x,y] coordinates eg. [23.5960126585797, 63.19228972849327].
 */
```
```ts
/**
 * Calculates a weighted average of polygons' centroids.
 * A reasonable estimate for the centroid instead of using the first centroid of the list.
 * @param polygons List of polygons.
 * @return Centroid as [x,y] coordinates eg. [23.5960126585797, 63.19228972849327].
 */
export function centroidMultiPolygon(polygons: number[][][][]) : [number, number]
```
```ts
/**
 * Calculates the bounding box area of a polygon.
 * @param vertices List of [x,y] coordinates.
 * @return Area as floating number eg. 0.21966561631020753.
 */
export function boundingBoxArea(vertices: number[][]) : number
```
```ts
/**
 * Convenience method to compute the polygon area for a MultiPolygon shape.
 * @param polygons List of polygons.
 * @return Area as a floating number eg. 5.20340858889998636.
 */
export function boundingBoxAreaMultiPolygon(polygons: number[][][][]) : number
```
