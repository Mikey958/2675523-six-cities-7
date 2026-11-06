import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { type Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[];
  activeOfferId?: string | null;
  className?: string;
};

const amsterdamCenter: L.LatLngExpression = [52.374, 4.9];

const defaultMarkerIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeMarkerIcon = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function OffersMap({ offers, activeOfferId = null, className = 'cities__map map' }: MapProps) {
  const mapContainerRef = useRef<HTMLElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerLayerRef = useRef<L.LayerGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) {
      return;
    }

    const map = L.map(container).setView(amsterdamCenter, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const markerLayer = L.layerGroup().addTo(map);
    mapRef.current = map;
    markerLayerRef.current = markerLayer;

    return () => {
      markersRef.current.clear();
      markerLayer.remove();
      map.remove();
      markerLayerRef.current = null;
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const markerLayer = markerLayerRef.current;
    if (!map || !markerLayer) {
      return;
    }

    markerLayer.clearLayers();
    markersRef.current.clear();

    offers.forEach((offer) => {
      const marker = L.marker(
        [offer.location.latitude, offer.location.longitude],
        {
          icon: offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon,
          title: offer.title,
          alt: offer.title,
        }
      );
      markersRef.current.set(offer.id, marker);
      markerLayer.addLayer(marker);
    });

    if (offers.length > 1) {
      const bounds = L.latLngBounds(offers.map((offer) => L.latLng(offer.location.latitude, offer.location.longitude)));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
    } else if (offers.length === 1) {
      const { latitude, longitude } = offers[0].location;
      map.setView([latitude, longitude], 13);
    }
  }, [activeOfferId, offers]);

  useEffect(() => {
    markersRef.current.forEach((marker, offerId) => {
      marker.setIcon(offerId === activeOfferId ? activeMarkerIcon : defaultMarkerIcon);
    });
  }, [activeOfferId]);

  return <section className={className} ref={mapContainerRef} aria-label="Map of rental offers" />;
}

export default OffersMap;
