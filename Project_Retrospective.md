# 🔍 Project Retrospective: Titan Design System

## 📌 Overview
Building Titan was an exercise in balancing extreme information density with high-level accessibility for the "Storage, Hybrid Cloud, and AI" domain. This document outlines the technical hurdles, strategic pivots, and future scalability of the system.

---

## 🚩 Challenges & Strategic Pivots

### 1. The "Density vs. Legibility" Paradox
**The Problem:** In initial sprints, the high-density layout for Storage Node tables felt "cramped." Monitoring 50+ rows of real-time data caused visual fatigue and scanning errors.
**The Solution:** * **Tabular Alignment:** I implemented a `font-data` stack using **JetBrains Mono**. By ensuring numerical alignment (tabular numbers), metrics like `1.2 TB` and `850 GB` aligned vertically by decimal point, reducing cognitive load.
* **Vertical Economy:** I moved from an 8px to a **4px baseline grid**, allowing for a "Compact" mode that reduced row heights by 33% without sacrificing touch/click targets for desktop users.

### 2. Figma Variable Constraints
**The Problem:** Figma Variables currently lack native support for multi-layered shadows and complex gradients within a single mode.
**The Solution:** * **Elevation Aliasing:** I created an "Elevation Alias" system. Instead of hardcoding shadows, I used a semantic token `--elevation-surface`. 
* **Contextual Adaptation:** In Light Mode, this token renders a soft blur. In Dark Mode, where shadows are invisible, I re-mapped the token to a **1px subtle inner-glow**, creating the illusion of depth through "rim lighting."



---

## 🛠 Technical Lessons Learned

### Logic-First Architecture
The biggest takeaway was the necessity of a **Headless Bridge**. In early iterations, I baked too much styling logic into the React components. By moving to **React Aria**, I decoupled the "Behavior" (keyboard navigation, ARIA states) from the "Skin" (Tailwind tokens). This ensures that if the brand changes, the complex accessibility logic remains intact.

### The Power of Semantic Naming
Moving away from descriptive names (e.g., `blue-500`) to semantic names (e.g., `action-primary`) was a turning point. It transformed the codebase from a static set of components into a dynamic engine capable of handling any number of modes (High Contrast, Light, Dark) with zero code changes.

---

## 🚀 Future Roadmap: Titan 2.0

If I were to scale this system further in a production environment, the following would be my priorities:

1.  **Automated Token Pipeline:** Implementing **Style Dictionary** with a GitHub Action to automatically transform Figma JSON exports into CSS Variables and TypeScript types.
2.  **Visual Regression Testing:** Integrating **Chromatic** to catch unintentional UI shifts across the Light and Dark modes during Pull Requests.
3.  **Predictive Layouts:** Exploring "AI-Generated Layouts" that use the existing atomic tokens to rearrange dashboard modules based on the severity of a system outage or AI training failure.

---

## 🏁 Conclusion
Titan proves that a Design System is not just a library of buttons, but a **technical product** that requires a deep understanding of the end-user's environment—in this case, the high-stakes world of infrastructure management.