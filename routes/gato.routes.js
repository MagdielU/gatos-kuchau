import express from "express";
import multer from "multer";
import { 
  registrarGato, 
  obtenerGatos, 
  actualizarGato,
  eliminarGato
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

// Actualizar un gato por ID (PUT /gato/:id)
router.put("/gato/:id", upload.single("imagen"), actualizarGato);

// Ruta para eliminar gato por ID
router.delete("/gato/:id", eliminarGato);
export default router;