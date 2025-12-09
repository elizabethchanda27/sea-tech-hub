# SEA Tech Access Hub

A comprehensive web application designed to teach Southeast Asian communities in North Carolina how to navigate essential digital systems, with a focus on healthcare and safety-net programs.

## Features

### 🌏 Page A - Tech & SEA Communities in NC
- Information on how SEA communities encounter tech barriers
- Historical context and research findings from annotated bibliography
- Explanation of why MyChart and NC systems matter
- Community programs and events information

### 💻 Page B - Digital Systems Guidance
- Step-by-step guides for using MyChart
- Instructions for navigating Medicaid and NC safety-net systems
- Scam prevention and recognition
- Basic digital skills tutorials

### 🛠 Page C - Interactive Tools
- **Transportation Widget**: Find transportation options to access healthcare and community services
- **Digital Navigation Chatbot**: Get instant help with questions about MyChart, Medicaid, scams, and digital skills

### 📚 Resources Page
- Government and benefits resources
- Healthcare resources
- Digital literacy and learning resources
- Safety and scam prevention resources
- Community and cultural resources

## Technology Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
sea-tech-hub/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── tech-sea-communities/    # Page A
│   ├── digital-systems/         # Page B
│   ├── interactive-tools/       # Page C
│   └── resources/               # Resources page
├── components/
│   ├── Navbar.tsx               # Navigation component
│   └── Footer.tsx               # Footer component
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Key Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessible**: Built with accessibility in mind
- **Multilingual Ready**: Structure supports future translation
- **Community-Focused**: Content specifically tailored for Southeast Asian communities in NC

## Research Sources

The informational content is based on research from:
- Urban Institute (2023) - Safety net access challenges for immigrant families
- DeLange Martinez et al. (2024) - Technology acceptance among Asian American older adults
- Urban Institute (2023) - Hmong immigrant families' access to safety net programs
- Kolano & Dávila (2019) - Transformative learning of refugee girls in NC

## License

This project is created for educational and community service purposes.

