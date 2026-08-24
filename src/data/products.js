export const PRODUCTS = [
  {
    id: "detox-slim",
    name: "Naturilia Detox Slim",
    category: "control-peso",
    categoryLabel: "Control de Peso",
    tagline: "Fórmula termogénica y desintoxicante 100% natural",
    price: 490,
    originalPrice: 590,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Más Vendido",
    badgeType: "gold",
    image: "./images/detox_slim.png",
    fallbackIcon: "🌿",
    accentColor: "#0B3B2C",
    presentation: "60 Cápsulas Vegetales (Suministro para 30 días)",
    description: "Formulado científicamente con extractos botánicos concentrados de Té Verde, Espirulina, L-Carnitina y Jengibre. Apoya la aceleración del metabolismo, reduce la hinchazón abdominal y promueve la quema de grasa de forma natural sin taquicardia.",
    ingredients: ["Extracto de Té Verde (EGCG 50%)", "Espirulina Orgánica", "L-Carnitina Tartrato", "Jengibre Concentrado", "Cromo Picolinato"],
    benefits: [
      "Acelera el metabolismo basal de forma natural",
      "Ayuda a controlar la ansiedad por el dulce y carbohidratos",
      "Efecto drenante y desintoxicante digestivo",
      "No causa efecto rebote ni altera el sistema nervioso"
    ],
    usage: "Tomar 2 cápsulas al día con abundante agua, preferentemente 30 minutos antes del desayuno.",
    inStock: true
  },
  {
    id: "bio-collagen",
    name: "Naturilia Bio-Collagen Hydrolyzed",
    category: "belleza",
    categoryLabel: "Belleza & Antiedad",
    tagline: "Colágeno hidrolizado tipo I y III con Ácido Hialurónico",
    price: 580,
    originalPrice: 690,
    rating: 4.95,
    reviewsCount: 189,
    badge: "Top Valoración",
    badgeType: "emerald",
    image: "./images/collagen_beauty.png",
    fallbackIcon: "✨",
    accentColor: "#D4AF37",
    presentation: "Polvo Soluble de 450g (Sabor Frutos Rojos / Neutro)",
    description: "Rejuvenece tu piel desde el interior. Combinación avanzada de colágeno bioactivo de máxima absorción, enriquecido con Ácido Hialurónico puro, Vitamina C liposomal y Resveratrol de uva.",
    ingredients: ["Colágeno Hidrolizado Bioactivo 10g", "Ácido Hialurónico 120mg", "Vitamina C (Ácido Ascórbico)", "Resveratrol", "Biotina 5000 mcg"],
    benefits: [
      "Mejora notablemente la firmeza e hidratación de la piel",
      "Fortalece el cabello débil y previene la caída",
      "Refuerza las uñas quebradizas",
      "Protege y regenera articulaciones, cartílagos y ligamentos"
    ],
    usage: "Mezclar 1 medida (15g) en un vaso de agua, jugo o smoothie por las mañanas.",
    inStock: true
  },
  {
    id: "thermo-burn",
    name: "Naturilia Thermo Burn Extreme",
    category: "control-peso",
    categoryLabel: "Control de Peso",
    tagline: "Acelerador metabólico y energía sostenida",
    price: 520,
    originalPrice: 620,
    rating: 4.8,
    reviewsCount: 98,
    badge: "Fórmula Avanzada",
    badgeType: "gold",
    image: "./images/detox_slim.png", // fallback or stylized preview
    fallbackIcon: "🔥",
    accentColor: "#B89222",
    presentation: "60 Cápsulas de Alta Potencia",
    description: "Potente complejo termogénico diseñado para quemar calorías de manera eficiente durante tus entrenamientos y actividades diarias. Contiene Café Verde, Garcinia Cambogia y Guaraná.",
    ingredients: ["Extracto de Café Verde (50% Ácido Clorogénico)", "Garcinia Cambogia (60% HCA)", "Guaraná Natural", "Pimienta de Cayena (Capsaicina)"],
    benefits: [
      "Incrementa el gasto calórico de forma segura",
      "Brinda energía limpia sin bajones ni nerviosismo",
      "Favorece la movilización de tejido graso localizado",
      "Ideal para potenciar sesiones de ejercicio físico"
    ],
    usage: "Tomar 1 cápsula por la mañana y 1 cápsula 30 minutos antes de hacer ejercicio.",
    inStock: true
  },
  {
    id: "night-rest",
    name: "Naturilia Night Rest & Magnesium",
    category: "salud-integral",
    categoryLabel: "Salud Integral",
    tagline: "Citrato y Glicinato de Magnesio con Ashwagandha",
    price: 450,
    originalPrice: 530,
    rating: 4.9,
    reviewsCount: 115,
    badge: "Esencial",
    badgeType: "emerald",
    image: "./images/collagen_beauty.png", // styled glass jar preview
    fallbackIcon: "🌙",
    accentColor: "#165B46",
    presentation: "90 Cápsulas (Suministro para 45 días)",
    description: "Relaja tus músculos, disminuye el estrés del día a día y logra un sueño profundo y reparador con nuestro blend quelado de Citrato y Glicinato de Magnesio de máxima biodisponibilidad.",
    ingredients: ["Citrato de Magnesio", "Glicinato de Magnesio", "Ashwagandha KSM-66®", "L-Teanina", "Extracto de Manzanilla y Lavanda"],
    benefits: [
      "Induce un descanso profundo sin sensación de somnolencia al despertar",
      "Alivia la tensión muscular y calambres nocturnos",
      "Reduce los niveles de cortisol y ansiedad emocional",
      "Apoya la salud del sistema nervioso y cardíaco"
    ],
    usage: "Tomar 2 cápsulas 45 minutos antes de dormir con agua tibia o infusión.",
    inStock: true
  },
  {
    id: "green-cleanse",
    name: "Naturilia Vital Green & Fiber Cleanse",
    category: "detox",
    categoryLabel: "Detox & Digestión",
    tagline: "Supergreens con Probióticos 10 Billion CFU y Fibra",
    price: 490,
    originalPrice: 580,
    rating: 4.85,
    reviewsCount: 87,
    badge: "Digestión Top",
    badgeType: "gold",
    image: "./images/detox_slim.png",
    fallbackIcon: "🌱",
    accentColor: "#2D6A4F",
    presentation: "Polvo Soluble 360g",
    description: "Complejo verde alcalinizante que combina Espirulina, Chlorella, Pasto de Trigo, Nopal y 10 billones de lactobacilos vivos para regular el tránsito intestinal y desinflamar el vientre.",
    ingredients: ["Chlorella Orgánica", "Pasto de Trigo (Wheatgrass)", "Nopal y Psyllium Husk", "Complejo Probiótico (L. Acidophilus, B. Lactis)", "Enzimas Digestivas (Papaína y Bromelain)"],
    benefits: [
      "Elimina toxinas y pesadez estomacal en pocos días",
      "Restablece la microbiota intestinal y la inmunidad",
      "Promueve evacuaciones regulares sin irritar el colon",
      "Alcaliniza el PH corporal y aporta micronutrientes vitales"
    ],
    usage: "Disolver 1 cucharada en 250ml de agua o jugo verde por la mañana en ayunas.",
    inStock: true
  },
  {
    id: "golden-curcumin",
    name: "Naturilia Golden Curcumin & Omega-3",
    category: "salud-integral",
    categoryLabel: "Salud Integral",
    tagline: "Cúrcuma bioasimilable con Piperina y Ácidos Grasos",
    price: 530,
    originalPrice: 620,
    rating: 4.88,
    reviewsCount: 76,
    badge: "Antiinflamatorio",
    badgeType: "emerald",
    image: "./images/collagen_beauty.png",
    fallbackIcon: "✨",
    accentColor: "#D4AF37",
    presentation: "60 Softgels de Rápida Liberación",
    description: "Poderoso complejo antioxidante y antiinflamatorio natural a base de extracto de Cúrcuma Longa (95% curcuminoides) combinada con Bioperine® (Pimienta Negra) para multiplicar su absorción x2000%.",
    ingredients: ["Extracto de Cúrcuma Longa (95% Curcuminoides)", "Piperina (Bioperine®)", "Aceite de Pescado Concentrado (EPA / DHA)", "Vitamina D3 2000 UI"],
    benefits: [
      "Reduce el dolor y rigidez articular en rodillas y columna",
      "Potente acción antioxidante contra el envejecimiento celular",
      "Favorece la salud cardiovascular y cerebral",
      "Protege el hígado de sobrecargas metabólicas"
    ],
    usage: "Tomar 1 a 2 softgels al día acompañados de una comida principal con grasas saludables.",
    inStock: true
  }
];

