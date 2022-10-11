use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn feb(number: i32) -> i32 {
    if number < 2 {
        return number;
    }
    return feb(number - 1) + feb(number - 2);
}