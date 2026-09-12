"""Build gcsd-site.zip from dist/ for a manual Netlify drop deploy.
Uses forward-slash paths (PowerShell Compress-Archive writes backslashes, which Netlify rejects)
and includes netlify.toml minus the [build] section (redirects + headers apply to drop deploys)."""
import os
import zipfile

OUT = 'gcsd-site.zip'
if os.path.exists(OUT):
    os.remove(OUT)
with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk('dist'):
        for f in files:
            if f == 'netlify.toml':
                continue
            p = os.path.join(root, f)
            z.write(p, os.path.relpath(p, 'dist').replace(os.sep, '/'))
    toml = open('netlify.toml', encoding='utf-8').read()
    z.writestr('netlify.toml', toml.split('\n\n', 1)[1])  # drop the leading [build] block
print(OUT, os.path.getsize(OUT), 'bytes')
