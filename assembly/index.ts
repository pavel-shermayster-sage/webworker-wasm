// The entry file of your WebAssembly module.

export function feb(num: i32): i32 {
  if (num < 2) return num;
  return feb(num - 1) + feb(num - 2);
}
