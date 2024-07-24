const WeaponF = async() => {
    const WeaponUrl = 'https://valorant-api.com/v1/weapons';
    const response = await fetch(WeaponUrl);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    const json = await response.json();
    return json.data;
}

export default WeaponF;