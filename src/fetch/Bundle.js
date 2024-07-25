const BundleF = async () => {
  const bundleUrl = "https://valorant-api.com/v1/bundles";
  const response = await fetch(bundleUrl);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json.data;
};

export default BundleF;
