Maybe additionally cache a lightweight hash, and check this on write

Or maybe better:
On page load, generate a guid/hash
Keep this in memory and also write it to storage
On Write, check the storage value
If it ever mismatches, then you know that another tab has intervened
