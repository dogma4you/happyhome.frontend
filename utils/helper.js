import axios from "@/lib/axios";

export function formatFileSize(sizeInBytes) {
  const kb = 1024;
  const mb = kb * 1024;

  if (sizeInBytes >= mb) {
    return (sizeInBytes / mb).toFixed(2) + " MB";
  } else if (sizeInBytes >= kb) {
    return (sizeInBytes / kb).toFixed(2) + " KB";
  } else {
    return sizeInBytes + " Bytes";
  }
}

export function formatCurrency(currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(currency);
}

export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function calculateDuration(endDate) {
  const now = new Date();
  const end = new Date(endDate);
  const durationInSeconds = Math.floor((end - now) / 1000);
  return formatDuration(durationInSeconds);
}

function formatDuration(durationInSeconds) {
  const days = Math.floor(durationInSeconds / (24 * 60 * 60));
  const hours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
  const seconds = durationInSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function getAddressData(value) {
  function getValueFromAddressComponent(type, name) {
    const addressData = value.address_components.find(({ types }) =>
      types.includes(type),
    );
    if (addressData) {
      return addressData[name];
    }
    return undefined;
  }
  const postalCode = getValueFromAddressComponent("postal_code", "long_name");
  const country = getValueFromAddressComponent("country", "long_name");
  const streetNumber = getValueFromAddressComponent(
    "street_number",
    "long_name",
  );
  const street = getValueFromAddressComponent("route", "long_name");
  const city = getValueFromAddressComponent(
    "administrative_area_level_1",
    "long_name",
  );
  const state = getValueFromAddressComponent(
    "sublocality_level_1",
    "long_name",
  );
  const formatted_address = value.formatted_address;
  const { lat, lng } = value.geometry.location;

  return {
    country,
    city,
    state,
    formatted_address,
    postal_code: postalCode,
    street: `${streetNumber || ""} ${street}`,
    lat: lat(),
    lng: lng(),
  };
}

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.set(`files`, file);

  try {
    return await axios.post("/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const getUploadedFiles = async (files) => {
  try {
    return axios.post("/files/details", { files });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAddressValue = (address, isUnlocked) => {
  if (isUnlocked) return address.formatted_address;

  const { country, state, city, postal_code } = address || {};
  const stateValue = state || "";
  const cityValue = city || "";
  const countryValue = country || "";
  const postalCodeValue = postal_code || "";

  return `${countryValue} ${stateValue} ${cityValue} ${postalCodeValue}`;
};

export const getAreasData = (areas) => {
  return areas?.reduce(
    (acc, value) => {
      acc.bathrooms = acc.bathrooms + value.bathrooms;
      acc.bedrooms = acc.bedrooms + value.bedrooms;
      acc.square_feet = acc.square_feet + value.square_feet;
      return acc;
    },
    {
      bathrooms: 0,
      bedrooms: 0,
      square_feet: 0,
    },
  );
};
