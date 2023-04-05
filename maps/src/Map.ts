
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {

  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  };

  addMarker(point: Mappable): void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: point.location.lat,
        lng: point.location.lng
      }
    })

    marker.addListener('click', () =>{
      const infoWindow = new google.maps.InfoWindow({
        content: point.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });

  };

}