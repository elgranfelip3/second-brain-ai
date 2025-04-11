# Second Brain AI 🧠

Una aplicación moderna para gestionar conocimientos, ideas y tareas con la ayuda de inteligencia artificial. Desarrollada con Next.js 14, TypeScript y Tailwind CSS, Second Brain AI te ayuda a organizar tu mente digital con una interfaz limpia e intuitiva y asistencia de IA integrada.

![Second Brain AI](https://i.imgur.com/YourImageHere.png)

## 🚀 Estado del Proyecto

**Versión actual:** v1.0.0 (Fase 1 completada)

[![GitHub tag](https://img.shields.io/github/v/tag/elgranfelip3/second-brain-ai)](https://github.com/elgranfelip3/second-brain-ai/tags)
[![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellowgreen)](https://github.com/elgranfelip3/second-brain-ai)

### Logros Actuales:
- ✅ Configuración completa del entorno de desarrollo
- ✅ Implementación de la interfaz principal con Tailwind CSS
- ✅ Componentes de barra lateral y contenido principal
- ✅ Integración del widget de chat con OpenAI
- ✅ Estructura de proyecto organizada siguiendo mejores prácticas

### Próximos Pasos:
- 🔄 Autenticación de usuarios
- 🔄 Almacenamiento persistente de datos
- 🔄 Refinamiento del modelo de IA para tareas específicas

## ✨ Características

- **Organización de conocimiento**: Gestiona notas, tareas y documentos en un solo lugar
- **Asistente de IA**: Chat con OpenAI integrado en la esquina inferior derecha
- **Interfaz moderna**: Diseño limpio y responsivo con Tailwind CSS
- **Sugerencias inteligentes**: Recomendaciones personalizadas basadas en tu contenido
- **Experiencia optimizada**: Rendimiento optimizado con Next.js 14 App Router

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14, React 18, TypeScript
- **Estilos**: Tailwind CSS
- **IA**: OpenAI API (GPT-3.5 Turbo)
- **Estructura**: Organización modular por características

## 🚀 Instalación y uso

### Requisitos previos
- Node.js 18.0 o posterior
- Cuenta de OpenAI con API key

### Pasos
1. Clona el repositorio
   ```bash
   git clone https://github.com/elgranfelip3/second-brain-ai.git
   cd second-brain-ai
   ```

2. Instala las dependencias
   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` con tu API key de OpenAI
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=tu_api_key_aqui
   ```

4. Inicia el servidor de desarrollo
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del proyecto

```
second-brain-ai/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── app/            # App Router de Next.js
│   │   ├── components/ # Componentes reutilizables
│   │   │   ├── ChatWidget.tsx    # Widget de chat con IA
│   │   │   ├── MainContent.tsx   # Contenido principal
│   │   │   └── Sidebar.tsx       # Barra lateral
│   │   ├── globals.css   # Estilos globales
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Página principal
├── .env.local          # Variables de entorno (no incluido en el repo)
├── next.config.mjs     # Configuración de Next.js
├── package.json        # Dependencias y scripts
├── postcss.config.js   # Configuración de PostCSS
├── tailwind.config.js  # Configuración de Tailwind CSS
└── tsconfig.json       # Configuración de TypeScript
```

## 🔜 Próximas características

- Sincronización con almacenamiento en la nube
- Sistema de etiquetas avanzado
- Integraciones con servicios de terceros (Notion, Google Drive)
- Búsqueda semántica potenciada por IA
- Personalización avanzada de la interfaz
- Modo offline con sincronización posterior

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, siente libre de abrir un issue o enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. 