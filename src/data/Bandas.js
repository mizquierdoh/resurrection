
const Bandas = [
  {
    "Grupo": "BACK IN TOWN",
    "Preferencia": "TRUE",
    "Día": "miércoles, 3",
    "Inicio": "17:30",
    "Fin": "18:10",
    "Escenario": "Warm Up",
    "Relevancia": 4,
    "Procedencia": "Lugo",
    "Descripción": ""
  },
  {
    "Grupo": "ARCHIVO ADXUNTO",
    "Preferencia": "TRUE",
    "Día": "miércoles, 3",
    "Inicio": "18:40",
    "Fin": "19:20",
    "Escenario": "Warm Up",
    "Relevancia": 1,
    "Procedencia": "Galicia",
    "Descripción": "Punk gallego muy común"
  },
  {
    "Grupo": "DEVIL IN ME",
    "Preferencia": "TRUE",
    "Día": "miércoles, 3",
    "Inicio": "19:45",
    "Fin": "20:25",
    "Escenario": "Warm Up",
    "Relevancia": 5,
    "Procedencia": "Portugal",
    "Descripción": "Hardcore con mucha caña, ideal para levantar los ánimos en la bienvenida."
  },
  {
    "Grupo": "BURY TOMORROW",
    "Preferencia": "TRUE",
    "Día": "miércoles, 3",
    "Inicio": "21:00",
    "Fin": "21:50",
    "Escenario": "Warm Up",
    "Relevancia": 5,
    "Procedencia": "Inglaterra",
    "Descripción": "Metalcore melódico"
  },
  {
    "Grupo": "MUNICIPAL WASTE",
    "Preferencia": "TRUE",
    "Día": "miércoles, 3",
    "Inicio": "22:15",
    "Fin": "23:00",
    "Escenario": "Warm Up",
    "Relevancia": 5,
    "Procedencia": "EEUU – Virginia",
    "Descripción": "Thrash metal si no recuerdo mal. Un poco más guarretes que crisix, pero muy guays."
  },
  {
    "Grupo": "IGNITE",
    "Preferencia": "TRUE",
    "Día": "miércoles, 3",
    "Inicio": "23:30",
    "Fin": "00:30",
    "Escenario": "Warm Up",
    "Relevancia": 4,
    "Procedencia": "EEUU – California",
    "Descripción": "La música es bastante melódica. Rock americano bastante diferente. No está mal. La música es parecida a la intro del anime del pintor, pero con una buena base."
  },
  {
    "Grupo": "KVELERTAK",
    "Preferencia": "TRUE",
    "Día": "miércoles, 3",
    "Inicio": "01:10",
    "Fin": "02:10",
    "Escenario": "Warm Up",
    "Relevancia": 5,
    "Procedencia": "Noruega",
    "Descripción": "Parecen Hard Rock, no están mal. Es en la warm up, así que puede ser buena opción. Son mejores de lo que parecía, me los guardo"
  },
  {
    "Grupo": "Band contest",
    "Preferencia": "",
    "Día": "jueves, 4",
    "Inicio": "14:00",
    "Fin": "14:30",
    "Escenario": "Chaos",
    "Relevancia": "",
    "Procedencia": "",
    "Descripción": ""
  },
  {
    "Grupo": "CABEZA DE CABALLO",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "14:30",
    "Fin": "15:00",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Granada",
    "Descripción": "Doom metal que va algo más rápido de lo normal. Tienen un estilo interesante"
  },
  {
    "Grupo": "LÓSTREGOS",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "14:30",
    "Fin": "15:00",
    "Escenario": "Ritual",
    "Relevancia": 4,
    "Procedencia": "A Coruña",
    "Descripción": "Death metal en gallego, bastante interesante."
  },
  {
    "Grupo": "TRALLERY",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "15:00",
    "Fin": "15:40",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Mallorca",
    "Descripción": "Thrash metal"
  },
  {
    "Grupo": "CONTROL DE PLAGAS",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "15:00",
    "Fin": "15:35",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Bilbao",
    "Descripción": "Hardcore melódico más tirando a punk. Puede ser interesante. El cantante va a lo Bumbury"
  },
  {
    "Grupo": "VOLTAIA",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "15:35",
    "Fin": "17:25",
    "Escenario": "Desert",
    "Relevancia": 3,
    "Procedencia": "Guipuzkoa",
    "Descripción": "Hard rock clásico. No están mal, pero no son demasiado destacables."
  },
  {
    "Grupo": "MELTDOWN",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "15:40",
    "Fin": "16:20",
    "Escenario": "Ritual",
    "Relevancia": 4,
    "Procedencia": "Guipuzkoa",
    "Descripción": "Es hardcore pero algo melódico y le meten mucha caña."
  },
  {
    "Grupo": "CATORCE",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "16:10",
    "Fin": "16:45",
    "Escenario": "Chaos",
    "Relevancia": 4,
    "Procedencia": "Sevilla",
    "Descripción": "Muy melódico, casi pop, habrá que escuchar más. Puede que no estén tan mal después de todo. Tienen un toque algo psicodélico."
  },
  {
    "Grupo": "CANE HILL",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "16:20",
    "Fin": "17:10",
    "Escenario": "Main",
    "Relevancia": 4,
    "Procedencia": "EEUU – Louisiana",
    "Descripción": "Nu metal. El guitarrista me recuerda a Slayer. Tienen una mezcla de estilos interesante. Hay mucho cambio de ritmo entre las canciones rápidas y lentas."
  },
  {
    "Grupo": "ELECTRIC MONOLITH",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "16:45",
    "Fin": "17:25",
    "Escenario": "Desert",
    "Relevancia": 3,
    "Procedencia": "Barcelona",
    "Descripción": "Un intento de Led Zeppelin lentillo. No están mal, pero no son espectáculares."
  },
  {
    "Grupo": "KAUSE 4 KONFLIKT",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "17:10",
    "Fin": "17:50",
    "Escenario": "Ritual",
    "Relevancia": 4,
    "Procedencia": "Francia",
    "Descripción": "Death metal bastante neutro. Es rapidillo, casi thrash"
  },
  {
    "Grupo": "MAIN LINE 10",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "17:15",
    "Fin": "18:00",
    "Escenario": "Chaos",
    "Relevancia": 4,
    "Procedencia": "Mallorca",
    "Descripción": "Hardcore tirando a una mezcla entre punk americano medio bestia, el guitarra es bastante bueno. La verdad que tienen mucha energía."
  },
  {
    "Grupo": "CRYSTAL LAKE",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "17:50",
    "Fin": "18:40",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Japón",
    "Descripción": "Metalcore"
  },
  {
    "Grupo": "BONES OF MINERVA",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "18:00",
    "Fin": "18:40",
    "Escenario": "Desert",
    "Relevancia": 5,
    "Procedencia": "Madrid",
    "Descripción": "Estas tías son buenísimas, ve a verlas."
  },
  {
    "Grupo": "KITAI",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "18:40",
    "Fin": "19:30",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Madrid",
    "Descripción": "Movidas medio Rap medio Indie… Es famosete por lo visto, me suenan canciones, puede ser bueno para despejar y variar de otras cosas más tochas"
  },
  {
    "Grupo": "ALTARAGE",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "18:40",
    "Fin": "19:20",
    "Escenario": "Ritual",
    "Relevancia": 3,
    "Procedencia": "Bilbao",
    "Descripción": "Black metal, muy sucio todo… en directo tienen que ser un poco suplicio. No me está molando demasiado ahora…"
  },
  {
    "Grupo": "CABOVERDE",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "19:20",
    "Fin": "20:00",
    "Escenario": "Desert",
    "Relevancia": 3,
    "Procedencia": "Madrid",
    "Descripción": "Rock alternativo bastante insípido de momento."
  },
  {
    "Grupo": "GOJIRA",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "19:25",
    "Fin": "20:25",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Francia",
    "Descripción": "Sí, joder"
  },
  {
    "Grupo": "HIGHER POWER",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "20:00",
    "Fin": "20:40",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Inglaterra",
    "Descripción": "No me atraen demasiado. No puedo describir el estilo demasiado."
  },
  {
    "Grupo": "TOUNDRA",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "20:30",
    "Fin": "21:30",
    "Escenario": "Ritual",
    "Relevancia": 5,
    "Procedencia": "Madrid",
    "Descripción": "Instrumental con toque psicodélico sin dejar atrás la potencia"
  },
  {
    "Grupo": "TBA",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "20:30",
    "Fin": "21:30",
    "Escenario": "Desert",
    "Relevancia": "",
    "Procedencia": "",
    "Descripción": ""
  },
  {
    "Grupo": "MISCONDUCT",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "21:30",
    "Fin": "22:30",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Suecia",
    "Descripción": "Hardcore algo sucio, demasiado rápido y sin demasiada calidad, por lo que he escuchado hasta ahora"
  },
  {
    "Grupo": "SLAYER",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "21:45",
    "Fin": "23:15",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "EEUU – California",
    "Descripción": "Thrash puro"
  },
  {
    "Grupo": "CRÓ!",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "22:35",
    "Fin": "23:35",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Vigo",
    "Descripción": "Son extraños, medio Indie medio fusión de Jazz y tal. No están en spoty y sólo tienen un disco. No está mal, puede ser interesante ir a verlos"
  },
  {
    "Grupo": "TERROR",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "23:15",
    "Fin": "00:15",
    "Escenario": "Chaos",
    "Relevancia": 4,
    "Procedencia": "EEUU – California",
    "Descripción": "Hardcore genérico, no me llama demasiado. Muchas voces y tirar de gritos y… poco más. Para ser hardcore no está mal, eso sí. Se dejan escuchar y tienen pinta de tener buen directo"
  },
  {
    "Grupo": "LEO JIMENEZ",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "23:15",
    "Fin": "00:15",
    "Escenario": "Ritual",
    "Relevancia": 2,
    "Procedencia": "Madrid",
    "Descripción": "A ver, el tío canta guay. Es un creído y tal, pero bueno, yo qué se, si no hay nada que ver puede ser una buena opción. Buff… putas baladas, va a ser gracioso ir a ver cómo lo abuchean. Se me está haciendo horrible, esto es casi peor que cadena 100."
  },
  {
    "Grupo": "PARKWAY DRIVE",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "00:15",
    "Fin": "01:45",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Australia",
    "Descripción": "Hardcore con melodía y buenos riff. Buen espectáculo."
  },
  {
    "Grupo": "THE ADICTS",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "01:00",
    "Fin": "02:20",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Inglaterra",
    "Descripción": "Punk inglés? A ver qué tal va"
  },
  {
    "Grupo": "BATUSHKA",
    "Preferencia": "TRUE",
    "Día": "jueves, 4",
    "Inicio": "01:45",
    "Fin": "02:45",
    "Escenario": "Ritual",
    "Relevancia": 5,
    "Procedencia": "Polonia",
    "Descripción": "El altar del holocausto en black metal y polaco."
  },
  {
    "Grupo": "BRANT BJORK",
    "Preferencia": "FALSE",
    "Día": "jueves, 4",
    "Inicio": "01:45",
    "Fin": "02:45",
    "Escenario": "Desert",
    "Relevancia": 3,
    "Procedencia": "EEUU – California",
    "Descripción": "No están mal. Más stone, pero en este caso es bastante cansino."
  },
  {
    "Grupo": "Band contest",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "14:00",
    "Fin": "14:30",
    "Escenario": "Chaos",
    "Relevancia": "",
    "Procedencia": "",
    "Descripción": ""
  },
  {
    "Grupo": "DAGLA",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "14:30",
    "Fin": "15:00",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "A Coruña",
    "Descripción": "La música está bien. De la letra no digo tanto. Para ver mientras como?"
  },
  {
    "Grupo": "MISIVA",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "15:00",
    "Fin": "15:35",
    "Escenario": "Main",
    "Relevancia": 4,
    "Procedencia": "Asturias",
    "Descripción": "Punk asturiano"
  },
  {
    "Grupo": "AVIDA DOLLARS",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "15:00",
    "Fin": "15:35",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Barcelona",
    "Descripción": "Unos niñatos. La música no es del todo mala, pero la letra es lo peor."
  },
  {
    "Grupo": "MØURA",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "15:35",
    "Fin": "16:15",
    "Escenario": "Desert",
    "Relevancia": 5,
    "Procedencia": "A Coruña",
    "Descripción": "Rock progresivo, algo de pink floyd por ahí, muy chulo, pero no tienen spotify."
  },
  {
    "Grupo": "MEGARA",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "15:35",
    "Fin": "16:15",
    "Escenario": "Ritual",
    "Relevancia": 4,
    "Procedencia": "Madrid",
    "Descripción": "Cantante femenina que nunca está mal. Bastante melódico. Es un poco meloso, pero la tía tiene pinta de cantar muy guay."
  },
  {
    "Grupo": "BROTHERS TILL WE DIE",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "16:15",
    "Fin": "16:55",
    "Escenario": "Main",
    "Relevancia": 4,
    "Procedencia": "Madrid",
    "Descripción": "Es hardcore, ya los ví en el wolfest, pero no son mi prioridad. No dejan de estar guay"
  },
  {
    "Grupo": "JUST",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "16:15",
    "Fin": "16:55",
    "Escenario": "Chaos",
    "Relevancia": "",
    "Procedencia": "España??",
    "Descripción": ""
  },
  {
    "Grupo": "CHILDRAIN",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "16:55",
    "Fin": "17:35",
    "Escenario": "Ritual",
    "Relevancia": 5,
    "Procedencia": "Vitoria",
    "Descripción": "Death metal melódico, así que guay."
  },
  {
    "Grupo": "NEILA",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "16:55",
    "Fin": "17:35",
    "Escenario": "Desert",
    "Relevancia": 5,
    "Procedencia": "Bilbao",
    "Descripción": "Esto está bastante mejor de lo que he estado escuchando. Puede que me lo guarde. Es un metal casi progresivo, las voces casi están de acompañamiento. Habrá que seguir escuchando. Me pregunto con qué coincidirá, pero sería una pena no poder verlos."
  },
  {
    "Grupo": "WHILE SHE SLEEPS",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "17:35",
    "Fin": "18:30",
    "Escenario": "Main",
    "Relevancia": 4,
    "Procedencia": "Inglaterra",
    "Descripción": "Están bien, aunque no es algo que escucharía en mi casa, tienen pinta de tener buen directo."
  },
  {
    "Grupo": "THE BLACK PANTHYS PARTY",
    "Preferencia": "",
    "Día": "viernes, 5",
    "Inicio": "17:40",
    "Fin": "18:20",
    "Escenario": "Chaos",
    "Relevancia": 2,
    "Procedencia": "Asturias",
    "Descripción": "Punk asturiano bastante guarro. Supongo que tienen movimiento. Las letras son bastante pobres"
  },
  {
    "Grupo": "SANTO ROSTRO",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "18:20",
    "Fin": "19:05",
    "Escenario": "Desert",
    "Relevancia": 5,
    "Procedencia": "Jaén",
    "Descripción": "Stoner pero muy bestia, muy buenos"
  },
  {
    "Grupo": "WORMED",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "18:30",
    "Fin": "19:15",
    "Escenario": "Ritual",
    "Relevancia": 2,
    "Procedencia": "Madrid",
    "Descripción": "Black metal, no me va el rollo éste de meter ruido sin más."
  },
  {
    "Grupo": "MUTE",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "19:00",
    "Fin": "19:50",
    "Escenario": "Chaos",
    "Relevancia": 2,
    "Procedencia": "Canadá",
    "Descripción": "Punk demasiado alegre…"
  },
  {
    "Grupo": "TRIVIUM",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "19:15",
    "Fin": "20:15",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "EEUU – Florida",
    "Descripción": "Estos los voy a ir a ver sí o sí, así que…"
  },
  {
    "Grupo": "WET CACTUS",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "19:50",
    "Fin": "20:40",
    "Escenario": "Desert",
    "Relevancia": 5,
    "Procedencia": "Cantabria",
    "Descripción": "Stone rock, creo recordar que eran buenos. Sí, lo son"
  },
  {
    "Grupo": "SERRABULHO",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "20:15",
    "Fin": "21:00",
    "Escenario": "Ritual",
    "Relevancia": 3,
    "Procedencia": "Portugal",
    "Descripción": "Death metal. Al tío no se le entiende. Tengo que escuchar más. Se supone que son graciosos porque hacen ruidos de animales, pero no me atraen demasiado."
  },
  {
    "Grupo": "BIRDS IN ROW",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "20:50",
    "Fin": "21:40",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Francia",
    "Descripción": "Hardcore que se basa en ir rápido y gritar mucho… Supongo que tienen fuerza y puede llegar a ser medio disfrutable"
  },
  {
    "Grupo": "ARCH ENEMY",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "21:00",
    "Fin": "22:00",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Suecia",
    "Descripción": "Pues eso, la música es buena, pero pierden en los estribillos. Death Metal tirando a Power"
  },
  {
    "Grupo": "THE BLACK WIZARDS",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "21:25",
    "Fin": "22:25",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Portugal",
    "Descripción": "Las voces femeninas siempre quedan bien en el rock. Aun así, la música parece algo genérica."
  },
  {
    "Grupo": "AVATAR",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "22:00",
    "Fin": "23:00",
    "Escenario": "Ritual",
    "Relevancia": 5,
    "Procedencia": "Suecia",
    "Descripción": "Death metal con un toque creepy muy chulo"
  },
  {
    "Grupo": "MILLENCOLIN",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "22:30",
    "Fin": "23:20",
    "Escenario": "Chaos",
    "Relevancia": 1,
    "Procedencia": "Suecia",
    "Descripción": "Rock americano a lo Green Day. Aburrido como pocas cosas."
  },
  {
    "Grupo": "SLIPKNOT",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "23:00",
    "Fin": "00:30",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "EEUU – Iowa",
    "Descripción": "Quitando que son un poco estribillieros, están guay y tienen temazos y buena escenografía."
  },
  {
    "Grupo": "THE OCEAN",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "23:25",
    "Fin": "00:25",
    "Escenario": "Desert",
    "Relevancia": 5,
    "Procedencia": "Alemania",
    "Descripción": "Tienen muy buena pinta. Ritmos interesantes y mucha fuerza mezclando guturales con coros melódicos."
  },
  {
    "Grupo": "CRADLE OF FILTH",
    "Preferencia": "",
    "Día": "viernes, 5",
    "Inicio": "00:30",
    "Fin": "01:30",
    "Escenario": "Ritual",
    "Relevancia": 3,
    "Procedencia": "Inglaterra",
    "Descripción": "Gothic metal"
  },
  {
    "Grupo": "CONVERGE",
    "Preferencia": "",
    "Día": "viernes, 5",
    "Inicio": "00:30",
    "Fin": "01:30",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "EEUU - Massachusetts",
    "Descripción": "Por una parte me gustan los riffs amargos de guitarra, por otra la voz gutural cutre me hace pensar en gente que sólo quiere parecer desquiciada. No me llaman demasiado, la verdad."
  },
  {
    "Grupo": "RADIO MOSCOW",
    "Preferencia": "FALSE",
    "Día": "viernes, 5",
    "Inicio": "01:25",
    "Fin": "02:25",
    "Escenario": "Desert",
    "Relevancia": 3,
    "Procedencia": "EEUU – Iowa",
    "Descripción": "Tiene un toque a lo Jimmy Hendrix en plan psicodélico. Supongo que puede estar bien para relajar"
  },
  {
    "Grupo": "CRISIX",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "01:30",
    "Fin": "02:30",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Barcelona",
    "Descripción": "Los putos Crisix. Booom"
  },
  {
    "Grupo": "VENOM PRISON",
    "Preferencia": "TRUE",
    "Día": "viernes, 5",
    "Inicio": "02:00",
    "Fin": "03:00",
    "Escenario": "Chaos",
    "Relevancia": 4,
    "Procedencia": "Gales",
    "Descripción": "Empieza bien, buenos riff. Death metal, creo."
  },
  {
    "Grupo": "Band contest",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "14:00",
    "Fin": "14:30",
    "Escenario": "Chaos",
    "Relevancia": "",
    "Procedencia": "",
    "Descripción": ""
  },
  {
    "Grupo": "PERPETUAL NIGHT",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "14:30",
    "Fin": "15:05",
    "Escenario": "Ritual",
    "Relevancia": 5,
    "Procedencia": "Granada",
    "Descripción": "Similares a insomnium, de momento guay. Dónde ha estado este grupo antes??"
  },
  {
    "Grupo": "CORDURA",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "14:30",
    "Fin": "15:00",
    "Escenario": "Desert",
    "Relevancia": "",
    "Procedencia": "Euskadi",
    "Descripción": "Instrumental tranquilo pero interesante. No es instrumental, pero tienen la temática de física que está bien"
  },
  {
    "Grupo": "LESS FORTUNATE SONGS",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "15:00",
    "Fin": "15:30",
    "Escenario": "Chaos",
    "Relevancia": 2,
    "Procedencia": "A Coruña",
    "Descripción": "Parece punk… veremos a ver al final del disco. Sí es punk algo variado. Por suerte tocan a primera hora."
  },
  {
    "Grupo": "SYBERIA",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "15:35",
    "Fin": "16:10",
    "Escenario": "Desert",
    "Relevancia": 5,
    "Procedencia": "Barcelona",
    "Descripción": "Me han parecido similares a Alcest pero instrumental, me los guardo"
  },
  {
    "Grupo": "TALESIEN",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "15:35",
    "Fin": "16:10",
    "Escenario": "Ritual",
    "Relevancia": 2,
    "Procedencia": "A Coruña",
    "Descripción": "Estilo Avalanch. Bastante aburridillo y pastoso."
  },
  {
    "Grupo": "CELTIBEERIAN",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "16:10",
    "Fin": "16:50",
    "Escenario": "Main",
    "Relevancia": 4,
    "Procedencia": "Ciudad Real",
    "Descripción": "Folk rock, esto siempre es una fiesta. Folk metal, va a ser divertido"
  },
  {
    "Grupo": "MORGEN",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "16:10",
    "Fin": "16:50",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Galicia",
    "Descripción": "Punk rock movido. Son gallegos cantando en Inglés y con mucho acento. Tiene wooos wooos y eso es un poco mierda…"
  },
  {
    "Grupo": "CATHEXIA",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "16:45",
    "Fin": "17:25",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Asturias",
    "Descripción": "Death metal rapidillo, casi thrash. Demasiado gutural y monótono quizás para mi gusto, pero puede estar bien."
  },
  {
    "Grupo": "STRIKEBACK",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "16:50",
    "Fin": "17:35",
    "Escenario": "Ritual",
    "Relevancia": 4,
    "Procedencia": "A Coruña",
    "Descripción": "Las canciones suenan un poco parecidas entre sí, pero le meten caña. Pueden estar bien,"
  },
  {
    "Grupo": "CLOSE TO THE SKY",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "17:25",
    "Fin": "18:05",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Madrid",
    "Descripción": "Hardcore con toques de electrónica. No están mal, pero no es mi rollo. Tienen pinta de ser disfrutable haciendo trampas."
  },
  {
    "Grupo": "ALIEN WEAPONRY",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "17:30",
    "Fin": "18:20",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Nueva Zelanda",
    "Descripción": "Oh Dios!!! Metal maoi!!!"
  },
  {
    "Grupo": "ATAVISMO",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "18:05",
    "Fin": "18:50",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Cádiz",
    "Descripción": "Una fusión interesante entre jazz y flamenco, o eso parece."
  },
  {
    "Grupo": "VHÄLDEMAR",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "18:20",
    "Fin": "19:00",
    "Escenario": "Ritual",
    "Relevancia": 4,
    "Procedencia": "Vizkaya",
    "Descripción": "Power metal, que nunca viene mal para variar"
  },
  {
    "Grupo": "ERASO!",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "18:50",
    "Fin": "19:35",
    "Escenario": "Chaos",
    "Relevancia": 3,
    "Procedencia": "Guipuzkoa",
    "Descripción": "Bueno... Son bastante… Intento de nirvana o algo así en vasco? A veces tienen buenos riffs… Pero son aburridillos."
  },
  {
    "Grupo": "TESTAMENT",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "19:00",
    "Fin": "20:00",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "EEUU – California",
    "Descripción": "Thrash metal. Les falta un poco de fuerza en mi humilde opinión, pero forman parte de los que montaron el tinglado así que tienen excusa. Y parecen mejores que Metallica"
  },
  {
    "Grupo": "COBRA",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "19:50",
    "Fin": "20:50",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Bilbao",
    "Descripción": "Pueden estar bien, necesito escuchar. Parece bastante genérico y la voz queda rara sobre la música, pero puede ser lo suficiente interesante y distinto de algo como puede ser el Ritual. Hay cachos de canciones que abandonan el rock más genérico, metiéndole algo de melodía."
  },
  {
    "Grupo": "TBA",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "20:00",
    "Fin": "20:45",
    "Escenario": "Ritual",
    "Relevancia": "",
    "Procedencia": "",
    "Descripción": ""
  },
  {
    "Grupo": "LAMB OF GOD",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "20:45",
    "Fin": "22:00",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "EEUU – Virginia",
    "Descripción": "Uno de estos grupos que tenía que haber escuchado hace mucho. Me alegro de tener esta excusa y oportunidad. Son brutales"
  },
  {
    "Grupo": "BRUTALITY WILL PREVAIL",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "20:50",
    "Fin": "21:50",
    "Escenario": "Chaos",
    "Relevancia": 4,
    "Procedencia": "Gales",
    "Descripción": "Hardcore un pelín genérico, pero guay. Tira a ritmos lentos pero potentes."
  },
  {
    "Grupo": "BERRI TXARRAK",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "22:00",
    "Fin": "23:00",
    "Escenario": "Ritual",
    "Relevancia": 4,
    "Procedencia": "Navarra",
    "Descripción": "Nunca me atrayeron demasiado, pero puede tener buen ambiente"
  },
  {
    "Grupo": "TROUBLED HORSE",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "22:00",
    "Fin": "23:00",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Suecia",
    "Descripción": "Son como rock clásico. No están mal, dependiendo de con quien coincida puede ser un buen concierto."
  },
  {
    "Grupo": "WITHIN TEMPTATION",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "23:00",
    "Fin": "00:30",
    "Escenario": "Main",
    "Relevancia": 3,
    "Procedencia": "Holanda",
    "Descripción": "Meh. Tienen alguna canción entretenida"
  },
  {
    "Grupo": "ANALEPSY",
    "Preferencia": "",
    "Día": "sábado, 6",
    "Inicio": "23:30",
    "Fin": "00:30",
    "Escenario": "Chaos",
    "Relevancia": "3,5",
    "Procedencia": "Portugal",
    "Descripción": "Brutal Death Metal. Esto de que al tío no se le entiende. La música es buena, eso sí."
  },
  {
    "Grupo": "CULT OF LUNA",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "00:30",
    "Fin": "01:30",
    "Escenario": "Ritual",
    "Relevancia": 5,
    "Procedencia": "Suecia",
    "Descripción": "Guturales con música muy zen. No estan nada mal. Insisto, son muy buenos. Aunque la canción que estoy escuchando ahora canta una tal Julie Christmas que le da un toque brutal."
  },
  {
    "Grupo": "COLOUR HAZE",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "00:30",
    "Fin": "01:30",
    "Escenario": "Desert",
    "Relevancia": 3,
    "Procedencia": "Alemania",
    "Descripción": "Aburridillos. Tocan Stone Rock. Puede ser ideal si estás fumado, pero no es el caso."
  },
  {
    "Grupo": "NASTY",
    "Preferencia": "FALSE",
    "Día": "sábado, 6",
    "Inicio": "01:20",
    "Fin": "02:20",
    "Escenario": "Chaos",
    "Relevancia": 4,
    "Procedencia": "Bélgica",
    "Descripción": "No están mal, en cierto modo es casi Thrash. Pero es Hardcore y se nota en las bajadas de ritmo."
  },
  {
    "Grupo": "KING DIAMOND",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "01:30",
    "Fin": "02:45",
    "Escenario": "Main",
    "Relevancia": 5,
    "Procedencia": "Dinamarca",
    "Descripción": "Heavy Metal puro en plan teatro. El cantante es un pasote."
  },
  {
    "Grupo": "MISS LAVA",
    "Preferencia": "TRUE",
    "Día": "sábado, 6",
    "Inicio": "02:00",
    "Fin": "03:00",
    "Escenario": "Desert",
    "Relevancia": 4,
    "Procedencia": "Portugal",
    "Descripción": "Es casi glam, pero sin la pluma. No están mal, aunque viendo a la hora que es… ya puedo estar puesto de monster para aguantar…"
  }
]

export default Bandas;