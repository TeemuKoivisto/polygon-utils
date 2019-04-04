import * as polygonUtils from '../src/polygon-utils'
import geoFeatureMultiPolygon from './geo-feature-multipolygon.json'
import geoFeaturePolygon from './geo-feature-polygon.json'

describe('centroid(vertices: number[][])', () => {
  test('should calculate centroid correctly for Polygon', () => {
    const trueCentroid = [24.56678437132872, 61.073980922546376]
    const centroid = polygonUtils.centroid(geoFeaturePolygon.geometry.coordinates[0])
    expect(centroid).toEqual(trueCentroid)
  })
})

describe('centroidMultiPolygon(polygons: number[][][][])', () => {
  test('should calculate centroid correctly for MultiPolygon', () => {
    const trueCentroid = [25.718894043032954, 60.28610374400007]
    const centroid = polygonUtils.centroidMultiPolygon(geoFeatureMultiPolygon.geometry.coordinates)
    const firstPolygonCentroid = polygonUtils.centroid(geoFeatureMultiPolygon.geometry.coordinates[0][0])
    expect(centroid).toEqual(trueCentroid)
    expect(centroid).not.toEqual(firstPolygonCentroid)
  })
})

describe('boundingBoxArea(vertices: number[][])', () => {
  test('should calculate bounding box area correctly for Polygon', () => {
    const trueBBArea = 0.8322303781795132
    const area = polygonUtils.boundingBoxArea(geoFeaturePolygon.geometry.coordinates[0])
    expect(area).toEqual(trueBBArea)
  })
})

describe('boundingBoxAreaMultiPolygon(polygons: number[][][][])', () => {
  test('should calculate bounding box area correctly for MultiPolygon', () => {
    const trueBBArea = 0.20340858889998636
    const area = polygonUtils.boundingBoxAreaMultiPolygon(geoFeatureMultiPolygon.geometry.coordinates)
    const firstPolygonArea = polygonUtils.boundingBoxArea(geoFeatureMultiPolygon.geometry.coordinates[0][0])
    expect(area).toEqual(trueBBArea)
    expect(area).not.toEqual(firstPolygonArea)
  })
})
