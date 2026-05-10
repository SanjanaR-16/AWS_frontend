const API_PATHS = {
  product: import.meta.env.VITE_PRODUCT_SERVICE_URL || "https://YOUR_API_ID.execute-api.ap-south-1.amazonaws.com/prod",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: import.meta.env.VITE_IMPORT_SERVICE_URL || "https://YOUR_IMPORT_API_ID.execute-api.ap-south-1.amazonaws.com/prod",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
