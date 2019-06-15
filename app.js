const map = new mapboxgl.Map({
  container: 'map',
  style: './style.json',
  attributionControl: true,
  hash: true
})

let hoverStateId = null
let popup = new mapboxgl.Popup({
  closeButton: false, closeOnClick: false
})

map.on('mousemove', 'fude', (e) => {
  if (e.features.length > 0) {
    if (hoverStateId) {
      map.setFeatureState({
        source: 'v',
        sourceLayer: 'fude',
        id: hoverStateId
      }, { hover: false })
    }
    hoverStateId = e.features[0].id
    map.setFeatureState({
      source: 'v',
      sourceLayer: 'fude',
      id: hoverStateId
    }, { hover: true })
    map.getCanvas().style.cursor = 'pointer'
    popup.setLngLat(e.lngLat)
      .setHTML(JSON.stringify(e.features[0].properties, null, 2))
      .addTo(map)
  }
})
 
map.on('mouseleave', 'fude', () => {
  if (hoverStateId) {
    map.setFeatureState({
      source: 'v',
      sourceLayer: 'fude',
      id: hoverStateId
    }, { hover: false })
    hoverStateId = null
  }
  map.getCanvas().style.cursor = ''
  popup.remove()
})

