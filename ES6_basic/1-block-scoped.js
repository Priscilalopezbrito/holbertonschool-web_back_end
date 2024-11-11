export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // A test
    const task = true;
    // A test
    const task2 = false;
  }

  return [task, task2];
}