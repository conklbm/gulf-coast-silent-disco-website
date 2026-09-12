"""Build gcsd-site.zip from dist/ for a manual Netlify drop deploy.
Uses forward-slash paths (PowerShell Compress-Archive writes backslashes, which Netlify rejects)
and includes only the headers section of netlify.toml (no build section, no host redirect)."""
import os, zipfile
OUT = 'gcsd-site.zip'
if os.path.exists(OUT):
    os.remove(OUT)
with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk('dist'):
        for f in files:
            p = os.path.join(root, f)
            if f == 'netlify.toml':
                continue
            z.write(p, os.path.relpath(p, 'dist').replace(os.sep, '/'))
    headers = '[[headers]]' + open('netlify.toml', encoding='utf-8').read().split('[[headers]]', 1)[1]
    z.writestr('netlify.toml', headers)
print(OUT, os.path.getsize(OUT), 'bytes')
