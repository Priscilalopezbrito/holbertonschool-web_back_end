export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8v = new Int8Array(buffer);

  if (position < 0 || position >= length) {
    throw new TypeError('Position outside range');
  }
  int8v[position] = value;
  return new DataView(buffer);
}
