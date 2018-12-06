# polygon-utils
Library for calculation of polygon centroid and bounding box area.

Motive for this tiny library was:
1) There wasn't similar libraries in TypeScript.
2) I think it's very easy-to-understand.
3) It's modular so people can instead of importing this just copy and paste the code and that's fine! I'd much prefer that too. Every extra library adds bloat and is a security risk.

The algorithm for the centroid was transformed from this C++ version https://stackoverflow.com/questions/2792443/finding-the-centroid-of-a-polygon to TypeScript. And it works fine, dunno is this the most efficient way to do it.

# API

```ts
function centroid(vertices: [number[]]) : [number, number]
```
Takes in vertices as a list of 

```ts
function boundingBoxArea(vertices: [number[]]) : number 
