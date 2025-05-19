require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User.js");
const Case = require("../models/Case.js");
const Report = require("../models/Report.js");
const Evidence = require("../models/Evidence.js");
const OdontoRecord = require("../models/OdontoLegal.js");

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/laudos";

async function seed() {
  try {
    await mongoose.connect(mongoUri);
    console.log("✅ Conectado ao MongoDB com sucesso!");

    await User.deleteMany({});
    await Case.deleteMany({});
    await Report.deleteMany({});
    await Evidence.deleteMany({});
    await OdontoRecord.deleteMany({});

    const users = await User.insertMany([
      {
        name: "Carlos Silva",
        email: "carlos@laudos.com",
        password: "123456",
        profile: "perito",
        status: "ativo"
      },
      {
        name: "Ana Pereira",
        email: "ana@laudos.com",
        password: "123456",
        profile: "perito",
        status: "ativo"
      },
      {
        name: "Marcos Oliveira",
        email: "marcos@laudos.com",
        password: "123456",
        profile: "perito",
        status: "ativo"
      },
      {
        name: "Admin",
        email: "admin@laudos.com",
        password: "admin123",
        profile: "administrador",
        status: "ativo"
      },
      {
        name: "Joana Lima",
        email: "joana@laudos.com",
        password: "123456",
        profile: "assistente",
        status: "ativo"
      }
    ]);

    const odontos = await OdontoRecord.insertMany([
      {
        type: "Ante-Mortem",
        date: new Date("2023-01-10"),
        characteristics: "Dentição permanente, restaurações em amálgama",
        status: "Identificado"
      },
      {
        type: "Ante-Mortem",
        date: new Date("2023-01-15"),
        characteristics: "Denticao permanente, tratamento endodôntico",
        status: "Identificado"
      },
      {
        type: "Ante-Mortem",
        date: new Date("2023-01-22"),
        characteristics: "Denticao mista, ausencia de terceiros molares",
        status: "Não Identificado"
      },
      {
        type: "Ante-Mortem",
        date: new Date("2023-02-05"),
        characteristics: "Denticao permanente, implante no dente 46",
        status: "Não Identificado"
      },
      {
        type: "Ante-Mortem",
        date: new Date("2023-02-18"),
        characteristics: "Denticao permanente, prótese parcial removível",
        status: "Não Identificado"
      }
    ]);

    const evidences = await Evidence.insertMany([
      {
        name: "Radiografia panorâmica",
        category: "odontologia",
        collectedAt: new Date("2023-02-03"),
        description: "Imagem coletada da vítima para comparação com registros ante-mortem",
        location: "Agência Forense Central",
        case: new mongoose.Types.ObjectId("111111111111111111111202")
      },
      {
        name: "Fotografias intraorais",
        category: "fotografias",
        collectedAt: new Date("2023-02-03"),
        description: "Imagens intraorais obtidas para identificação",
        location: "Laboratório de Odontologia Forense",
        case: new mongoose.Types.ObjectId("111111111111111111111202")
      },
      {
        name: "Amostra de DNA",
        category: "laboratório",
        collectedAt: new Date("2023-04-01"),
        description: "Amostra para análise genética",
        location: "Instituto de Genética Forense",
        case: new mongoose.Types.ObjectId("111111111111111111111204")
      },
      {
        name: "Documento de solicitação",
        category: "documentos",
        collectedAt: new Date("2023-01-15"),
        description: "Solicitação oficial da DP para abertura do caso",
        location: "Delegacia de Polícia Civil - 3ª DP",
        case: new mongoose.Types.ObjectId("111111111111111111111201")
      },
      {
        name: "Fragmento ósseo",
        category: "outros",
        collectedAt: new Date("2023-05-22"),
        description: "Fragmento ósseo encontrado na escavação",
        location: "Sítio Arqueológico Serra Azul",
        case: new mongoose.Types.ObjectId("111111111111111111111205")
      }
    ]);

    const reports = await Report.insertMany([
      {
        number: "LP-2023-001",
        title: "Laudo Preliminar de Identificação Odontológica",
        date: new Date(1675555200000),
        type: "Preliminar",
        author: new mongoose.Types.ObjectId("000000000000000000000154"),
        case: new mongoose.Types.ObjectId("111111111111111111111202")
      },
      {
        number: "LP-2023-002",
        title: "Laudo Final de Identificação Odontológica",
        date: new Date(1676419200000),
        type: "Final",
        author: new mongoose.Types.ObjectId("000000000000000000000155"),
        case: new mongoose.Types.ObjectId("111111111111111111111202")
      },
      {
        number: "LP-2023-003",
        title: "Laudo de Análise de Marcas de Mordida",
        date: new Date(1679270400000),
        type: "Preliminar",
        author: new mongoose.Types.ObjectId("000000000000000000000156"),
        case: new mongoose.Types.ObjectId("111111111111111111111203")
      },
      {
        number: "LP-2023-004",
        title: "Laudo Complementar de Análise de Marcas de Mordida",
        date: new Date(1680652800000),
        type: "Complementar",
        author: new mongoose.Types.ObjectId("000000000000000000000157"),
        case: new mongoose.Types.ObjectId("111111111111111111111203")
      },
      {
        number: "LP-2023-005",
        title: "Laudo de Análise de DNA para Identificação",
        date: new Date(1681257600000),
        type: "Final",
        author: new mongoose.Types.ObjectId("000000000000000000000158"),
        case: new mongoose.Types.ObjectId("111111111111111111111204")
      }
    ]);

    console.log("✅ Banco de dados populado com sucesso!");
    process.exit();
  } catch (err) {
    console.error("❌ Erro ao popular o banco de dados:", err);
    process.exit(1);
  }
}

seed();