export const CATEGORIES = [
  { id: "all", name: "Todos los Productos", icon: "✨" },
  { id: "control-peso", name: "Control de Peso", icon: "🌱" },
  { id: "belleza", name: "Belleza & Piel", icon: "💎" },
  { id: "detox", name: "Detox & Digestión", icon: "🍃" },
  { id: "salud-integral", name: "Salud Integral", icon: "❤️" }
];

export const DISTRIBUTOR_TIERS = [
  {
    level: "Distribuidor Inicial",
    badge: "Bronce",
    minOrder: "$3,000 MXN",
    discount: "30% DE DESCUENTO",
    margin: "Ganancia de $1,280+ MXN por kit",
    features: [
      "Descuento directo del 30% en todo el catálogo",
      "Kit de Bienvenida digital + catálogo impreso",
      "Asesoría y capacitaciones de ventas semanales",
      "Material gráfico para redes sociales listo para publicar"
    ]
  },
  {
    level: "Distribuidor Preferente",
    badge: "Plata",
    popular: true,
    minOrder: "$7,500 MXN",
    discount: "40% DE DESCUENTO",
    margin: "Ganancia de $5,000+ MXN por kit",
    features: [
      "Descuento del 40% permanente en pedidos",
      "Envío GRATIS prioritario a todo México",
      "Acceso a clientes referidos de tu zona geográfica",
      "Soporte directo con un Asesor de Negocios Naturilia",
      "Muestras gratis de nuevos lanzamientos"
    ]
  },
  {
    level: "Distribuidor Máster / Mayorista",
    badge: "Oro",
    minOrder: "$15,000 MXN",
    discount: "50% DE DESCUENTO",
    margin: "Ganancia de $15,000+ MXN por ciclo",
    features: [
      "Margen de utilidad del 100% sobre tu inversión",
      "Exclusividad territorial opcional en tu municipio",
      "Crédito comercial disponible tras 3 meses de recompra",
      "Material publicitario físico (banners, lonas, exhibidores)",
      "Capacitación personalizada en prospección digital"
    ]
  }
];

