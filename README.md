# FAU Coding Club Landing Page

A modern, professional landing page for the FAU Coding Club for High School Students, built with Next.js, React, and Tailwind CSS using official Hack Club branding and design guidelines.

## 🎨 Design Features

- **Official Hack Club Branding**: Uses authentic Hack Club colors, fonts, and design patterns
- **Modular Activity Cards**: Easy-to-update weekly activity planning system
- **Responsive Design**: Looks great on all devices
- **Professional Animations**: Smooth, modern UI interactions
- **Accessibility Focused**: Built with semantic HTML and ARIA standards

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization Guide

### Weekly Activities
The weekly activities are stored in the `weeklyActivities` array in `pages/index.tsx`. To modify:

```typescript
const weeklyActivities: WeeklyActivity[] = [
  {
    id: 'unique-id',
    title: 'Activity Title',
    description: 'Activity description',
    icon: IconComponent, // From lucide-react
    type: 'intro' | 'advanced' | 'competition' | 'social'
  },
  // Add more activities...
]
```

### Contact Information
Update contact details in the footer and join section:
- Email: Replace `faucodingclub@example.com`
- Google Forms: Replace placeholder URLs with actual form links
- Discord/Social links: Add your actual social media URLs

### Meeting Schedule
Update meeting information in the hero section:
- Day/Time: Currently shows "Day TBD • 6-7 PM"
- Location: Currently shows "Boca Raton, FL (Virtual Meetings)"

## 🎯 Key Sections

### 1. Hero Section
- Club introduction
- Meeting details
- Call-to-action buttons
- Hack Club affiliation badge

### 2. Weekly Activities
- Modular activity cards
- Interactive selection
- Easy to modify/reorder
- Type-based color coding

### 3. Features Section
- Hack Club benefits
- FAU partnerships
- Travel compensation info
- Free resources through YSWS

### 4. About Hack Club
- Global network stats
- 501(c)(3) information
- Community highlights

### 5. Join Section
- Sign-up forms
- Contact information
- Clear next steps

## 🌈 Color Scheme (Official Hack Club Colors)

```css
/* Primary Colors */
--hc-red: #ec3750
--hc-orange: #ff8c37
--hc-yellow: #f1c40f
--hc-green: #33d6a6
--hc-cyan: #5bc0de
--hc-blue: #338eda
--hc-purple: #a633d6

/* Neutrals */
--hc-black: #1f2d3d
--hc-slate: #3c4858
--hc-muted: #8492a6
--hc-smoke: #e0e6ed
--hc-snow: #f9fafc
--hc-white: #ffffff
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technical Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Phantom Sans (Official Hack Club font)
- **Animations**: CSS transitions and keyframes

## 📋 TODO Items

- [ ] Replace placeholder Google Form URLs with actual forms
- [ ] Add actual contact email address
- [ ] Set up Discord server and add invite link
- [ ] Determine weekly meeting day/time
- [ ] Add GitHub organization link
- [ ] Configure analytics (Google Analytics/Plausible)
- [ ] Set up contact form backend
- [ ] Add event calendar integration

## 🤝 Contributing

This landing page is designed to be easily maintainable by club members:

1. **Content Updates**: Most content can be updated by editing the arrays and strings in `pages/index.tsx`
2. **Styling**: Use Tailwind utility classes for quick design changes
3. **New Sections**: Follow the existing component pattern for consistency

## 📄 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Support

For questions about customizing this landing page:
- Check the Hack Club [Slack community](https://hackclub.com/slack)
- Reference [Hack Club's design system](https://theme.hackclub.com/)
- Review [Tailwind CSS documentation](https://tailwindcss.com/docs)

---

Built with ❤️ for the FAU Coding Club community
