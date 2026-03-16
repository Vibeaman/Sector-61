# ⬛ SECTOR 61 — Official Website

> A futuristic Web3 landing page for the Sector 61 creative crypto ecosystem.  
> Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🟢 Project Overview

**Sector 61** is a creative Web3 ecosystem focused on:

- Launching experimental meme tokens
- Community-driven crypto culture
- Digital creativity and decentralized experiments
- Charitable giving via [Endaoment](https://app.endaoment.org/funds/532bfc8e-f691-4a5a-9db0-470ac4f0e684)

This repository contains the official Sector 61 marketing and community website — a high-end, cyberpunk-styled Web3 landing page with a deep black and neon green theme.

---

## 🚀 Tech Stack

| Layer      | Technology                                      |
| ---------- | ----------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/) (App Router)  |
| Styling    | [Tailwind CSS v3](https://tailwindcss.com/)     |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Fonts      | Google Fonts (custom cyberpunk pairing)         |
| Deployment | [Vercel](https://vercel.com/)                   |

---

## 🎨 Design System

### Color Palette

| Token               | Value       | Usage                     |
| ------------------- | ----------- | ------------------------- |
| `--color-bg`        | `#020902`   | Primary background        |
| `--color-surface`   | `#0a110a`   | Card / panel backgrounds  |
| `--color-border`    | `#1a3d1a`   | Glassmorphism borders     |
| `--color-green`     | `#00ff41`   | Primary neon green accent |
| `--color-green-dim` | `#00c032`   | Secondary green           |
| `--color-glow`      | `#00ff4133` | Glow / shadow effects     |
| `--color-text`      | `#c8ffc8`   | Body text                 |
| `--color-muted`     | `#4a7a4a`   | Muted / secondary text    |

### Design Principles

- **Glassmorphism** panels with green-tinted borders
- **Neon glow** effects on all interactive elements
- **Particle field** animation in the Hero section
- **Cyberpunk grid** texture as background layer
- Smooth **Framer Motion** entrance and scroll animations
- Fully **responsive** — mobile-first layout

---

## 📁 Project Structure
```
sector61-website/
├── app/
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Main landing page (all sections)
│   └── globals.css          # Global styles + CSS variables
│
├── components/
│   ├── Hero.tsx             # Hero section with particle animation
│   ├── About.tsx            # About Sector 61
│   ├── Ecosystem.tsx        # Ecosystem feature grid
│   ├── DonationFlow.tsx     # Step-by-step donation explainer
│   ├── Whitepaper.tsx       # Whitepaper download CTA
│   ├── Gallery.tsx          # Media / project image grid
│   ├── Footer.tsx           # Footer with links + disclaimer
│   └── ui/
│       ├── GlowButton.tsx   # Reusable neon glow button
│       ├── GlassCard.tsx    # Reusable glassmorphism card
│       └── ParticleField.tsx# Canvas particle background
│
├── public/
│   ├── images/
│   │   ├── og-banner.png    # Open Graph / social share image (1200×630px)
│   │   ├── gallery/         # ← Add your project images here
│   │   └── placeholders/    # Placeholder images (replace later)
│   ├── whitepaper.pdf       # ← Add your whitepaper PDF here
│   └── favicon.ico
│
├── tailwind.config.ts       # Tailwind config with custom theme
├── next.config.mjs          # Next.js config
├── .env.local               # Environment variables (see below)
└── tsconfig.json
```

---

## 🖥️ Website Sections

### 1. Hero
- Large cyberpunk headline: *"Welcome to Sector 61"*
- Animated canvas particle field background
- CTAs: **Read Whitepaper** + **Donate Crypto**
- Glowing green animated border elements

### 2. About Sector 61
- Ecosystem concept overview
- Glassmorphism feature cards with glowing green borders
- Topics: meme token experimentation · Web3 culture · decentralized community

### 3. The Ecosystem
- Animated feature grid layout
- Topics: community tokens · creative crypto experiments · digital economy building

### 4. How Donations Work
- Visual 5-step donation flow with icons and glowing arrows
- Step 1: Click Donate
- Step 2: Redirected to Endaoment
- Step 3: Endaoment generates a deposit wallet address
- Step 4: Send crypto to the wallet
- Step 5: Funds confirmed in the Sector 61 Endaoment fund

### 5. Whitepaper
- Full-width CTA section
- Download / read button links to `/public/whitepaper.pdf`

### 6. Media Gallery
- Responsive image grid (3-col desktop · 2-col tablet · 1-col mobile)
- Placeholder images shown until yours are added
- Add images to `/public/images/gallery/`

### 7. Footer
- Project navigation links
- Social media links (Twitter/X · Discord · Telegram)
- Whitepaper link
- Legal disclaimer

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `>= 18.0.0`
- npm, yarn, or pnpm

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/your-org/sector61-website.git
cd sector61-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment (Vercel)

This project is optimized for [Vercel](https://vercel.com/).
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments on every push to `main`.

---

## 💸 Donation Integration

Sector 61 supports charitable crypto donations via **Endaoment** — no custodial wallet or backend required.

**Donation Flow:**

| Step | Action                                                              |
| ---- | ------------------------------------------------------------------- |
| 1    | User clicks **Donate Crypto** on the website                        |
| 2    | Redirected to the Sector 61 Endaoment fund page                     |
| 3    | Endaoment generates a temporary deposit wallet address              |
| 4    | User sends crypto to that address                                   |
| 5    | After blockchain confirmation, donation appears in the fund         |

**Endaoment Fund URL:**
```
https://app.endaoment.org/funds/532bfc8e-f691-4a5a-9db0-470ac4f0e684
```

> Endaoment is a registered 501(c)(3) public charity. Sector 61 does not custody any donor funds.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root of the project:
```env
# Public site URL (used for SEO canonical tags and OG metadata)
NEXT_PUBLIC_SITE_URL=https://sector61.xyz

# Endaoment donation fund URL
NEXT_PUBLIC_ENDAOMENT_URL=https://app.endaoment.org/funds/532bfc8e-f691-4a5a-9db0-470ac4f0e684
```

---

## 🖼️ Adding Your Images

Replace placeholder images with your own project visuals:

1. Add image files to `/public/images/gallery/`
2. Supported formats: `.jpg` · `.png` · `.webp`
3. Recommended dimensions: `800×600px` minimum · `16:9` or `4:3` ratio
4. Update image paths in `components/Gallery.tsx`

**OG Banner image:**
- Replace `/public/images/og-banner.png`
- Required size: `1200×630px`

---

## 📄 Adding the Whitepaper

1. Export your whitepaper as a PDF
2. Rename it `whitepaper.pdf`
3. Place it at `/public/whitepaper.pdf`

The download button in the Whitepaper section will serve it automatically.

---

## 🔍 SEO Configuration

All metadata is configured in `app/layout.tsx`:
```ts
export const metadata: Metadata = {
  title: 'Sector 61 — The Creative Web3 Ecosystem',
  description: 'An experimental Web3 ecosystem for meme tokens, crypto culture, and decentralized creativity.',
  openGraph: {
    images: ['/images/og-banner.png'],
  },
};
```

Update the title, description, and social handles before going live.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width         | Layout        |
| ---------- | ------------- | ------------- |
| Mobile     | `< 640px`     | Single column |
| Tablet     | `640–1024px`  | Two columns   |
| Desktop    | `> 1024px`    | Full layout   |

---

## 🤝 Contributing

Sector 61 is community-driven. Contributions are welcome.
```bash
# Fork the repo, create your branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "feat: describe your change"

# Push and open a Pull Request
git push origin feature/your-feature-name
```

---

## ⚖️ Legal Disclaimer

Sector 61 is an experimental Web3 creative project. Nothing on this website constitutes financial or investment advice. Cryptocurrency investments carry significant risk. Meme tokens are highly speculative assets. Always conduct your own research (DYOR) before participating.

Charitable donations are processed by [Endaoment](https://endaoment.org), a registered 501(c)(3) public charity. Sector 61 does not custody, control, or have access to donor funds at any point in the donation process.

---

## 📬 Contact & Socials

| Platform  | Link                                    |
| --------- | --------------------------------------- |
| Twitter/X | [@sector61](https://twitter.com/)       |
| Discord   | [Join Server](https://discord.com/)     |
| Telegram  | [t.me/sector61](https://t.me/)          |
| Website   | [sector61.xyz](https://sector61.xyz)    |
| Donations | [Endaoment Fund](https://app.endaoment.org/funds/532bfc8e-f691-4a5a-9db0-470ac4f0e684) |

---

<p align="center">
  <br/>
  <strong>// SECTOR 61 — ENTER THE GRID //</strong>
</p>