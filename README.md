# 🌱 Monorepo: EcoConnect & Wetter-App + UI Library (Atomic Design)

Dieses Monorepo enthält eine modulare Angular-Umgebung mit klarer Struktur nach dem **Atomic Design Prinzip**.  
Es dient als gemeinsame Basis für mehrere Projekte - aktuell **EcoConnect** und eine **Wetter-App** -  
und beinhaltet zusätzlich eine wiederverwendbare **UI-Komponenten-Bibliothek**.

Zur Dokumentation, Entwicklung und visuellen Vorschau der UI-Komponenten wird **Storybook** eingesetzt.  
Damit können alle Atome, Moleküle und Organismen isoliert betrachtet, getestet und dokumentiert werden.  
So wird ein konsistentes Erscheinungsbild und effiziente Zusammenarbeit zwischen Entwicklung und Design garantiert.

## 🌦️ Wetter-App

Die Wetter-App demonstriert die praktische Anwendung der Atomic Components in einem realen Projekt. Sie nutzt die OpenWeather API über ein separates Node.js Backend und zeigt aktuelle Wetterdaten für beliebige Städte an.

**Technische Features:**
- 🏗️ **Atomic Design Architektur** - Aufgebaut mit wiederverwendbaren Atoms und Molecules
- 🔗 **Backend-Integration** - Kommunikation mit separatem Node.js Server
- 🌐 **OpenWeather API** - Echte Wetterdaten für weltweite Städte
- 📱 **Responsive Design** - Optimiert für Desktop und Mobile
- 🎨 **Design System** - Konsistente UI durch gemeinsame Component Library
- 🔍 **Search-Funktionalität** - Dynamische Stadtsuche mit Event-driven Architecture

**Architektur:**
- **Smart Components** - App-Komponente als Container für Geschäftslogik
- **Dumb Components** - Wiederverwendbare UI-Komponenten ohne Business Logic
- **Service Layer** - Saubere Trennung von API-Calls und UI
- **TypeScript Models** - Type-sichere Datenstrukturen für OpenWeather API

Die App zeigt, wie das Atomic Design System effizient für verschiedene Anwendungsfälle eingesetzt werden kann, während gleichzeitig Code-Wiederverwendung und Konsistenz gewährleistet werden.