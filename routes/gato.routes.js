import express from "express";
import multer from "multer";
import { 
  registrarGato, 
  obtenerGatos, 
  actualizarGato 
} from "../controllers/gato.controller.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// Crear un nuevo gato (POST /gato)
router.post("/gato", upload.single("imagen"), registrarGato);

// Obtener todos los gatos (GET /gatos)
router.get("/gatos", obtenerGatos);

// Actualizar un gato por ID (PUT /gato/:id)  <--- ¡AQUÍ ESTABA EL ERROR!
router.put("/gato/:id", upload.single("imagen"), actualizarGato);

export default router;