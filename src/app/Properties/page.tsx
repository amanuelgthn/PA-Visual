import { fetchProperties } from '../GETproperty'
import { Property } from '../Types/property/property'

const PropertiesPage = async () => {
  let properties: Property[] = []

  try {
    properties = await fetchProperties()
  } catch (error) {
    console.error('Error fetching properties:', error)
  }

  return (
    <div className='wrapper'>
      <h1>Property Listings</h1>
      <div className='wrapper-assist'>
        {properties.length > 0 ? (
          <ul>
            {properties.map((property) => (
              <li key={property.property_id}>
                {property.primaryImage && (
                  <img
                    src={property.primaryImage}
                    alt={`Property ${property.property_id}`}
                  />
                )}
                <p>Price: ${property.listing_price}</p>
                <p>Bedrooms: {property.num_bedrooms}</p>
                <p>Bathrooms: {property.num_bathrooms}</p>
                <p>Country: {property.country}</p>

                {/* Display Additional Images */}
                {property.additionalImages &&
                property.additionalImages.length > 0 ? (
                  <div>
                    {property.additionalImages.map((img, index) => (
                      <img
                        key={index}
                        src={img.base64Image}
                        alt={`Additional Image ${index}`}
                        style={{
                          width: '100px',
                          height: 'auto',
                          margin: '5px',
                        }}
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
    </div>
  )
}

export default PropertiesPage
