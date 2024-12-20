const express = require("express");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.get("/generate-pdf/:projectId", (req, res) => {
  const { projectId } = req.params;

  // Configurar o PDF
  const doc = new PDFDocument();
  const fileName = `project_${projectId}.pdf`;

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `inline; filename="${fileName}"`);

  // Geração do conteúdo do PDF
  doc.text(`Projeto ID: ${projectId}`);
  doc.text("Este é o conteúdo do PDF gerado!");
  doc.end();

  // Envia o PDF ao cliente
  doc.pipe(res);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
