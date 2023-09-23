import type { Schema, Attribute } from '@strapi/strapi';

export interface LocationAddress extends Schema.Component {
  collectionName: 'components_location_addresses';
  info: {
    displayName: 'Address';
    icon: 'address-card';
  };
  attributes: {
    province: Attribute.String;
    city: Attribute.String;
    district: Attribute.String;
    postal: Attribute.String;
    street: Attribute.String;
  };
}

export interface LocationGeoLocation extends Schema.Component {
  collectionName: 'components_location_geo_locations';
  info: {
    displayName: 'Geo Location';
    icon: 'map-pin';
  };
  attributes: {
    lat: Attribute.String;
    lng: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'location.address': LocationAddress;
      'location.geo-location': LocationGeoLocation;
    }
  }
}
