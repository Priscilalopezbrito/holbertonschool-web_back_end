export default function updateUniqueItems(map) {
  // if argument is not a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // For each entry of the map where quantity is 1, update to 100
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
