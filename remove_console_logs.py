from pathlib import Path
import re

root = Path(r'c:\Users\USER\Mission_FE1b_RalyWijaya_19069\src')
exts = {'.js', '.jsx', '.ts', '.tsx'}

for path in root.rglob('*'):
    if path.is_file() and path.suffix.lower() in exts:
        try:
            text = path.read_text(encoding='utf-8')
        except Exception:
            continue

        original = text
        text = re.sub(r'^\s*//\s*console\.log\s*\(.*$', '', text, flags=re.M)
        text = re.sub(r'console\.log\s*\([^\n]*\)', 'undefined', text)
        text = re.sub(r'\n{3,}', '\n\n', text)

        if text != original:
            path.write_text(text, encoding='utf-8')
