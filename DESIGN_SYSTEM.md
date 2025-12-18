# 📘 Titan Design System Specification
**Domain:** Storage, Hybrid Cloud, & AI Infrastructure Management
**Version:** 1.0.0
**Status:** Portfolio Ready / Production Spec

---

## 1. Design Token Architecture (JSON)
These tokens are managed in Figma Variables and exported as JSON/CSS to drive the Tailwind CSS theme.

### 1.1 Color Palette (Semantic)
Titan uses a "Functional" naming convention to ensure Multi-Mode (Light/Dark) compatibility.

```json
{
  "color": {
    "background": {
      "canvas": { "value": "{gray.900}", "description": "Main dashboard background" },
      "surface": { "value": "{gray.800}", "description": "Card and container background" },
      "overlay": { "value": "rgba(0,0,0,0.6)", "description": "Modals and backdrops" }
    },
    "action": {
      "primary": { "value": "{blue.500}", "hover": "{blue.600}", "active": "{blue.700}" },
      "ai": { "value": "{indigo.400}", "description": "Specific to AI-compute tasks" }
    },
    "border": {
      "subtle": { "value": "{gray.700}", "description": "Default divider color" },
      "strong": { "value": "{gray.600}", "description": "High-contrast borders" }
    }
  }
}