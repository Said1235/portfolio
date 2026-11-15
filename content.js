/* EDITA ESTE ARCHIVO PARA ACTUALIZAR EL PORTAFOLIO Y PUBLICAR ARTÍCULOS. */
window.PORTFOLIO = {
  identity: {
    name: "Said",
    eyebrow: "INDEPENDENT BUILDER · LATAM",
    heroTitle: "Ideas que se convierten en <em>productos reales.</em>",
    heroDescription: "Construyo software, exploro inteligencia artificial y convierto problemas complejos en experiencias digitales útiles.",
    heroNote: "Pensar · construir · probar · mejorar",
    aboutDescription: "Me interesa el punto donde la tecnología se vuelve útil: productos digitales, automatización, inteligencia artificial y sistemas que generan confianza. Aquí documento lo que construyo, lo que aprendo y lo que todavía estoy explorando."
  },
  links: { github: "https://github.com/Said1235", email: "" },
  projects: [
    { number:"01",name:"GenLegal AI",category:"AI · SMART CONTRACTS",description:"Auditoría de smart contracts asistida por IA. Analiza código, identifica riesgos y propone mejoras; los validadores de GenLayer contrastan el resultado.",note:"Intelligent Contract · GenLayer",repo:"https://github.com/Said1235/Genlegal-Ai",visual:"visual-violet",mark:"G/" },
    { number:"02",name:"AI URL Reputation Oracle",category:"AI · SECURITY · WEB3",description:"Un oráculo de reputación que analiza el contenido de una URL y produce señales de confianza mediante evaluación de IA y consenso de validadores.",note:"URL analysis · On-chain verdicts",repo:"https://github.com/Said1235/AI-URL-Reputation-Oracle",visual:"visual-orange",mark:"↗" },
    { number:"03",name:"GenVerify AI",category:"AI · DOCUMENTS",description:"Verificación documental basada en requisitos en lenguaje natural. El contrato registra el hash y el veredicto, sin guardar el texto original del documento.",note:"Document verification · GenLayer",repo:"https://github.com/Said1235/GenVerify-AI",visual:"visual-mint",mark:"✓" },
    { number:"04",name:"Allocyn",category:"PRODUCT · WEB3",description:"Frontend para comprobar entregables digitales frente a criterios de aceptación acordados, con flujos de creación, aceptación, entrega y verificación.",note:"Next.js · TypeScript · GenLayer",repo:"https://github.com/Said1235/allocyn",visual:"visual-blue",mark:"A." },
    { number:"05",name:"EngageChain",category:"AI · ON-CHAIN GOVERNANCE",description:"Protocolo de opiniones asistido por IA: permite enviar propuestas, evaluarlas mediante validación y guardar el resultado on-chain.",note:"AI-native opinion protocol",repo:"https://github.com/Said1235/Engagechain",visual:"visual-yellow",mark:"◈" },
    { number:"06",name:"FREE TV",category:"SOFTWARE · KODI",description:"Complemento de vídeo para Kodi que permite configurar listas M3U, explorar canales por categorías y solicitar su reproducción desde Kodi.",note:"Kodi add-on · Python 3",repo:"https://github.com/Said1235/free-tv",visual:"visual-dark",mark:"TV" }
  ],
  articles: [
    /* Añade aquí cada artículo. Ejemplo:
    {
      slug: "mi-primera-nota",
      title: "Mi primera nota",
      date: "2026-11-14",
      category: "PROCESO",
      excerpt: "Una breve introducción a la idea.",
      readTime: "4 MIN",
      body: [
        { type: "paragraph", text: "Escribe aquí el primer párrafo." },
        { type: "heading", text: "Una idea importante" },
        { type: "paragraph", text: "Continúa desarrollando la idea." },
        { type: "quote", text: "Una frase para destacar." },
        { type: "list", items: ["Primer punto", "Segundo punto"] }
      ]
    }
    */
  ]
};