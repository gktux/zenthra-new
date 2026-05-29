import urllib.request
import re

url = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req) as response:
        svg_data = response.read().decode('utf-8')
        with open('public/ataturk-clean.svg', 'w', encoding='utf-8') as f:
            f.write(svg_data)
        print("Successfully downloaded pure SVG!")
except Exception as e:
    print("Error:", e)
