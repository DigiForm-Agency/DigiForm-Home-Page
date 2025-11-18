# Design Guidelines: Local Marketing Agency Landing Page

## Design Approach

**Reference-Based Approach:** Drawing inspiration from modern agency sites like Vercel, Linear, and creative portfolios. The design must demonstrate design excellence to build credibility with potential clients while remaining approachable for local SMBs.

**Key Principles:**
- Professional sophistication with warmth
- Visual proof through portfolio work
- Clear service communication
- Trust-building through transparency

## Typography

**Font Stack:**
- Headings: Inter (700, 600) - Modern, confident
- Body: Inter (400, 500) - Excellent readability
- Accents: 500 weight for emphasis

**Hierarchy:**
- Hero headline: text-5xl md:text-7xl font-bold
- Section headings: text-3xl md:text-5xl font-bold
- Subsections: text-2xl md:text-3xl font-semibold
- Body text: text-base md:text-lg
- Captions: text-sm

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component spacing: p-6 md:p-8
- Section padding: py-16 md:py-24
- Element gaps: gap-6 md:gap-8

**Container Strategy:**
- Full-width sections with max-w-7xl centered containers
- Content max-width: max-w-6xl
- Form content: max-w-2xl

## Page Structure

### 1. Hero Section (80vh min)
- Large background image: Modern office/team collaboration or abstract tech aesthetic
- Overlay with gradient for text readability
- Headline communicating value proposition
- Subheading elaborating on services
- Primary CTA button (blur backdrop treatment when on image)
- Trust indicator: "Trusted by 50+ local businesses" with small logos

### 2. Services Section
- 2x2 grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each service card includes:
  - Icon from Heroicons
  - Service name
  - 2-3 sentence description
  - Key benefits list (3-4 items)
- Cards with subtle hover elevation

### 3. Portfolio Gallery
- Masonry-style grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each portfolio item:
  - Featured image of client work
  - Client name/business type
  - Brief project description (2-3 sentences)
  - Results/metrics achieved
  - "View Case Study" link
- 6-9 portfolio pieces showcased

### 4. About Us Section
- Split layout (2-column on desktop, stacked mobile)
- Left: Team photo or office image
- Right: Agency story, values, and mission
- Include years of experience, number of clients served
- Small team member highlights with photos (3-4 people)

### 5. Contact/Inquiry Form Section
- 2-column layout (form + contact info)
- Form fields:
  - Name, Email, Phone
  - Business Name
  - Service Interest (multi-select checkboxes)
  - Message textarea
  - Submit CTA
- Contact sidebar:
  - Office location
  - Phone/email
  - Business hours
  - Response time expectation

### 6. Footer
- 3-column layout
- Column 1: Logo, tagline, social links
- Column 2: Quick links (Services, Portfolio, About, Contact)
- Column 3: Newsletter signup with context
- Bottom bar: Copyright, Privacy, Terms

## Component Design

**Buttons:**
- Primary: Solid, rounded-lg, px-8 py-4
- Secondary: Outline variant
- Hero CTAs: Backdrop blur when on images (bg-white/20 backdrop-blur-md)

**Cards:**
- Rounded corners: rounded-xl
- Subtle shadows: shadow-lg
- Padding: p-6 md:p-8
- Border treatment on hover

**Form Inputs:**
- Rounded: rounded-lg
- Clear labels above inputs
- Validation states
- Padding: px-4 py-3

## Images

**Required Images:**
1. **Hero Background:** Modern workspace, team collaboration, or abstract tech (full-width, high quality)
2. **Portfolio Items:** 6-9 client work screenshots/photos showing websites, social media, etc.
3. **About Us:** Team photo or professional office environment
4. **Service Icons:** Use Heroicons for consistency

**Image Treatment:**
- Hero: Gradient overlay for text contrast
- Portfolio: Consistent aspect ratio (16:9 or 4:3)
- About: Natural, authentic photos avoiding stock photo feel

## Animations

**Minimal Motion:**
- Fade-in on scroll for sections
- Hover elevation on cards (transform: translateY(-4px))
- Smooth page scrolling
- No distracting or excessive animations

## Mobile Responsiveness

- All multi-column layouts stack to single column on mobile
- Increased touch targets (min 44px)
- Hero text scaling appropriately
- Portfolio grid: 1 column mobile, 2 tablet, 3 desktop