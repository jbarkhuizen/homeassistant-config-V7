if "codeowners" in data:
    print(f"OK: {path} already has codeowners")
    return False

# Backup
bak = path.with_suffix(path.suffix + ".bak")
if not bak.exists():
    bak.write_text(text, encoding="utf-8")

# Insert codeowners (keep other keys)
data["codeowners"] = [CODEOWNER]

# Write back (pretty format)
path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"UPDATED: {path}")
print("New content:")
print(json.dumps(data, indent=2, ensure_ascii=False))
return True