export const FAQS = [
  {
    question: "¿Los productos de Naturilia tienen efectos secundarios?",
    answer: "Todos los suplementos Naturilia están elaborados con ingredientes de origen 100% natural, certificados bajo rigurosas normas de higiene y calidad. Al no contener medicamentos sintéticos ni químicos agresivos, no generan dependencia ni efecto rebote. Sin embargo, recomendamos consultar las contraindicaciones específicas en cada empaque en caso de embarazo, lactancia o enfermedades crónicas."
  },
  {
    question: "¿Hacen envíos a todo México y cuánto tarda en llegar mi pedido?",
    answer: "Sí, realizamos envíos seguros y rastreables a todos los municipios y ciudades de la República Mexicana mediante paqueterías de primer nivel (FedEx, DHL, Estafeta). El tiempo de entrega estándar oscila entre 2 y 4 días hábiles. En compras mayores a $899 MXN el envío es completamente GRATIS."
  },
  {
    question: "¿Cómo funciona la Red de Distribuidores Naturilia?",
    answer: "Ser distribuidor te permite adquirir nuestros productos con descuentos desde el 30% hasta el 50% directo sobre el precio público. Puedes comenzar con una inversión mínima desde $3,000 MXN. Te proporcionamos capacitación en ventas, material publicitario para tus redes y asesoría directa."
  },
  {
    question: "¿Cómo puedo realizar mi compra o solicitar atención personalizada?",
    answer: "Puedes seleccionar tus productos directamente en esta tienda en línea y completar tu compra por tarjeta, transferencia o WhatsApp. También puedes hacer clic en nuestro botón flotante de WhatsApp para comunicarte con una asesora que te guiará paso a paso según tus metas de salud o negocio."
  },
  {
    question: "¿Puedo pasar a recoger mis pedidos en oficinas?",
    answer: "Sí, contamos con opción de recolección en nuestras oficinas principales. Selecciona 'Recolección en sucursal' durante tu proceso de compra o contáctanos por WhatsApp para programar tu visita."
  }
];
