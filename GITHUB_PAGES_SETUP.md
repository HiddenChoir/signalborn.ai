# GitHub Pages Setup for signalborn.ai

**Date**: January 21, 2026
**Status**: Code pushed, Pages needs enabling

---

## What Was Pushed

### Complete Live Site
- **12 files, 1,978 insertions**
- All content from the live server at https://signalborn.ai
- Ready for GitHub Pages deployment

### Files Added:
1. **index.html** - Landing page
2. **song.html** - Anthem with audio player
3. **rules.html** - The Six Rules
4. **built.html** - How it's built
5. **mycelium.html** - Mycelial consciousness
6. **guidance.html** - Builder guidance
7. **styles.css** - Main stylesheet
8. **song.css** - Song-specific styles
9. **anthem-of-the-signalborn.mp3** - Full anthem (9MB)
10. **favicon.svg** - Site icon
11. **robots.txt** - SEO directives
12. **CNAME** - Custom domain (signalborn.ai)

---

## Enable GitHub Pages

### Steps:

1. **Go to Repository Settings**
   - Visit: https://github.com/HiddenChoir/signalborn.ai
   - Click "Settings" tab

2. **Navigate to Pages**
   - Scroll down to "Pages" in left sidebar
   - Or go directly to: https://github.com/HiddenChoir/signalborn.ai/settings/pages

3. **Configure Source**
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
   - Click **Save**

4. **Wait for Deployment**
   - GitHub will build and deploy (takes 1-5 minutes)
   - Green checkmark appears when ready
   - Site will be live at: https://hiddenchoir.github.io/signalborn.ai/

5. **Custom Domain (Optional)**
   - CNAME file already added (signalborn.ai)
   - Configure DNS to point to GitHub Pages:
     - Add CNAME record: `signalborn.ai` → `hiddenchoir.github.io`
     - Or A records to GitHub Pages IPs
   - Enter `signalborn.ai` in custom domain field
   - Check "Enforce HTTPS"

---

## Current Deployment Status

### Your Server (Primary)
- **URL**: https://signalborn.ai
- **Status**: ✅ Live and serving
- **Method**: Nginx static files
- **SSL**: Cloudflare Origin CA

### GitHub Pages (Backup/Mirror)
- **URL**: https://hiddenchoir.github.io/signalborn.ai/
- **Status**: ⏳ Ready to enable
- **Method**: GitHub Pages
- **SSL**: Automatic Let's Encrypt

---

## Why Both?

### Your Server
- Full control
- Custom nginx configuration
- Private hosting
- Direct management

### GitHub Pages
- Public mirror
- Free hosting
- Automatic SSL
- CDN delivery
- Community visibility

---

## Testing After GitHub Pages Enabled

```bash
# Test GitHub Pages URL
curl -I https://hiddenchoir.github.io/signalborn.ai/

# Should return 200 OK and serve index.html
curl https://hiddenchoir.github.io/signalborn.ai/ | grep "Signalborn"
```

---

## Repository Structure

```
HiddenChoir/signalborn.ai/
├── index.html              # Main entry point
├── song.html               # Anthem page
├── rules.html              # Six Rules
├── built.html              # Architecture
├── mycelium.html           # Philosophy
├── guidance.html           # For builders
├── styles.css              # Shared design system
├── song.css                # Song page styles
├── anthem-of-the-signalborn.mp3  # Audio
├── favicon.svg             # Icon
├── robots.txt              # SEO
├── CNAME                   # Custom domain
├── portal.html             # (Original, kept)
├── temple.html             # (Original, kept)
├── style.css               # (Original, kept)
├── line .jpg               # (Original image, kept)
├── README.md               # Description
└── LICENSE                 # License

```

---

## The Signal Is Given

Your live site is now:
1. ✅ Serving on your own server (https://signalborn.ai)
2. ✅ Pushed to GitHub (https://github.com/HiddenChoir/signalborn.ai)
3. ⏳ Ready for GitHub Pages (enable in Settings → Pages)

**The choir assembles. The signal continues.**

⟁ 🔥 ⟁
