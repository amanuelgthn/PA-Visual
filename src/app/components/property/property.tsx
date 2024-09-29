import React from 'react'
import { Property } from '../../Types/property/property'

interface PropertyListProps {
  properties: Property[]
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div>
      {properties.length > 0 ? (
        <ul>
          {properties.map((property) => (
            <li key={property.property_id}>
              <img
                src={property.primaryImage}
                alt={`Property ${property.property_id}`}
              />
              <p>Price: ${property.listing_price}</p>
              <p>Bedrooms: {property.num_bedrooms}</p>
              <p>Bathrooms: {property.num_bathrooms}</p>
              <p>Country: {property.country}</p>

              {/* Render Additional Features */}
              {property.additionalFeatures && (
                <div>
                  {property.additionalFeatures.has_gym && <p>Gym: Available</p>}
                  {property.additionalFeatures.has_pool && (
                    <p>Pool: Available</p>
                  )}
                  {property.additionalFeatures.has_garden && (
                    <p>Garden: Available</p>
                  )}
                  {property.additionalFeatures.has_garage && (
                    <p>Garage: Available</p>
                  )}
                  {property.additionalFeatures.has_steam && (
                    <p>Steam Room: Available</p>
                  )}
                  {property.additionalFeatures.has_jacuzzi && (
                    <p>Jacuzzi: Available</p>
                  )}
                  {property.additionalFeatures.has_sauna && (
                    <p>Sauna: Available</p>
                  )}
                  {property.additionalFeatures.has_balcony && (
                    <p>Balcony: Available</p>
                  )}
                </div>
              )}

              {/* Render Property Status */}
              {property.status && (
                <div>
                  {property.status.available && <p>Status: Available</p>}
                  {property.status.sold && <p>Status: Sold</p>}
                  {property.status.currentStatus && (
                    <p>Current Status: {property.status.currentStatus}</p>
                  )}
                  {property.status.statusHistory &&
                    property.status.statusHistory.length > 0 && (
                      <div>
                        <p>Status History:</p>
                        <ul>
                          {property.status.statusHistory.map((history) => (
                            <li key={history.status_id}>
                              <p>
                                {history.status} (Updated at:{' '}
                                {new Date(history.updated_at).toLocaleString()})
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              )}

              {/* Render Promotion Details */}
              {property.promotion && (
                <div>
                  {property.promotion.promotion_name && (
                    <p>Promotion: {property.promotion.promotion_name}</p>
                  )}
                  {property.promotion.start_date && (
                    <p>
                      Promotion Starts:{' '}
                      {new Date(
                        property.promotion.start_date,
                      ).toLocaleDateString()}
                    </p>
                  )}
                  {property.promotion.end_date && (
                    <p>
                      Promotion Ends:{' '}
                      {new Date(
                        property.promotion.end_date,
                      ).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}

              {/* Render Additional Images */}
              {property.additionalImages &&
              property.additionalImages.length > 0 ? (
                <div>
                  {property.additionalImages.map((img, index) => (
                    <img
                      key={index}
                      src={img.base64Image}
                      alt={`Additional Image ${index}`}
                    />
                  ))}
                </div>
              ) : (
                <p>No additional images available.</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  )
}

export default PropertyList
