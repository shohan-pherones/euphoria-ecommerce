use std::fs::File;
use std::io::{Write, BufWriter};

fn main() {
    // Open the `drop_caches` file
    let file = File::open("/proc/sys/vm/drop_caches").expect("Failed to open file");

    // Write the value 3 to the file to clear the cache
    let mut writer = BufWriter::new(file);
    writer.write_all(b"3").expect("Failed to write to file");
}