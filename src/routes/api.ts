import { Router } from "express";
import { db } from "../db";
import { cartasTarot } from "../schema";
import { eq } from "drizzle-orm";

const router = Router();


/**
 * Pegue todas as cartas
 */
router.get("/cartas", async (_req, res) => {
    try {
      const cartas = await db.select().from(cartasTarot);
      res.json(cartas);
    } catch (error) {
      console.error("Erro ao pegar cartas:", error);
      res.status(500).json({ message: "Problema com servidor" });
    }
  });
  
  /**
   * Pegue uma carta por ID
   */
  router.get("/cartas/:id", async (req, res) => {
    try {
      const card = await db
        .select()
        .from(cartasTarot)
        .where(eq(cartasTarot.id, parseInt(req.params.id, 10)))
        .limit(1);
      if (card.length === 0) {
        res.status(404).json({ message: "Carta não encontrada" });
      } else {
        res.json(card[0]);
      }
    } catch (error) {
      console.error("Erro ao pegar card:", error);
      res.status(500).json({ message: "Problema com servidor" });
    }
  });
  
  /**
   * Crie uma nova carta
   */
  router.post("/cartas", async (req, res) => {
    try {
      const novaCarta = await db.insert(cartasTarot).values(req.body).returning();
      res.status(201).json(novaCarta[0]);
    } catch (error) {
      console.error("Erro ao criar carta:", error);
      res.status(500).json({ message: "Problema com servidor" });
    }
  });
  
  /**
   * Insira várias cartas de uma vez
   */
  router.post("/cartas/muitas", async (req, res) => {
    try {
      if (!Array.isArray(req.body)) {
        return res
          .status(400)
          .json({ message: "O corpo da solicitação deve ser um 'array' de cartas" });
      }
  
      const newCartas = await db.insert(cartasTarot).values(req.body).returning();
      res.status(201).json(newCartas);
    } catch (error) {
      console.error("Error bulk inserting cartas:", error);
      res.status(500).json({ message: "Problema com servidor" });
    }
  });
  
  
  /**
   * Edite uma carta por ID
   */
  router.put("/cartas/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const cartaEditada = await db
        .update(cartasTarot)
        .set(req.body)
        .where(eq(cartasTarot.id, id))
        .returning();
  
      if (cartaEditada.length === 0) {
        res.status(404).json({ message: "Carta não encontrada" });
      } else {
        res.json(cartaEditada[0]);
      }
    } catch (error) {
      console.error("Erro ao editar carta:", error);
      res.status(500).json({ message: "Problema com servidor" });
    }
  });

   /**
   * Atualize várias cartas de uma vez
   */
/**
 * Pegue todas as cartas
 */
router.put("/cartas/muitas", async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "O corpo da solicitação deve ser um 'array' de cartas" });
    }
    
    const results = [];
    for (const carta of req.body) {
      const { id, ...updateData } = carta;
      console.log("Atualizando carta ID:", id);  // Adicionado para verificar o valor do ID
      console.log("Dados para atualização:", updateData);  // Adicionado para verificar os dados de atualização

      if (!id) {
        return res.status(400).json({ message: "Cada carta deve ter um ID para ser atualizada" });
      }
      const cartaEditada = await db
        .update(cartasTarot)
        .set(updateData)
        .where(eq(cartasTarot.id, id))
        .returning();
      if (cartaEditada.length === 0) {
        return res.status(404).json({ message: `Carta com ID ${id} não encontrada` });
      }
      results.push(cartaEditada[0]);
    }

    res.json(results);
  } catch (error) {
    console.error("Erro ao atualizar várias cartas:", error);
    res.status(500).json({ message: "Problema com servidor" });
  }
});

  
  /**
   * Deletar uma carta por ID
   */
  router.delete("/cartas/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedCard = await db
        .delete(cartasTarot)
        .where(eq(cartasTarot.id, id))
        .returning();
  
      if (deletedCard.length === 0) {
        res.status(404).json({ message: "Carta não encontrada" });
      } else {
        res.json(deletedCard[0]);
      }
    } catch (error) {
      console.error("Erro ao deletar carta:", error);
      res.status(500).json({ message: "Problema com servidor" });
    }
  });
  
  export default router;