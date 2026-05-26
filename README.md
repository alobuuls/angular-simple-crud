# 🚀 Angular Simple CRUD

Aplicación desarrollada en **Angular 12** que implementa un sistema CRUD básico de empleados utilizando estado en memoria. Permite crear, editar, listar y eliminar registros de forma dinámica con Angular Forms.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v14.x` o `v16.x` *(preferiblemente `v24.13.0`)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verificar versiones instaladas

Ejecuta los siguientes comandos en la terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-simple-crud
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

Luego abre en tu navegador:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

Este proyecto utiliza una estructura simple basada en un solo componente principal.

### 📦 AppComponent

Contiene toda la lógica del CRUD:

- Lista de empleados en memoria
- Formulario de creación y edición
- Selección de registros
- Eliminación de empleados

---

## ⚙️ Funcionalidades principales

- ➕ Crear empleados
- ✏️ Editar empleados
- 📋 Listar empleados
- ❌ Eliminar empleados
- 🎯 Estado en memoria *(sin backend)*
- 🎨 Interfaz desarrollada con Bootstrap

---

## 🛠️ Tecnologías utilizadas

- 🅰️ Angular 12
- ⚡ TypeScript
- 🎨 Bootstrap
- 🧾 Angular Forms

---

## 📁 Estructura del proyecto

```bash
src/
├── app/
│   ├── models/
│   │   └── employee.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
├── styles.css
├── index.html
```

---

## 🔥 Buenas prácticas implementadas

- Two-way data binding (`ngModel`)
- Separación de modelo (`Employee class`)
- Lógica CRUD centralizada
- UI reactiva simple
- Código limpio y reutilizable

---

## 📄 Licencia

Proyecto con fines educativos y de portafolio.
