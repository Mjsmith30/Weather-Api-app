import React from 'react';
import styles from './Map.module.css';
import mapStyle from './map-style';

class Map extends React.Component {
  // Create a ref object that exposes native DOM elements
   mapDiv = React.createRef();
   
setMap() {
  const{lat, lng, zoom}= this.props;
  if (lat && lng) {
    const map = new window.google.maps.Map(
      this.mapDiv.current, {
        zoom: zoom || 12,
        center: {lat, lng},
        disableDefaultUI: true,
        styles: mapStyle
      }
    );
    new window.google.maps.Marker({position: {lat, lng}, map: map});
  }
}
  // Called after the first render
  componentDidMount() {
    this.setMap();
  }

  // Called when props or state change
  componentDidUpdate() {
    this.setMap();
  }




  
render() {
  return (
    <div ref={this.mapDiv} className={styles.Map}></div>
  );
}
}

export default Map;