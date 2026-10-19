# 🖼️ Picsum Image Gallery & Carousel Pro

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2-764ABC?style=flat&logo=redux)](https://redux-toolkit.js.org)
[![Material Tailwind](https://img.shields.io/badge/Material_Tailwind-2.1-38B2AC?style=flat&logo=tailwindcss)](https://material-tailwind.com)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat&logo=react-router)](https://reactrouter.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Galería interactiva y carrusel de imágenes de alta resolución impulsada por el API de Lorem Picsum. Diseñada con **Redux Toolkit**, navegación por rutas y componentes accesibles de **Material Tailwind**.

---

## 🎯 Características Principales

- **Carrusel Responsivo Táctil**: Deslizamiento interactivo de imágenes con navegación por flechas e indicadores paginados.
- **Galería en Grid Dinámico**: Mosaico responsivo con carga diferida de imágenes para optimizar el consumo de ancho de banda.
- **Gestión de Estado Centralizada**: Control del índice actual, listado de fotos y estados de carga mediante Redux Toolkit.
- **Rutas y Navegación SPA**: Enrutamiento declarativo con React Router v6 para vistas de galería y carrusel.
- **Spinners e Indicadores de Carga**: Feedback visual inmediato con `react-loader-spinner`.

---

## 🛠️ Stack Tecnológico

| Capa | Herramienta | Rol |
| :--- | :--- | :--- |
| **Framework** | React 18.3 | Librería de interfaz declarativa |
| **Bundler** | Vite 5.4 | Entorno de desarrollo de alta velocidad |
| **Estado Global** | Redux Toolkit | Almacén de imágenes y estado del carrusel |
| **Componentes UI** | Material Tailwind | Componentes accesibles de carrusel y botones |
| **Navegación** | React Router v6 | Enrutamiento SPA |

---

## 🚀 Inicio Rápido

### Requisitos Previos
- **Node.js**: v18.0 o superior
- **pnpm**: v9.0 o superior

### Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   ```

3. **Iniciar en modo desarrollo:**
   ```bash
   pnpm run dev
   ```

4. **Compilar para producción:**
   ```bash
   pnpm run build
   ```

---

## 📄 Licencia

Este proyecto está distribuido bajo la Licencia **MIT**. Consulta el archivo `LICENSE` para más información.
