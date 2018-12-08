import * as polygonUtils from '../src/polygon-utils'
import geoFeatureMultiPolygon from './geo-feature-multipolygon.json'
import geoFeaturePolygon from './geo-feature-polygon.json'

describe('centroid(vertices: number[][])', () => {
  test('should calculate centroid correctly for MultiPolygon', () => {
    const trueCentroid = [23.5960126585797, 63.19228972849327]
    const centroid = polygonUtils.centroid(geoFeatureMultiPolygon.geometry.coordinates[0][0])
    expect(centroid).toEqual(trueCentroid)
  })
  test('should calculate centroid correctly for Polygon', () => {
    const trueCentroid = [24.56678437132872, 61.073980922546376]
    const centroid = polygonUtils.centroid(geoFeaturePolygon.geometry.coordinates[0])
    expect(centroid).toEqual(trueCentroid)
  })
})

describe('boundingBoxArea(vertices: number[][])', () => {
  test('should calculate bounding box area correctly for MultiPolygon', () => {
    const trueBBArea = 0.21966561631020753
    const area = polygonUtils.boundingBoxArea(geoFeatureMultiPolygon.geometry.coordinates[0][0])
    expect(area).toEqual(trueBBArea)
  })
  test('should calculate bounding box area correctly for Polygon', () => {
    const trueBBArea = 0.8322303781795132
    const area = polygonUtils.boundingBoxArea(geoFeaturePolygon.geometry.coordinates[0])
    expect(area).toEqual(trueBBArea)
  })
})
