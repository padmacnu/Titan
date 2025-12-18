# 🛸 Titan: High-Density Cloud & AI Design System

**Titan** is a professional-grade Design System and Headless React Component Library engineered for data-intensive environments (Hybrid Cloud, AI Training, and Storage Management). This project positions design as a functional extension of engineering, bridging the gap between high-fidelity Figma variables and accessible, logic-first React code.

---

## 🧠 The "Systems Thinker" Approach
This system is built to solve the "Information Density" problem inherent in storage and AI infrastructure. Unlike generic UI kits, Titan focuses on:
* **Vertical Economy:** Maximizing screen real estate for power users monitoring thousands of nodes.
* **Logic-First Components:** Separating behavior (Accessibility/WAI-ARIA) from visual styling (Tailwind/Tokens).
* **Domain Expertise:** Specific patterns for AI training status, cloud latency metrics, and hardware health.

---

## 🏗 System Architecture

### 1. Multi-Tier Token Strategy (Figma Variables)
Titan utilizes a three-tier variable structure to ensure the system is themeable and maintainable.
* **Global Tokens (Primitives):** The raw palette (e.g., `Blue-500`, `Gray-800`).
* **Alias Tokens (Semantic):** Functional naming (e.g., `surface-primary`, `status-ai-processing`). This enables **Light/Dark mode** via Figma Variable modes.
* **Component Tokens:** Specific overrides for complex elements like `data-table-row-hover`.

### 2. High-Density Logic
Built on a **4px baseline grid**, Titan allows for extreme data clustering without sacrificing legibility.
* **Compact Mode:** A dedicated variable set that reduces vertical padding across the dashboard for "Pro" views.
* **Monospaced Data:** Custom typography tokens optimized for tabular storage metrics (`TB`, `GB/s`, `μs`) to ensure numerical alignment.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Design** | Figma (Auto Layout 5.0) | Variables, Component Properties, and Prototyping. |
| **Logic** | [React Aria](https://react-spectrum.adobe.com/react-aria/) | Headless, WAI-ARIA compliant hooks for complex UI logic. |
| **Styling** | Tailwind CSS | Utility-first styling mapped to Figma Design Tokens. |
| **Documentation** | Storybook | Component playground and API documentation. |

---

## 🚀 Key Features

### ⚛️ Atomic to Molecular Evolution
Every pattern is documented from its smallest part to its most complex state:
* **Atom:** `StatusDot` (CSS-driven pulse animation for AI jobs).
* **Molecule:** `ResourceIndicator` (StatusDot + Monospace Capacity Text).
* **Organism:** `StorageNodeCard` (ResourceIndicator + Sparkline + Action Menu).
* **Template:** `Global Operations Dashboard`.

### 🌓 Multi-Mode Support
Using Figma Variables and Tailwind's `dark:` utility, the system supports:
* **Cloud Blue (Light):** Optimized for high-visibility daytime monitoring.
* **Deep Space (Dark):** High-contrast mode for 24/7 SOC/NOC environments.

### ♿ Accessibility First
* **Keyboard Navigation:** Full "Grid" keyboard interaction for Data Tables (Arrow key navigation).
* **Screen Readers:** Semantic `aria-labels` for AI status visualizations (e.g., a pulsing blue dot is read as "AI Model: Training in Progress").
* **Contrast:** All semantic color pairings pass WCAG 2.1 AA (4.5:1) standards.

---

## 📦 Engineering Handover Protocol

The Figma file includes a dedicated **"Developer Specs"** page containing:
1. **Variable Maps:** Mapping Figma Variable IDs to CSS/Tailwind variables.
2. **State Matrixes:** Every component documented in `Default`, `Hover`, `Focus`, `Active`, and `Loading` (Skeleton).
3. **Slot Documentation:** Defining where developers can inject custom visualization logic (Charts/Sparklines) within complex patterns.

---

## 📂 Project Structure

```bash
├── .storybook          # Storybook configuration & documentation
├── src
│   ├── tokens          # Design tokens (JSON) exported from Figma
│   ├── components      # Headless React components
│   │   ├── atoms       # Buttons, Badges, Status Dots...
│   │   ├── molecules   # ResourceIndicators, SearchBars...
│   │   └── organisms   # DataTables, GlobalNav, Modals...
│   ├── hooks           # Custom React Aria implementations
│   └── styles          # Tailwind global config and token mapping
└── README.md