# Migration map

| Original | New route | Notes |
| --- | --- | --- |
| `index.html` | `/` | Preserved hero, introductory themes, portrait, and consultation CTA; enhanced motion and responsive layout. |
| `about.html` | `/about/` | Preserved biography, approaches, languages, and photographs. |
| `individual-therapy.html` | `/individual-therapy/` | Preserved focus areas and working-together copy in accessible native accordions. |
| `couples-therapy.html` | `/couples-therapy/` | Preserved relationship-cycle and therapy approach content. |
| `faq.html` | `/faq/` | Preserved fees, insurance, location, cancellation, intake, and fit details. |
| `contact.html` | `/contact/` | Preserved Sessions Health booking and public email; no insecure static contact form added. |
| `zhongwen.html` | `/zh/` | Reorganized as the intentional Simplified Chinese route with localized metadata. |

The original ZIP contained static source, not Astro. Shared layout, navigation, footer, metadata, and motion were reconstructed as maintainable Astro components. No server-backed features or tracking scripts were present or added.
