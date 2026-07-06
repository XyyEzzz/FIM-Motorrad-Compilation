import { Motorcycle } from "./types";
import { USER_MASTER_LIST } from "./masterList";
import { USER_MASTER_LIST2 } from "./masterList2";
import { USER_MASTER_LIST3 } from "./masterList3";
import { VINTAGE_LIST } from "./masterList4";
import { USER_MASTER_LIST5 } from "./masterList5";
import { USER_MASTER_LIST6 } from "./masterList6";
import { USER_MASTER_LIST7 } from "./masterList7";

interface BaseBike {
  baseId: string;
  manufacturer: "BMW" | "Kawasaki" | "Ducati" | "Aprilia" | "KTM" | "Husqvarna" | "Suzuki" | "Honda" | "Yamaha";
  baseModelName: string;
  startYear: number;
  endYear?: number;
  generateYearly?: boolean;
  specs: {
    displacement: string;
    engineType: string;
    cooling: string;
    notableTech?: string;
  };
  categories: string[];
  championships: string[];
  iconicRiders: string[];
  achievements: string;
  description: string;
  brandColor: string;
}

const baseBikes: BaseBike[] = [
  // --- BMW MOTORRAD ---
  {
    baseId: "bmw-historic", manufacturer: "BMW", baseModelName: "BMW R-Series Classic", startYear: 1923, endYear: 1948, generateYearly: true,
    specs: { displacement: "500cc", engineType: "Flat-Twin Boxer", cooling: "Air-cooled" },
    categories: ["Historic"], championships: ["Isle of Man TT", "Early GP"], iconicRiders: ["Georg Meier"],
    achievements: "Meletakkan fondasi dominasi BMW di era kejuaraan awal Eropa.", description: "Motor Boxer klasik BMW yang mengawali sejarah balap sebelum Perang Dunia II.", brandColor: "bg-blue-800"
  },
  {
    baseId: "bmw-rs500", manufacturer: "BMW", baseModelName: "BMW RS 500 (Type 255 Kompressor)", startYear: 1949, endYear: 1954, generateYearly: true,
    specs: { displacement: "492cc", engineType: "Flat-Twin Boxer Supercharged", cooling: "Air-cooled", notableTech: "Twin-supercharger, shaft drive" },
    categories: ["MotoGP", "Historic"], championships: ["FIM GP 500cc"], iconicRiders: ["Georg Meier", "Walter Zeller"],
    achievements: "Pemenang TT legendaris sebelum supercharger dilarang.", description: "Sepeda motor Boxer twin bermesin supercharger di awal kejuaraan.", brandColor: "bg-blue-600"
  },
  {
    baseId: "bmw-s1000rr", manufacturer: "BMW", baseModelName: "BMW S 1000 RR", startYear: 2009, endYear: 2020, generateYearly: true,
    specs: { displacement: "999cc", engineType: "Inline-4 Cylinder", cooling: "Liquid-cooled" },
    categories: ["WorldSBK", "Enduro"], championships: ["FIM WorldSBK", "FIM EWC"], iconicRiders: ["Troy Corser", "Leon Haslam"],
    achievements: "Meraih banyak podium di WorldSBK dan EWC.", description: "Superbike modern pertama BMW yang mendobrak pasar motor sport empat silinder.", brandColor: "bg-blue-500"
  },
  {
    baseId: "bmw-m1000rr", manufacturer: "BMW", baseModelName: "BMW M 1000 RR", startYear: 2021, endYear: 2026, generateYearly: true,
    specs: { displacement: "999cc", engineType: "Inline-4 Cylinder DOHC High-Performance", cooling: "Liquid-cooled", notableTech: "M Winglets carbon, Titanium valves" },
    categories: ["WorldSBK", "Enduro"], championships: ["FIM WorldSBK", "FIM EWC"], iconicRiders: ["Michael van der Mark", "Toprak Razgatlioglu"],
    achievements: "Juara Dunia Balap Ketahanan EWC, Juara seri WorldSBK (2024-2026).", description: "Versi homologasi balap ekstrem dari divisi M BMW Motorrad.", brandColor: "bg-blue-700"
  },
  {
    baseId: "bmw-r80gs", manufacturer: "BMW", baseModelName: "BMW R80G/S & R100GS", startYear: 1980, endYear: 1987, generateYearly: true,
    specs: { displacement: "797cc", engineType: "2-Cylinder Flat-Twin Boxer", cooling: "Air-cooled" },
    categories: ["Rally"], championships: ["Paris-Dakar Rally"], iconicRiders: ["Hubert Auriol", "Gaston Rahier"],
    achievements: "Juara Dakar Rally 1981, 1983, 1984, 1985.", description: "Motor pelopor kelas Adventure yang mendominasi Dakar.", brandColor: "bg-sky-600"
  },
  
  // --- KAWASAKI ---
  {
    baseId: "kawasaki-historic", manufacturer: "Kawasaki", baseModelName: "Kawasaki Early GP/Street", startYear: 1960, endYear: 1974, generateYearly: true,
    specs: { displacement: "125cc - 500cc", engineType: "Inline-Twin / Triple", cooling: "Air-cooled" },
    categories: ["Historic"], championships: ["Early GP", "Isle of Man TT"], iconicRiders: ["Dave Simmonds"],
    achievements: "Membuka jalan bagi Kawasaki di kancah balap internasional.", description: "Era awal motor legendaris Kawasaki sebelum era supersport modern.", brandColor: "bg-green-800"
  },
  {
    baseId: "kawasaki-kr250-350", manufacturer: "Kawasaki", baseModelName: "Kawasaki KR250/350", startYear: 1975, endYear: 1983, generateYearly: true,
    specs: { displacement: "249cc / 347cc", engineType: "Inline-twin Tandem, 2-Stroke", cooling: "Liquid-cooled" },
    categories: ["MotoGP", "Historic"], championships: ["FIM GP 250cc", "FIM GP 350cc"], iconicRiders: ["Kork Ballington", "Anton Mang"],
    achievements: "4x Juara Dunia GP 250cc dan 4x Juara Dunia GP 350cc.", description: "Motor GP 2-tak dengan penataan tandem yang menaklukkan kelas menengah.", brandColor: "bg-emerald-500"
  },
  {
    baseId: "kawasaki-zxrr", manufacturer: "Kawasaki", baseModelName: "Kawasaki ZX-RR", startYear: 2002, endYear: 2008, generateYearly: true,
    specs: { displacement: "990cc / 800cc", engineType: "Inline-4 Cylinder", cooling: "Liquid-cooled" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Shinya Nakano", "Randy de Puniet"],
    achievements: "Beberapa podium legendaris di MotoGP.", description: "Prototipe sasis aluminium hijau ikonik Kawasaki sebelum mundur di 2008.", brandColor: "bg-green-600"
  },
  {
    baseId: "kawasaki-zx10rr", manufacturer: "Kawasaki", baseModelName: "Kawasaki Ninja ZX-10RR", startYear: 2011, endYear: 2026, generateYearly: true,
    specs: { displacement: "998cc", engineType: "Inline-4 Cylinder DOHC", cooling: "Liquid-cooled", notableTech: "Pankl titanium connecting rods" },
    categories: ["WorldSBK"], championships: ["FIM WorldSBK"], iconicRiders: ["Jonathan Rea", "Tom Sykes", "Alex Lowes"],
    achievements: "6 gelar Juara Dunia WorldSBK berturut-turut (Jonathan Rea 2015-2020).", description: "Senjata homologasi paling berkuasa dari Kawasaki di era modern WorldSBK.", brandColor: "bg-green-700"
  },
  {
    baseId: "kawasaki-kx450", manufacturer: "Kawasaki", baseModelName: "Kawasaki KX450", startYear: 2006, endYear: 2026, generateYearly: true,
    specs: { displacement: "449cc", engineType: "Single-cylinder 4-Stroke DOHC", cooling: "Liquid-cooled" },
    categories: ["Motocross"], championships: ["FIM MXGP", "FIM World Supercross"], iconicRiders: ["Eli Tomac", "Romain Febvre"],
    achievements: "Juara Dunia FIM MXGP, Supercross.", description: "Mesin Motocross andalan kelas premier Kawasaki.", brandColor: "bg-lime-600"
  },

  // --- DUCATI ---
  {
    baseId: "ducati-historic", manufacturer: "Ducati", baseModelName: "Ducati Classic / Cucciolo", startYear: 1946, endYear: 1993, generateYearly: true,
    specs: { displacement: "125cc - 851cc", engineType: "Single / L-Twin", cooling: "Air-cooled" },
    categories: ["Historic"], championships: ["Early GP", "TT Formula 1"], iconicRiders: ["Mike Hailwood", "Paul Smart"],
    achievements: "Kemenangan spektakuler di Isle of Man dan Formula 1 TT.", description: "Masa-masa klasik Ducati dari mesin kecil Cucciolo hingga ke L-Twin desmodromic yang melegenda.", brandColor: "bg-red-800"
  },
  {
    baseId: "ducati-desmo", manufacturer: "Ducati", baseModelName: "Ducati Desmosedici GP", startYear: 2003, endYear: 2026, generateYearly: true,
    specs: { displacement: "1000cc", engineType: "90-degree V4, Desmodromic", cooling: "Liquid-cooled", notableTech: "Desmodromic valves, Aero-winglets" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Casey Stoner", "Francesco Bagnaia", "Jorge Martin"],
    achievements: "Juara Dunia MotoGP 2007, 2022-2023, 2024.", description: "Motor balap terkuat di kancah MotoGP modern dengan katup desmodromik.", brandColor: "bg-red-600"
  },
  {
    baseId: "ducati-916", manufacturer: "Ducati", baseModelName: "Ducati 916/996/998", startYear: 1994, endYear: 2002, generateYearly: true,
    specs: { displacement: "916-998cc", engineType: "L-Twin, 90-degree, Desmodromic", cooling: "Liquid-cooled", notableTech: "Single-sided swingarm" },
    categories: ["WorldSBK"], championships: ["FIM WorldSBK"], iconicRiders: ["Carl Fogarty", "Troy Bayliss"],
    achievements: "Mendominasi WorldSBK dekade 90-an.", description: "Mahakarya Massimo Tamburini yang sangat ikonik.", brandColor: "bg-red-500"
  },
  {
    baseId: "ducati-panigalev4", manufacturer: "Ducati", baseModelName: "Ducati Panigale V4 R", startYear: 2019, endYear: 2026, generateYearly: true,
    specs: { displacement: "998cc", engineType: "90-degree V4 Stradale", cooling: "Liquid-cooled", notableTech: "Carbon winglets" },
    categories: ["WorldSBK"], championships: ["FIM WorldSBK"], iconicRiders: ["Alvaro Bautista", "Nicolo Bulega"],
    achievements: "Juara Dunia WorldSBK 2022 & 2023.", description: "Puncak rekayasa balap superbike V4 Ducati.", brandColor: "bg-red-700"
  },

  // --- APRILIA ---
  {
    baseId: "aprilia-historic", manufacturer: "Aprilia", baseModelName: "Aprilia Early Classic", startYear: 1968, endYear: 1990, generateYearly: true,
    specs: { displacement: "125cc - 250cc", engineType: "Single / Twin", cooling: "Air/Liquid-cooled" },
    categories: ["Historic"], championships: ["Early GP", "Motocross"], iconicRiders: ["Ivan Alborghetti"],
    achievements: "Awal mula Aprilia merajai kompetisi lokal hingga dunia.", description: "Langkah pertama pabrikan Noale merintis inovasi dari motor berkapasitas kecil.", brandColor: "bg-gray-700"
  },
  {
    baseId: "aprilia-rs250", manufacturer: "Aprilia", baseModelName: "Aprilia RSW250", startYear: 1991, endYear: 2009, generateYearly: true,
    specs: { displacement: "249cc", engineType: "V-Twin, 2-Stroke", cooling: "Liquid-cooled" },
    categories: ["MotoGP", "Historic"], championships: ["FIM GP 250cc"], iconicRiders: ["Valentino Rossi", "Max Biaggi", "Jorge Lorenzo"],
    achievements: "Meraih belasan gelar juara dunia 250cc.", description: "Mesin 2-tak 250cc Aprilia yang mendominasi era 90-an hingga 2000-an awal.", brandColor: "bg-gray-800"
  },
  {
    baseId: "aprilia-rsgp", manufacturer: "Aprilia", baseModelName: "Aprilia RS-GP", startYear: 2015, endYear: 2026, generateYearly: true,
    specs: { displacement: "1000cc", engineType: "90-degree V4 Cylinder", cooling: "Liquid-cooled", notableTech: "Ground-effect aerodynamics" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Aleix Espargaro", "Maverick Viñales"],
    achievements: "Kemenangan GP dan penantang kuat kejuaraan.", description: "Prototipe MotoGP Aprilia dengan aero inovatif.", brandColor: "bg-slate-900"
  },
  {
    baseId: "aprilia-rsv4", manufacturer: "Aprilia", baseModelName: "Aprilia RSV4 Factory", startYear: 2009, endYear: 2026, generateYearly: true,
    specs: { displacement: "999cc", engineType: "65-degree V4 Cylinder", cooling: "Liquid-cooled" },
    categories: ["WorldSBK"], championships: ["FIM WorldSBK"], iconicRiders: ["Max Biaggi", "Sylvain Guintoli"],
    achievements: "Juara Dunia WorldSBK 2010, 2012, 2014.", description: "Superbike kompak dengan mesin V4 tersukses Aprilia.", brandColor: "bg-red-600"
  },

  // --- KTM ---
  {
    baseId: "ktm-historic", manufacturer: "KTM", baseModelName: "KTM Early Off-Road", startYear: 1953, endYear: 2002, generateYearly: true,
    specs: { displacement: "125cc - 500cc", engineType: "Single-cylinder", cooling: "Air/Liquid-cooled" },
    categories: ["Historic", "Motocross"], championships: ["Early ISDT", "Motocross World Championship"], iconicRiders: ["Gennady Moiseev"],
    achievements: "Meraih gelar dunia pertama KTM di arena motorcross.", description: "Masa-masa klasik KTM membangun reputasi ketangguhan tanpa kompromi di lintasan tanah.", brandColor: "bg-orange-800"
  },
  {
    baseId: "ktm-rc16", manufacturer: "KTM", baseModelName: "KTM RC16", startYear: 2017, endYear: 2026, generateYearly: true,
    specs: { displacement: "1000cc", engineType: "V4, 4-stroke", cooling: "Liquid-cooled", notableTech: "Steel trellis frame, WP suspension" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Brad Binder", "Miguel Oliveira", "Pedro Acosta"],
    achievements: "Berbagai kemenangan Grand Prix.", description: "Prototipe MotoGP dengan rangka tubular baja khas KTM.", brandColor: "bg-orange-500"
  },
  {
    baseId: "ktm-sxf450", manufacturer: "KTM", baseModelName: "KTM 450 SX-F", startYear: 2003, endYear: 2026, generateYearly: true,
    specs: { displacement: "449cc", engineType: "Single-cylinder SOHC", cooling: "Liquid-cooled" },
    categories: ["Motocross"], championships: ["FIM MXGP", "AMA Supercross"], iconicRiders: ["Antonio Cairoli", "Jeffrey Herlings"],
    achievements: "Mendominasi kejuaraan MXGP dengan puluhan gelar.", description: "Mesin Motocross andalan dari Austria.", brandColor: "bg-amber-500"
  },
  {
    baseId: "ktm-450rally", manufacturer: "KTM", baseModelName: "KTM 450 Rally", startYear: 2011, endYear: 2026, generateYearly: true,
    specs: { displacement: "449cc", engineType: "Single-cylinder 4-stroke", cooling: "Liquid-cooled" },
    categories: ["Rally"], championships: ["Dakar Rally", "W2RC"], iconicRiders: ["Marc Coma", "Toby Price"],
    achievements: "18 kemenangan Dakar berturut-turut.", description: "Raja gurun tak terbantahkan di Reli Dakar.", brandColor: "bg-orange-600"
  },

  // --- HUSQVARNA ---
  {
    baseId: "husqvarna-historic", manufacturer: "Husqvarna", baseModelName: "Husqvarna Pioneers", startYear: 1903, endYear: 2013, generateYearly: true,
    specs: { displacement: "125cc - 500cc", engineType: "Single-cylinder 2-Stroke / 4-Stroke", cooling: "Air/Liquid-cooled" },
    categories: ["Historic", "Motocross"], championships: ["Early Motocross World Championship", "ISDE"], iconicRiders: ["Torsten Hallman", "Malcolm Smith"],
    achievements: "Bapak moyang Motocross asal Swedia yang melegenda di seluruh dunia.", description: "Sejarah panjang lebih dari satu abad yang merintis olahraga motorcross modern.", brandColor: "bg-blue-900"
  },
  {
    baseId: "husqvarna-fc250", manufacturer: "Husqvarna", baseModelName: "Husqvarna FC 250", startYear: 2014, endYear: 2026, generateYearly: true,
    specs: { displacement: "249.9cc", engineType: "Single-cylinder DOHC", cooling: "Liquid-cooled" },
    categories: ["Motocross"], championships: ["FIM MX2"], iconicRiders: ["Kay de Wolf"],
    achievements: "Juara Dunia FIM MX2 2024.", description: "Motor premium garuk tanah dari Husky.", brandColor: "bg-sky-700"
  },
  {
    baseId: "husqvarna-te300", manufacturer: "Husqvarna", baseModelName: "Husqvarna TE 300", startYear: 2014, endYear: 2026, generateYearly: true,
    specs: { displacement: "293cc", engineType: "Single-cylinder 2-Stroke EFI", cooling: "Liquid-cooled" },
    categories: ["Enduro"], championships: ["Hard Enduro World Championship"], iconicRiders: ["Billy Bolt", "Graham Jarvis"],
    achievements: "Merajai Hard Enduro dan SuperEnduro.", description: "Raja Hard Enduro bermesin 2-tak injeksi.", brandColor: "bg-blue-900"
  },

  // --- SUZUKI ---
  {
    baseId: "suzuki-historic", manufacturer: "Suzuki", baseModelName: "Suzuki Early GP/Street", startYear: 1952, endYear: 1985, generateYearly: true,
    specs: { displacement: "50cc - 500cc", engineType: "2-Stroke / 4-Stroke", cooling: "Air/Liquid-cooled" },
    categories: ["Historic"], championships: ["Isle of Man TT", "FIM GP"], iconicRiders: ["Ernst Degner", "Barry Sheene"],
    achievements: "Membawa revolusi mesin 2-tak berperforma tinggi ke panggung dunia.", description: "Era keemasan pengembangan motor balap pertama Suzuki yang sangat dominan.", brandColor: "bg-sky-800"
  },
  {
    baseId: "suzuki-rgv500", manufacturer: "Suzuki", baseModelName: "Suzuki RGV500", startYear: 1986, endYear: 2001, generateYearly: true,
    specs: { displacement: "499cc", engineType: "V4, 2-Stroke", cooling: "Liquid-cooled" },
    categories: ["MotoGP", "Historic"], championships: ["FIM GP 500cc"], iconicRiders: ["Kevin Schwantz", "Kenny Roberts Jr"],
    achievements: "Juara Dunia GP 500cc 1993 & 2000.", description: "Mesin V4 2-tak liar dengan pancaran tenaga agresif.", brandColor: "bg-sky-500"
  },
  {
    baseId: "suzuki-gsxrr", manufacturer: "Suzuki", baseModelName: "Suzuki GSX-RR", startYear: 2015, endYear: 2022, generateYearly: true,
    specs: { displacement: "1000cc", engineType: "Inline-4 Cylinder DOHC", cooling: "Liquid-cooled" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Joan Mir", "Alex Rins"],
    achievements: "Juara Dunia MotoGP 2020.", description: "Prototipe MotoGP Suzuki dengan handling luar biasa (pensiun 2022).", brandColor: "bg-cyan-500"
  },
  {
    baseId: "suzuki-gsxr1000", manufacturer: "Suzuki", baseModelName: "Suzuki GSX-R1000", startYear: 2001, endYear: 2026, generateYearly: true,
    specs: { displacement: "999.8cc", engineType: "Inline-4 Cylinder DOHC", cooling: "Liquid-cooled" },
    categories: ["WorldSBK", "Enduro"], championships: ["FIM WorldSBK", "FIM EWC"], iconicRiders: ["Troy Corser", "Gregg Black"],
    achievements: "Juara Dunia WorldSBK 2005 & legiun pemenang EWC 24 Jam.", description: "Superbike legendaris Gixxer, tangguh dan awet di balap ketahanan.", brandColor: "bg-blue-700"
  },

  // --- HONDA ---
  {
    baseId: "honda-historic", manufacturer: "Honda", baseModelName: "Honda Historic GP/Street", startYear: 1949, endYear: 1983, generateYearly: true,
    specs: { displacement: "125cc - 500cc", engineType: "Multi-cylinder", cooling: "Air/Liquid-cooled" },
    categories: ["Historic"], championships: ["Isle of Man TT", "FIM GP"], iconicRiders: ["Mike Hailwood", "Jim Redman"],
    achievements: "Menancapkan nama Honda sebagai raksasa balap internasional.", description: "Kisah epik Soichiro Honda membawa motor buatan Jepang menantang dan menaklukkan dunia.", brandColor: "bg-red-800"
  },
  {
    baseId: "honda-nsr500", manufacturer: "Honda", baseModelName: "Honda NSR500", startYear: 1984, endYear: 2001, generateYearly: true,
    specs: { displacement: "499cc", engineType: "V4, 2-Stroke", cooling: "Liquid-cooled" },
    categories: ["MotoGP", "Historic"], championships: ["FIM GP 500cc"], iconicRiders: ["Mick Doohan", "Valentino Rossi", "Wayne Gardner"],
    achievements: "10x Juara Dunia Pembalap 500cc.", description: "Ikon absolut balap motor 2-tak kelas premier.", brandColor: "bg-red-500"
  },
  {
    baseId: "honda-rc211v", manufacturer: "Honda", baseModelName: "Honda RC211V", startYear: 2002, endYear: 2006, generateYearly: true,
    specs: { displacement: "990cc", engineType: "V5 Cylinder, 4-Stroke", cooling: "Liquid-cooled" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Valentino Rossi", "Nicky Hayden"],
    achievements: "Juara Dunia 2002, 2003, 2006.", description: "Mahakarya mesin V5 revolusioner di awal era 4-tak.", brandColor: "bg-orange-600"
  },
  {
    baseId: "honda-rc213v", manufacturer: "Honda", baseModelName: "Honda RC213V", startYear: 2012, endYear: 2026, generateYearly: true,
    specs: { displacement: "1000cc", engineType: "V4 Cylinder", cooling: "Liquid-cooled", notableTech: "Seamless-shift transmission" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Marc Marquez", "Dani Pedrosa"],
    achievements: "6x Juara Dunia MotoGP bersama Marc Marquez.", description: "Prototipe V4 dominan HRC di era 1000cc.", brandColor: "bg-red-755"
  },
  {
    baseId: "honda-cbr1000rr", manufacturer: "Honda", baseModelName: "Honda CBR1000RR Fireblade", startYear: 2004, endYear: 2026, generateYearly: true,
    specs: { displacement: "999cc", engineType: "Inline-4 Cylinder", cooling: "Liquid-cooled" },
    categories: ["WorldSBK", "Enduro"], championships: ["FIM WorldSBK", "EWC"], iconicRiders: ["James Toseland", "Iker Lecuona"],
    achievements: "Juara Dunia WorldSBK 2007.", description: "Superbike ikonik Honda yang tangguh di WSBK dan EWC.", brandColor: "bg-red-600"
  },

  // --- YAMAHA ---
  {
    baseId: "yamaha-historic", manufacturer: "Yamaha", baseModelName: "Yamaha Early Classics", startYear: 1955, endYear: 1997, generateYearly: true,
    specs: { displacement: "50cc - 500cc", engineType: "2-Stroke / 4-Stroke", cooling: "Air/Liquid-cooled" },
    categories: ["Historic"], championships: ["FIM GP", "Isle of Man TT"], iconicRiders: ["Giacomo Agostini", "Kenny Roberts", "Eddie Lawson"],
    achievements: "Melambungkan kejayaan teknologi 2-tak dan kesuksesan grand prix berturut-turut.", description: "Dari debut perdana YA-1 di Mt. Fuji hingga revolusi era keemasan balap dunia.", brandColor: "bg-blue-900"
  },
  {
    baseId: "yamaha-yzr500", manufacturer: "Yamaha", baseModelName: "Yamaha YZR500", startYear: 1973, endYear: 2001, generateYearly: true,
    specs: { displacement: "498cc", engineType: "V4, 2-Stroke", cooling: "Liquid-cooled" },
    categories: ["MotoGP", "Historic"], championships: ["FIM GP 500cc"], iconicRiders: ["Wayne Rainey", "Eddie Lawson", "Kenny Roberts"],
    achievements: "9x Juara Dunia 500cc GP.", description: "Sasis Deltabox pionir & tenaga luar biasa dari era 2-tak.", brandColor: "bg-blue-600"
  },
  {
    baseId: "yamaha-yzrm1", manufacturer: "Yamaha", baseModelName: "Yamaha YZR-M1", startYear: 2002, endYear: 2026, generateYearly: true,
    specs: { displacement: "1000cc", engineType: "Inline-4 Crossplane", cooling: "Liquid-cooled", notableTech: "Crossplane crankshaft (CP4)" },
    categories: ["MotoGP"], championships: ["FIM MotoGP"], iconicRiders: ["Valentino Rossi", "Jorge Lorenzo", "Fabio Quartararo"],
    achievements: "Juara Dunia MotoGP (2004, 2005, 2008, 2009, 2010, 2012, 2015, 2021).", description: "Mesin M1 legendaris berkarakter linier berkat poros engkol silang (Crossplane).", brandColor: "bg-blue-500"
  },
  {
    baseId: "yamaha-r1", manufacturer: "Yamaha", baseModelName: "Yamaha YZF-R1", startYear: 1998, endYear: 2026, generateYearly: true,
    specs: { displacement: "998cc", engineType: "Inline-4 Crossplane", cooling: "Liquid-cooled" },
    categories: ["WorldSBK", "Enduro"], championships: ["FIM WorldSBK", "FIM EWC"], iconicRiders: ["Ben Spies", "Toprak Razgatlioglu"],
    achievements: "Juara Dunia WorldSBK 2009 & 2021.", description: "Superbike bermesin Crossplane yang menjuarai WorldSBK & Suzuka 8H.", brandColor: "bg-blue-700"
  },
  {
    baseId: "yamaha-yz450f", manufacturer: "Yamaha", baseModelName: "Yamaha YZ450F", startYear: 1997, endYear: 2026, generateYearly: true,
    specs: { displacement: "449cc", engineType: "Single-cylinder DOHC", cooling: "Liquid-cooled" },
    categories: ["Motocross"], championships: ["FIM MXGP", "AMA Supercross"], iconicRiders: ["Stefan Everts", "Eli Tomac"],
    achievements: "Pelopor revolusi mesin 4-tak MX modern.", description: "Mesin legendaris dengan silinder condong ke belakang.", brandColor: "bg-blue-800"
  }
];

interface HistoricSpec {
  modelName: string;
  displacement: string;
  engineType: string;
  cooling: string;
  notableTech?: string;
  description?: string;
  achievements?: string;
  categories?: string[];
  championships?: string[];
  iconicRiders?: string[];
}

function getHistoricSpecs(baseId: string, year: number): HistoricSpec[] {
  if (baseId === "ducati-historic") {
    if (year >= 1946 && year <= 1955) {
      return [{
        modelName: "Ducati Cucciolo T1/T2 Sport",
        displacement: "48cc",
        engineType: "Single-Cylinder OHV 4-Stroke",
        cooling: "Air-cooled",
        notableTech: "Clip-on auxiliary engine, pull-rod valve actuation, 2-speed manual gearbox",
        description: "Mesin bantu jepit Cucciolo yang legendaris, penanda dimulainya kejayaan industri sepeda motor Ducati pasca-perang.",
        achievements: "Membangun mobilitas Italia modern pasca-perang dengan efisiensi tinggi.",
        iconicRiders: ["Aldo Leoni"]
      }];
    } else if (year >= 1956 && year <= 1967) {
      return [
        {
          modelName: "Ducati 125 Gran Sport 'Marianna'",
          displacement: "125cc",
          engineType: "Single-Cylinder OHC 4-Stroke",
          cooling: "Air-cooled",
          notableTech: "Bevel-gear driven overhead camshaft, designed by Fabio Taglioni",
          description: "Motor balap legendaris bermesin noken as bevel-gear karya Fabio Taglioni yang menjuarai ajang jalan raya jarak jauh.",
          achievements: "Mendominasi ajang balap ketahanan sirkuit jalan raya Motogiro d'Italia.",
          iconicRiders: ["Gianni Degli Antoni"]
        },
        {
          modelName: "Ducati 250 Mach 1",
          displacement: "249cc",
          engineType: "Single-Cylinder OHC 4-Stroke",
          cooling: "Air-cooled",
          notableTech: "Bevel-drive single OHC, 5-speed gearbox, 100+ mph capability",
          description: "Motor jalan raya 250cc tercepat di masanya, menjadi favorit para pebalap klub di seluruh Eropa.",
          achievements: "Menang di kelas produksi Isle of Man TT.",
          iconicRiders: ["Mike Hailwood"]
        }
      ];
    } else if (year >= 1968 && year <= 1971) {
      return [{
        modelName: "Ducati Mark 3 Desmo 350",
        displacement: "340cc",
        engineType: "Single-Cylinder Desmodromic OHC",
        cooling: "Air-cooled",
        notableTech: "Desmodromic valve actuation, bevel-gear driven camshaft",
        description: "Motor silinder tunggal komersial pertama di dunia yang memboyong teknologi katup Desmodromic dari sirkuit ke jalan raya.",
        achievements: "Membuktikan keandalan sistem katup desmo tanpa pegas di putaran mesin tinggi.",
        iconicRiders: ["Bruno Spaggiari"]
      }];
    } else if (year >= 1972 && year <= 1979) {
      return [{
        modelName: "Ducati 750 SS / 900 SS Bevel Desmo",
        displacement: year <= 1974 ? "748cc" : "864cc",
        engineType: "90-degree L-Twin Desmodromic",
        cooling: "Air-cooled",
        notableTech: "Bevel-drive L-twin Desmodromic, Dell'Orto carburetors, round-case or square-case",
        description: "Suku ikonik L-Twin Ducati dengan penggerak bevel yang bertenaga besar dan bersuara menggelegar.",
        achievements: "Paul Smart memenangkan Imola 200 tahun 1972 dengan spektakuler.",
        iconicRiders: ["Paul Smart", "Mike Hailwood"]
      }];
    } else if (year >= 1980 && year <= 1987) {
      return [{
        modelName: "Ducati Pantah 600TL / 750 F1",
        displacement: year <= 1984 ? "583cc" : "748cc",
        engineType: "90-degree L-Twin Desmodromic",
        cooling: "Air-cooled",
        notableTech: "Belt-driven overhead camshafts, steel trellis frame, Marzocchi suspension",
        description: "Transisi revolusioner Ducati menggunakan karet sabuk (belt) untuk noken as desmo, dipadu rangka tubular teralis baja yang legendaris.",
        achievements: "Meraih gelar juara dunia TT Formula 2 tingkat dunia.",
        iconicRiders: ["Tony Rutter"]
      }];
    } else { // 1988 - 1993
      return [{
        modelName: "Ducati 851 / 888 Desmoquattro",
        displacement: year <= 1991 ? "851cc" : "888cc",
        engineType: "90-degree L-Twin Desmoquattro 4-Valve",
        cooling: "Liquid-cooled",
        notableTech: "Webber-Marelli fuel injection, liquid-cooling, 4 valves per cylinder",
        description: "Lahirnya mesin superbike modern berpendingin air dengan katup desmo 4-valve yang perkasa.",
        achievements: "Juara Dunia FIM WorldSBK 1990, 1991, 1992 bersama Raymond Roche dan Doug Polen.",
        iconicRiders: ["Raymond Roche", "Doug Polen", "Giancarlo Falappa"]
      }];
    }
  }

  if (baseId === "kawasaki-historic") {
    if (year >= 1960 && year <= 1965) {
      return [{
        modelName: "Kawasaki 125 B8M 'Red Tank Furore'",
        displacement: "125cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Rotary disc valve, pressed-steel backbone frame",
        description: "Sepeda motor motocross competitive pertama dari Kawasaki yang mendominasi balapan tanah di Jepang.",
        achievements: "Menyapu bersih posisi 1 sampai 6 di ajang Hyogo Prefectural Motocross Championship 1963.",
        iconicRiders: ["Kenjiro Tanaka"]
      }];
    } else if (year >= 1966 && year <= 1968) {
      return [{
        modelName: "Kawasaki A1 Samurai 250",
        displacement: "247cc",
        engineType: "Parallel-Twin 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Dual rotary valves, twin Mikuni carburetors",
        description: "Motor sport jalan raya bermesin dua tak kencang yang mengangkat nama Kawasaki ke panggung internasional.",
        achievements: "Dikenal sebagai motor kelas 250cc tercepat dan paling bertenaga di generasinya.",
        iconicRiders: ["Ginger Molloy"]
      }];
    } else { // 1969 - 1974
      return [{
        modelName: year <= 1971 ? "Kawasaki H1 Mach III 500" : "Kawasaki H2 Mach IV 750",
        displacement: year <= 1971 ? "498cc" : "748cc",
        engineType: "Inline-3 Cylinder 2-Stroke (Triple)",
        cooling: "Air-cooled",
        notableTech: "Asymmetric 3-cylinder configuration, CDI electronic ignition, three expansion chambers",
        description: "Dikenal dengan julukan 'The Triple' atau 'The Widowmaker' karena kecepatan akselerasinya yang liar dan brutal.",
        achievements: "Mendominasi balap drag strip Amerika dan sirkuit jalan raya kelas dunia.",
        iconicRiders: ["Dave Simmonds", "Paul Smart"]
      }];
    }
  }

  if (baseId === "honda-historic") {
    if (year >= 1949 && year <= 1958) {
      return [{
        modelName: year <= 1951 ? "Honda Dream D-Type" : "Honda Dream E-Type",
        displacement: year <= 1951 ? "98cc" : "146cc",
        engineType: year <= 1951 ? "Single-Cylinder 2-Stroke" : "Single-Cylinder OHV 4-Stroke",
        cooling: "Air-cooled",
        notableTech: "Pressed-steel channel frame, automatic dry clutch (D-Type)",
        description: "Motor komersial murni pertama rancangan langsung Soichiro Honda yang meletakkan dasar bagi kejayaan industri Honda.",
        achievements: "Mendorong mobilitas masyarakat Jepang pasca-perang.",
        iconicRiders: ["Soichiro Honda"]
      }];
    } else if (year >= 1959 && year <= 1967) {
      return [
        {
          modelName: "Honda RC162 / RC166 Grand Prix",
          displacement: "249cc",
          engineType: "Inline-6 Cylinder 4-Stroke DOHC 24V",
          cooling: "Air-cooled",
          notableTech: "Gear-driven overhead double camshafts, 24 valves, 18,000 RPM redline",
          description: "Sebuah mahakarya rekayasa mesin balap multi-silinder Honda dengan pekikan raungan suara mesin terindah dalam sejarah sirkuit.",
          achievements: "Menyapu bersih gelar juara dunia pembalap dan konstruktor kelas 250cc tanpa terkalahkan.",
          iconicRiders: ["Mike Hailwood", "Jim Redman"]
        },
        {
          modelName: "Honda RC149 GP",
          displacement: "125cc",
          engineType: "Inline-5 Cylinder 4-Stroke DOHC 20V",
          cooling: "Air-cooled",
          notableTech: "Gear-driven noken as, 5 silinder mikro dengan bore 35.5mm, 20,500 RPM",
          description: "Mesin balap mikro dengan piston dan katup seukuran koin, puncak pembuktian teknologi 4-tak Honda.",
          achievements: "Juara Dunia GP 125cc tahun 1966 bersama Luigi Taveri.",
          iconicRiders: ["Luigi Taveri"]
        }
      ];
    } else if (year >= 1968 && year <= 1978) {
      return [
        {
          modelName: "Honda CB750 Four",
          displacement: "736cc",
          engineType: "Inline-4 Cylinder SOHC 4-Stroke",
          cooling: "Air-cooled",
          notableTech: "First production front disc brake, inline-four engine configuration, electric start",
          description: "Dikenal luas sebagai 'Superbike' komersial pertama di dunia, mendefinisikan bentuk motor sport modern.",
          achievements: "Dick Mann memenangkan Daytona 200 1970 dengan versi balap CB750.",
          iconicRiders: ["Dick Mann"]
        },
        {
          modelName: "Honda Elsinore CR250M",
          displacement: "248cc",
          engineType: "Single-Cylinder 2-Stroke",
          cooling: "Air-cooled",
          notableTech: "Chrome-molybdenum steel frame, plastic fenders, high-expansion pipe",
          description: "Motor motocross dua tak pertama dari Honda yang sukses besar secara komersial dan sangat lincah.",
          achievements: "Gary Jones menjuarai AMA Motocross 250cc National Championship tahun 1973.",
          iconicRiders: ["Gary Jones", "Steve McQueen"]
        }
      ];
    } else { // 1979 - 1983
      return [
        {
          modelName: "Honda NR500 GP (Oval Piston)",
          displacement: "499cc",
          engineType: "90-degree V4 Oval Piston 32V 4-Stroke",
          cooling: "Liquid-cooled",
          notableTech: "Oval-shaped pistons, 8 valves and 2 spark plugs per cylinder, titanium conrods, carbon bodywork",
          description: "Proyek ambisius Honda untuk melawan dominasi mesin dua tak menggunakan teknologi empat tak piston oval ekstrem.",
          achievements: "Menghasilkan keajaiban rekayasa sirkuit yang kemudian melahirkan seri NR750 eksotis.",
          iconicRiders: ["Mick Grant", "Takazumi Katayama"]
        },
        {
          modelName: "Honda NS500 GP",
          displacement: "499cc",
          engineType: "Two-Stroke 112-degree V3 Cylinder",
          cooling: "Liquid-cooled",
          notableTech: "Unusual V3 layout, highly compact frame, ATAC exhaust power valves",
          description: "Motor dua tak pertama Honda yang didesain setelah kegagalan proyek NR500, menawarkan kelincahan menikung luar biasa.",
          achievements: "Freddie Spencer menjuarai GP 500cc tahun 1983, menjadi juara dunia termuda di masanya.",
          iconicRiders: ["Freddie Spencer", "Marco Lucchinelli"]
        }
      ];
    }
  }

  if (baseId === "suzuki-historic") {
    if (year >= 1952 && year <= 1959) {
      return [{
        modelName: year <= 1954 ? "Suzuki Power Free 36cc" : "Suzuki Colleda CO 125",
        displacement: year <= 1954 ? "36cc" : "123cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Rotary-valve auxiliary motor, steel box-frame (Colleda)",
        description: "Rintisan sepeda motor awal dari Suzuki yang bermula dari mesin penempel sepeda biasa hingga ke sepeda motor sesungguhnya.",
        achievements: "Membantu pemulihan transportasi ekonomi nasional Jepang.",
        iconicRiders: ["Michio Suzuki"]
      }];
    } else if (year >= 1960 && year <= 1969) {
      return [{
        modelName: "Suzuki RM62 GP 50cc",
        displacement: "50cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Rotary disc valve, manual 8-speed gearbox, expansion chamber tuned by Ernst Degner",
        description: "Membawa teknologi ruang ekspansi dan katup cakram rotari dari pabrikan MZ Jerman Timur yang mengubah sejarah GP.",
        achievements: "Ernst Degner menjuarai Kejuaraan Dunia 50cc edisi perdana tahun 1962.",
        iconicRiders: ["Ernst Degner", "Hugh Anderson"]
      }];
    } else if (year >= 1970 && year <= 1979) {
      return [
        {
          modelName: "Suzuki GT750 'Water Buffalo'",
          displacement: "738cc",
          engineType: "Inline-3 Cylinder 2-Stroke",
          cooling: "Liquid-cooled",
          notableTech: "Liquid-cooling (first Japanese liquid-cooled bike), SRIS automatic oil injection",
          description: "Motor touring dua tak berpendingin cairan raksasa yang sangat halus and bertenaga besar di jalanan.",
          achievements: "Menjadi ikon kenyamanan berkendara turing jarak jauh pada dekade 70-an.",
          iconicRiders: ["Barry Sheene"]
        },
        {
          modelName: "Suzuki RG500 XR14 GP",
          displacement: "499cc",
          engineType: "Square-4 Cylinder 2-Stroke",
          cooling: "Liquid-cooled",
          notableTech: "Square-four configuration, four independent carburetors, disc-valve intake",
          description: "Motor balap legendaris GP500 buatan Hamamatsu yang sangat dominan dan memiliki karakter mesin yang galak.",
          achievements: "Barry Sheene menjadi Juara Dunia GP 500cc berturut-turut pada musim 1976 dan 1977.",
          iconicRiders: ["Barry Sheene", "Pat Hennen"]
        }
      ];
    } else { // 1980 - 1985
      return [
        {
          modelName: "Suzuki RG500 Gamma (Road Replica)",
          displacement: "498cc",
          engineType: "Square-4 Cylinder 2-Stroke",
          cooling: "Liquid-cooled",
          notableTech: "Dual cradle aluminum frame, AEC automatic exhaust valves, exact GP500 engine layout",
          description: "Replika motor GP500 legal jalan raya paling setia yang pernah diproduksi, sangat dicari kolektor.",
          achievements: "Membawa sensasi balapan Grand Prix murni langsung ke jalan raya umum.",
          iconicRiders: ["Franco Uncini"]
        },
        {
          modelName: "Suzuki GSX1100S Katana",
          displacement: "1075cc",
          engineType: "Inline-4 Cylinder DOHC 16V",
          cooling: "Air/Oil-cooled",
          notableTech: "TSCC (Twin Swirl Combustion Chamber), styling by Hans Muth (Target Design)",
          description: "Sepeda motor legendaris bergaya avant-garde radikal yang melahirkan revolusi estetika desain motor dunia.",
          achievements: "Ditetapkan sebagai motor produksi tercepat di dunia pada tahun debutnya.",
          iconicRiders: ["Hans Muth"]
        }
      ];
    }
  }

  if (baseId === "yamaha-historic") {
    if (year >= 1955 && year <= 1960) {
      return [{
        modelName: "Yamaha YA-1 'Akatombo'",
        displacement: "123cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Loop-scavenging, chestnut brown finish, kick start",
        description: "Motor pertama Yamaha yang mendapat julukan 'Capung Merah' karena warna dan penampilannya yang cantik.",
        achievements: "Menyapu bersih podium teratas di balap Mt. Fuji Ascent Race tahun debutnya 1955.",
        iconicRiders: ["Teruo Okada"]
      }];
    } else if (year >= 1961 && year <= 1969) {
      return [{
        modelName: "Yamaha RD56 Grand Prix 250",
        displacement: "249cc",
        engineType: "Parallel-Twin 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Autolube system (first independent oil injection), rotary disc valve",
        description: "Mempelopori efisiensi pelumasan mesin dua tak dengan teknologi Autolube mandiri tanpa mencampur oli ke bensin.",
        achievements: "Phil Read mempersembahkan gelar juara dunia GP 250cc pertama bagi Yamaha tahun 1964.",
        iconicRiders: ["Phil Read", "Bill Ivy"]
      }];
    } else if (year >= 1970 && year <= 1980) {
      return [
        {
          modelName: "Yamaha TZ750 GP (The Monster)",
          displacement: "747cc",
          engineType: "Inline-4 Cylinder 2-Stroke",
          cooling: "Liquid-cooled",
          notableTech: "Mono-cross cantilever rear suspension, four exhaust pipes",
          description: "Monster legendaris balap Formula 750 yang sangat buas, meluncurkan tenaga menakjubkan bagi sirkuit Amerika.",
          achievements: "Giacomo Agostini menjuarai Daytona 200 dan balap ketahanan Imola tahun 1974.",
          iconicRiders: ["Giacomo Agostini", "Steve Baker", "Kenny Roberts"]
        },
        {
          modelName: "Yamaha XS650 Heritage",
          displacement: "653cc",
          engineType: "Parallel-Twin 4-Stroke SOHC",
          cooling: "Air-cooled",
          notableTech: "Horizontally split crankcase, overhead camshaft",
          description: "Motor empat tak legendaris pertama dari Yamaha dengan konstruksi mesin yang sangat andal dan getaran minim.",
          achievements: "Kenny Roberts menjuarai AMA Grand National Dirt Track menggunakan mesin XS650 kustom.",
          iconicRiders: ["Kenny Roberts"]
        }
      ];
    } else { // 1981 - 1997
      return [
        {
          modelName: "Yamaha FZ750 Genesis",
          displacement: "749cc",
          engineType: "Inline-4 Cylinder DOHC 5-Valve",
          cooling: "Liquid-cooled",
          notableTech: "5-valve Genesis cylinder head, 45-degree forward-leaning block",
          description: "Pionir teknologi kepala silinder 5-katup Yamaha yang membagi hisapan udara secara dinamis untuk efisiensi tinggi.",
          achievements: "Eddie Lawson memenangkan Daytona 200 legendaris tahun 1986.",
          iconicRiders: ["Eddie Lawson"]
        },
        {
          modelName: "Yamaha FZR1000 EXUP Genesis",
          displacement: "1002cc",
          engineType: "Inline-4 Cylinder DOHC 5-Valve",
          cooling: "Liquid-cooled",
          notableTech: "Deltabox perimeter aluminum frame, EXUP servo-controlled exhaust valve",
          description: "Superbike jalan raya paling canggih di masanya, memperkenalkan katup EXUP untuk menstabilkan torsi putaran bawah.",
          achievements: "Ditetapkan sebagai 'Motorcycle of the Decade' oleh banyak media otomotif dunia.",
          iconicRiders: ["Carl Fogarty"]
        }
      ];
    }
  }

  if (baseId === "ktm-historic") {
    if (year >= 1953 && year <= 1970) {
      return [{
        modelName: "KTM R100 / Trophy 125",
        displacement: "98cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Sachs proprietary engine, light alloy engine block",
        description: "Langkah-langkah awal KTM memproduksi sepeda motor ringan di Mattighofen sebelum bertransisi menjadi raksasa off-road.",
        achievements: "Menjuarai ajang keandalan (reliability trials) nasional Austria.",
        iconicRiders: ["Hans Trunkenpolz"]
      }];
    } else if (year >= 1971 && year <= 1989) {
      return [{
        modelName: "KTM Motocross 250 Pro-Lever",
        displacement: "240cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: year <= 1981 ? "Air-cooled" : "Liquid-cooled",
        notableTech: "Pro-Lever progressive rear suspension linkage, magnesium casings",
        description: "Rentang waktu keemasan motorcross dua tak oranye yang sangat gesit dan tangguh di medan lumpur ekstrem.",
        achievements: "Gennady Moiseev memenangkan Kejuaraan Dunia Motocross 250cc tahun 1974, 1977, dan 1978.",
        iconicRiders: ["Gennady Moiseev", "Heinz Kinigadner"]
      }];
    } else { // 1990 - 2002
      return [{
        modelName: "KTM Duke 620 / LC4 Enduro",
        displacement: "609cc",
        engineType: "Single-Cylinder SOHC 4-Stroke (LC4)",
        cooling: "Liquid-cooled",
        notableTech: "LC4 liquid-cooled engine block, electric starter, chrome-moly trellis chassis",
        description: "Puncak rekayasa mesin empat tak satu silinder KTM berpendingin cairan (LC4) yang melahirkan kelas supermoto jalanan.",
        achievements: "Merajai kelas supermoto Eropa dan mendominasi reli ketahanan ISDE.",
        iconicRiders: ["Thierry Magnaldi", "Kari Tiainen"]
      }];
    }
  }

  if (baseId === "husqvarna-historic") {
    if (year >= 1903 && year <= 1935) {
      return [{
        modelName: "Husqvarna Model 112 GP Racer",
        displacement: "490cc",
        engineType: "Single-Cylinder OHV",
        cooling: "Air-cooled",
        notableTech: "Hand-shifted 3-speed gearbox, total-loss oiling system",
        description: "Sepeda motor awal Swedia yang dikembangkan dari sasis sepeda kokoh yang dipasangi mesin bertenaga tinggi.",
        achievements: "Meraih podium di Grand Prix Swedia pertama tahun 1930-an.",
        iconicRiders: ["Ragnar Sunnqvist"]
      }];
    } else if (year >= 1936 && year <= 1959) {
      return [{
        modelName: "Husqvarna Silverpilen (Silver Arrow)",
        displacement: "175cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Extremely lightweight tubular frame, alloy components, telescopic forks",
        description: "Dikenal dengan sebutan 'Anak Panah Perak' karena bobotnya yang luar biasa ringan (75kg) and sasis yang lincah.",
        achievements: "Menjadi ikon kebebasan berkendara para pemuda Swedia pasca-perang.",
        iconicRiders: ["Rolf Tibblin"]
      }];
    } else if (year >= 1960 && year <= 1986) {
      return [{
        modelName: "Husqvarna 400 Cross (Steve McQueen Spec)",
        displacement: "396cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: year <= 1983 ? "Air-cooled" : "Liquid-cooled",
        notableTech: "Girder front, aluminum fuel tank with leather strap, chrome-moly tubing",
        description: "Motorcross dua tak legendaris yang mendominasi kancah balap tanah Amerika dan dipopulerkan oleh aktor Steve McQueen.",
        achievements: "Rolf Tibblin dan Bengt Aberg mendominasi Kejuaraan Dunia Motocross 500cc.",
        iconicRiders: ["Bengt Åberg", "Steve McQueen", "Malcolm Smith"]
      }];
    } else { // 1987 - 2013
      return [{
        modelName: "Husqvarna TE610 Dual Sport / SMR 450",
        displacement: year <= 2003 ? "576cc" : "449cc",
        engineType: "Single-Cylinder DOHC 4-Stroke",
        cooling: "Liquid-cooled",
        notableTech: "Electric start, Keihin fuel injection, Brembo brakes",
        description: "Diproduksi di bawah kepemilikan Cagiva Italia (era Varese), melahirkan supermoto premium yang sangat berprestasi.",
        achievements: "Mendominasi Kejuaraan Dunia Supermoto S1 dan kelas enduro dunia.",
        iconicRiders: ["Eddy Seel", "Gerald Delepine"]
      }];
    }
  }

  if (baseId === "aprilia-historic") {
    if (year >= 1968 && year <= 1979) {
      return [{
        modelName: "Aprilia Scarabeo 125 Cross",
        displacement: "123cc",
        engineType: "Single-Cylinder 2-Stroke",
        cooling: "Air-cooled",
        notableTech: "Franco Morini engine, chromoly frame, motocross ergonomics",
        description: "Langkah pertama Aprilia memasuki dunia kompetisi garuk tanah menggunakan sasis orisinal Noale.",
        achievements: "Menarik perhatian pembalap muda Italia pada awal dekade 70-an.",
        iconicRiders: ["Ivan Alborghetti"]
      }];
    } else { // 1980 - 1990
      return [{
        modelName: "Aprilia AF1 125 Projecto",
        displacement: "125cc",
        engineType: "Single-Cylinder 2-Stroke (Rotax)",
        cooling: "Liquid-cooled",
        notableTech: "Rotax exhaust valve system, single-sided rear swingarm, aluminum twin-spar frame",
        description: "Motor sport replika GP dua tak yang sangat kencang, rintisan awal sebelum melahirkan legenda RS125.",
        achievements: "Loris Reggiani meraih kemenangan GP 250cc pertama Aprilia tahun 1987.",
        iconicRiders: ["Loris Reggiani", "Alessandro Gramigni"]
      }];
    }
  }

  return [];
}

function cleanAndCorrectMotorcycles(db: Motorcycle[]): Motorcycle[] {
  const seenIds = new Set<string>();
  const corrected: Motorcycle[] = [];
  
  db.forEach(bike => {
    let modelLower = bike.modelName.toLowerCase();
    const yr = parseInt(bike.debutYear);
    let matchedHistoric = false;

    if (bike.id && !isNaN(yr)) {
      if (bike.id.startsWith("ducati-historic")) {
        matchedHistoric = true;
        if (yr >= 1946 && yr <= 1955) {
          bike.modelName = bike.id.includes("satellite") ? "Ducati Cucciolo T1/T2 Sport (Privateer)" : "Ducati Cucciolo T1/T2 Sport";
          bike.specs.displacement = "48cc";
          bike.specs.engineType = "Single-Cylinder OHV 4-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Pull-rod valve actuation, auxiliary clip-on motor, 2-speed manual";
          bike.description = "Mesin bantu jepit Cucciolo yang legendaris, penanda dimulainya kejayaan industri sepeda motor Ducati pasca-perang.";
        } else if (yr >= 1956 && yr <= 1967) {
          bike.modelName = bike.id.includes("satellite") 
            ? "Ducati 125 Gran Sport 'Marianna' (Privateer)" 
            : "Ducati 250 Mach 1";
          bike.specs.displacement = yr < 1965 ? "125cc" : "249cc";
          bike.specs.engineType = "Single-Cylinder OHC 4-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Bevel-gear driven overhead camshaft, high rpm stability";
          bike.description = "Motor balap OHC bevel-gear legendaris karya Fabio Taglioni yang sangat perkasa di sirkuit jalan raya.";
        } else if (yr >= 1968 && yr <= 1971) {
          bike.modelName = bike.id.includes("satellite") ? "Ducati Mark 3 Desmo 350 (Privateer)" : "Ducati Mark 3 Desmo 350";
          bike.specs.displacement = "340cc";
          bike.specs.engineType = "Single-Cylinder Desmodromic OHC";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Desmodromic valve actuation, bevel-gear driven camshaft";
          bike.description = "Sepeda motor komersial pertama dengan katup Desmodromic tanpa pegas yang legendaris.";
        } else if (yr >= 1972 && yr <= 1979) {
          bike.modelName = bike.id.includes("satellite") ? "Ducati 750 SS Bevel Desmo (Privateer)" : "Ducati 750 SS Bevel Desmo";
          bike.specs.displacement = "748cc";
          bike.specs.engineType = "90-degree L-Twin Desmodromic";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Bevel-drive L-twin Desmodromic, Dell'Orto carburetors";
          bike.description = "Mahakarya L-Twin bermesin bevel desmo yang melambungkan nama Paul Smart di Imola.";
        } else if (yr >= 1980 && yr <= 1987) {
          bike.modelName = bike.id.includes("satellite") ? "Ducati Pantah 600TL (Privateer)" : "Ducati Pantah 600TL";
          bike.specs.displacement = "583cc";
          bike.specs.engineType = "90-degree L-Twin Desmodromic";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Belt-driven overhead camshafts, steel trellis frame";
          bike.description = "Langkah awal penggunaan belt drive desmo dan sasis trellis yang melegenda.";
        } else if (yr >= 1988 && yr <= 1993) {
          bike.modelName = bike.id.includes("satellite") ? "Ducati 851 Desmoquattro (Privateer)" : "Ducati 851 Desmoquattro";
          bike.specs.displacement = "851cc";
          bike.specs.engineType = "90-degree L-Twin Desmoquattro 4-Valve";
          bike.specs.cooling = "Liquid-cooled";
          bike.specs.notableTech = "Webber-Marelli fuel injection, liquid-cooling, 4 valves per cylinder";
          bike.description = "Superbike modern berpendingin cairan dengan katup 4-valve desmo yang mendominasi WorldSBK awal.";
        }
      }
      else if (bike.id.startsWith("bmw-historic")) {
        matchedHistoric = true;
        if (yr >= 1923 && yr <= 1928) {
          bike.modelName = bike.id.includes("satellite") ? "BMW R32 Classic (Privateer)" : "BMW R32 Classic";
          bike.specs.displacement = "486cc";
          bike.specs.engineType = "Flat-Twin Boxer";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "First BMW motorcycle, shaft drive, wet sump lubrication";
        } else if (yr >= 1929 && yr <= 1935) {
          bike.modelName = bike.id.includes("satellite") ? "BMW R11 Classic (Privateer)" : "BMW R11 Classic";
          bike.specs.displacement = "745cc";
          bike.specs.engineType = "Flat-Twin Boxer";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Pressed steel frame, shaft drive, twin carburetors";
        } else if (yr >= 1936 && yr <= 1948) {
          bike.modelName = bike.id.includes("satellite") ? "BMW R5 Classic (Privateer)" : "BMW R5 Classic";
          bike.specs.displacement = "494cc";
          bike.specs.engineType = "Flat-Twin Boxer OHV";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Tubular steel frame, telescopic front forks, foot-operated gearbox";
        }
      }
      else if (bike.id.startsWith("kawasaki-historic")) {
        matchedHistoric = true;
        if (yr >= 1960 && yr <= 1965) {
          bike.modelName = bike.id.includes("satellite") ? "Kawasaki 125 B8M (Privateer)" : "Kawasaki 125 B8M 'Red Tank Furore'";
          bike.specs.displacement = "125cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Rotary disc valve, pressed-steel backbone frame";
        } else if (yr >= 1966 && yr <= 1968) {
          bike.modelName = bike.id.includes("satellite") ? "Kawasaki A1 Samurai 250 (Privateer)" : "Kawasaki A1 Samurai 250";
          bike.specs.displacement = "247cc";
          bike.specs.engineType = "Parallel-Twin 2-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Dual rotary valves, twin Mikuni carburetors";
        } else if (yr >= 1969 && yr <= 1974) {
          const is750 = bike.specs.displacement.includes("750");
          bike.modelName = bike.id.includes("satellite") 
            ? (is750 ? "Kawasaki H2 Mach IV 750 (Privateer)" : "Kawasaki H1 Mach III 500 (Privateer)") 
            : (is750 ? "Kawasaki H2 Mach IV 750" : "Kawasaki H1 Mach III 500");
          bike.specs.displacement = is750 ? "748cc" : "499cc";
          bike.specs.engineType = "Inline-Triple 2-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Asymmetrical 3-cylinder exhaust, CDI electronic ignition";
        }
      }
      else if (bike.id.startsWith("aprilia-historic")) {
        matchedHistoric = true;
        if (yr >= 1968 && yr <= 1975) {
          bike.modelName = bike.id.includes("satellite") ? "Aprilia Scarabeo Cross 125 (Privateer)" : "Aprilia Scarabeo Cross 125";
          bike.specs.displacement = "124cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke (Sachs)";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Chromoly frame, high-expansion exhaust";
        } else if (yr >= 1976 && yr <= 1982) {
          const is250 = bike.specs.displacement.includes("250");
          bike.modelName = bike.id.includes("satellite") 
            ? (is250 ? "Aprilia RC 250 MX (Privateer)" : "Aprilia RC 125 MX (Privateer)") 
            : (is250 ? "Aprilia RC 250 MX" : "Aprilia RC 125 MX");
          bike.specs.displacement = is250 ? "244cc" : "124cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke (Rotax)";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Magnesium crankcase, Marzocchi forks";
        } else if (yr >= 1983 && yr <= 1990) {
          bike.modelName = bike.id.includes("satellite") ? "Aprilia Tuareg Wind 600 (Privateer)" : "Aprilia Tuareg Wind 600";
          bike.specs.displacement = "562cc";
          bike.specs.engineType = "Single-Cylinder 4-Stroke (Rotax)";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Dell'Orto carburetor, electric start, high-ground clearance rally design";
        }
      }
      else if (bike.id.startsWith("ktm-historic")) {
        matchedHistoric = true;
        if (yr >= 1953 && yr <= 1969) {
          bike.modelName = bike.id.includes("satellite") ? "KTM R100 Classic (Privateer)" : "KTM R100 Classic";
          bike.specs.displacement = "98cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke (Rotax)";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Rotax engine, lightweight pressed steel chassis";
        } else if (yr >= 1970 && yr <= 1985) {
          bike.modelName = bike.id.includes("satellite") ? "KTM 250 MX (Privateer)" : "KTM 250 MX World Champ";
          bike.specs.displacement = "248cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Magnesium engine casing, chrome-moly steel trellis frame";
        } else if (yr >= 1986 && yr <= 2002) {
          bike.modelName = bike.id.includes("satellite") ? "KTM LC4 600 Enduro (Privateer)" : "KTM LC4 600 Enduro";
          bike.specs.displacement = "553cc";
          bike.specs.engineType = "Single-Cylinder 4-Stroke SOHC";
          bike.specs.cooling = "Liquid-cooled";
          bike.specs.notableTech = "LC4 liquid-cooled engine, electric starter, WP suspension";
        }
      }
      else if (bike.id.startsWith("husqvarna-historic")) {
        matchedHistoric = true;
        if (yr >= 1903 && yr <= 1945) {
          bike.modelName = bike.id.includes("satellite") ? "Husqvarna Moto-Reve (Privateer)" : "Husqvarna Moto-Reve Classic";
          bike.specs.displacement = "298cc";
          bike.specs.engineType = "V-Twin 4-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Early Swiss-designed V-Twin engine, belt drive";
        } else if (yr >= 1946 && yr <= 1979) {
          bike.modelName = bike.id.includes("satellite") ? "Husqvarna Silverpilen 175 (Privateer)" : "Husqvarna Silverpilen 175";
          bike.specs.displacement = "175cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Chrome-moly steel frame, lightweight alloy mudguards, telescopic forks";
        } else if (yr >= 1980 && yr <= 2013) {
          bike.modelName = bike.id.includes("satellite") ? "Husqvarna TE 510 (Privateer)" : "Husqvarna TE 510";
          bike.specs.displacement = "503cc";
          bike.specs.engineType = "Single-Cylinder 4-Stroke DOHC 4V";
          bike.specs.cooling = "Liquid-cooled";
          bike.specs.notableTech = "Ultra-lightweight 4-stroke enduro engine, liquid-cooling, WP suspension";
        }
      }
      else if (bike.id.startsWith("suzuki-historic")) {
        matchedHistoric = true;
        if (yr >= 1952 && yr <= 1965) {
          bike.modelName = bike.id.includes("satellite") ? "Suzuki Power Free Classic (Privateer)" : "Suzuki Power Free Classic";
          bike.specs.displacement = "36cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke Clip-on";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Dual-sprocket gear system allowing pedaling or motor drive";
        } else if (yr >= 1966 && yr <= 1976) {
          const is750 = bike.specs.displacement.includes("750");
          bike.modelName = bike.id.includes("satellite") 
            ? (is750 ? "Suzuki GT750 Water Buffalo (Privateer)" : "Suzuki T500 Titan (Privateer)") 
            : (is750 ? "Suzuki GT750 Water Buffalo" : "Suzuki T500 Titan");
          bike.specs.displacement = is750 ? "739cc" : "492cc";
          bike.specs.engineType = is750 ? "Inline-Triple 2-Stroke" : "Parallel-Twin 2-Stroke";
          bike.specs.cooling = is750 ? "Liquid-cooled" : "Air-cooled";
          bike.specs.notableTech = is750 ? "SRIS (Suzuki Recycle Injection System), liquid cooling" : "Heavy-duty aluminum cylinder finning";
        } else if (yr >= 1977 && yr <= 1985) {
          const is1000 = bike.specs.displacement.includes("1000") || bike.specs.displacement.includes("500");
          bike.modelName = bike.id.includes("satellite") 
            ? (is1000 ? "Suzuki GS1000 Classic (Privateer)" : "Suzuki GS750 Classic (Privateer)") 
            : (is1000 ? "Suzuki GS1000 Classic" : "Suzuki GS750 Classic");
          bike.specs.displacement = is1000 ? "997cc" : "748cc";
          bike.specs.engineType = "Inline-4 Cylinder DOHC 8V";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Suzuki's first high-performance 4-stroke inline-4, reliable roller-bearing crankshaft";
        }
      }
      else if (bike.id.startsWith("honda-historic")) {
        matchedHistoric = true;
        if (yr >= 1949 && yr <= 1958) {
          bike.modelName = bike.id.includes("satellite") ? "Honda Dream D-Type (Privateer)" : "Honda Dream D-Type";
          bike.specs.displacement = "98cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke Channel-frame";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "No clutch lever (semi-automatic cone clutch), pressed-steel channel frame";
        } else if (yr >= 1959 && yr <= 1968) {
          bike.modelName = bike.id.includes("satellite") ? "Honda Super Cub C100 (Privateer)" : "Honda Super Cub C100";
          bike.specs.displacement = "49cc";
          bike.specs.engineType = "Single-Cylinder OHV 4-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Underbone frame, centrifugal automatic clutch, step-through design";
        } else if (yr >= 1969 && yr <= 1983) {
          bike.modelName = bike.id.includes("satellite") ? "Honda CB750 Four Classic (Privateer)" : "Honda CB750 Four Classic";
          bike.specs.displacement = "736cc";
          bike.specs.engineType = "Inline-4 Cylinder SOHC 8V";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "First production front hydraulic disc brake, electric starter, transverse inline-4";
        }
      }
      else if (bike.id.startsWith("yamaha-historic")) {
        matchedHistoric = true;
        if (yr >= 1955 && yr <= 1969) {
          bike.modelName = bike.id.includes("satellite") ? "Yamaha YA-1 (Privateer)" : "Yamaha YA-1 'Red Dragonfly'";
          bike.specs.displacement = "123cc";
          bike.specs.engineType = "Single-Cylinder 2-Stroke";
          bike.specs.cooling = "Air-cooled";
          bike.specs.notableTech = "Inspired by DKW RT125, high-tensile steel frame, 4-speed gearbox";
        } else if (yr >= 1970 && yr <= 1984) {
          const is750 = bike.specs.displacement.includes("750") || bike.specs.displacement.includes("500");
          bike.modelName = bike.id.includes("satellite") 
            ? (is750 ? "Yamaha TZ750 (Privateer)" : "Yamaha RD350 (Privateer)") 
            : (is750 ? "Yamaha TZ750" : "Yamaha RD350");
          bike.specs.displacement = is750 ? "747cc" : "347cc";
          bike.specs.engineType = is750 ? "Inline-4 2-Stroke" : "Parallel-Twin 2-Stroke";
          bike.specs.cooling = is750 ? "Liquid-cooled" : "Air-cooled";
          bike.specs.notableTech = is750 ? "Monoshock rear suspension, liquid cooling" : "Torque Induction reed-valve intake";
        } else if (yr >= 1985 && yr <= 1997) {
          bike.modelName = bike.id.includes("satellite") ? "Yamaha FZ750 Genesis (Privateer)" : "Yamaha FZ750 Genesis";
          bike.specs.displacement = "749cc";
          bike.specs.engineType = "Inline-4 Cylinder DOHC 20V";
          bike.specs.cooling = "Liquid-cooled";
          bike.specs.notableTech = "Genesis engine layout (45-degree forward inclined), 5-valve head design";
        }
      }
    }

    if (!matchedHistoric) {
      // 1. Repair obviously incorrect fields for known famous bikes
      if (modelLower.includes("cucciolo")) {
        bike.manufacturer = "Ducati";
        bike.specs.displacement = "48cc";
        bike.specs.engineType = "Single-Cylinder OHV 4-Stroke";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "Pull-rod valve actuation, auxiliary clip-on motor, 2-speed manual";
        bike.description = "Mesin bantu jepit Cucciolo yang legendaris, penanda dimulainya kejayaan industri sepeda motor Ducati pasca-perang.";
        bike.debutYear = "1946";
        bike.championships = ["Giro d'Italia Motociclistico Selection"];
      }
      else if (modelLower.includes("imola desmo") || modelLower.includes("paul smart")) {
        bike.manufacturer = "Ducati";
        bike.specs.displacement = "748cc";
        bike.specs.engineType = "90-degree L-Twin Desmodromic";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "Bevel-drive Desmodromic, fiberglass fuel tank with transparent fuel stripe";
        bike.description = "Motor balap L-Twin legendaris yang membawa Paul Smart memenangkan balapan Imola 200 mil tahun 1972.";
        bike.debutYear = "1972";
        bike.championships = ["Imola 200"];
      }
      else if (modelLower.includes("vespa siluro") || modelLower.includes("vespa torpedo")) {
        bike.manufacturer = "Vespa";
        bike.specs.displacement = "125cc";
        bike.specs.engineType = "Opposed-Piston Twin-Crankshaft 2-Stroke";
        bike.specs.cooling = "Liquid-cooled";
        bike.specs.notableTech = "Aero-aluminum torpedo body, centrifugal compressor supercharger, dual crankshafts";
        bike.description = "Sepeda motor berbentuk torpedo yang dirancang secara revolusioner oleh insinyur penerbangan Corradino d'Ascanio untuk membuktikan keunggulan teknologi mesin dua tak Vespa.";
        bike.debutYear = "1951";
      }
      else if (modelLower.includes("brough superior ss100")) {
        bike.manufacturer = "Brough Superior";
        bike.specs.displacement = "996cc";
        bike.specs.engineType = "JAP V-Twin OHV";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "Castle-design front forks, hand-soldered fuel tank, dual-magneto ignition, guaranteed 100 mph capability";
        bike.debutYear = "1924";
      }
      else if (modelLower.includes("vincent black shadow")) {
        bike.manufacturer = "Vincent";
        bike.specs.displacement = "998cc";
        bike.specs.engineType = "50-degree V-Twin OHV";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "Unit construction engine, Girdraulic front forks, cantilever rear suspension, extensive use of aluminum";
        bike.debutYear = "1948";
      }
      else if (modelLower.includes("norton commando")) {
        bike.manufacturer = "Norton";
        bike.specs.displacement = "745cc";
        bike.specs.engineType = "Parallel-Twin OHV";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "Isolastic anti-vibration rubber mounts, separate gearbox";
        if (bike.debutYear === "2000" || bike.debutYear === "2010" || bike.debutYear === "1000") bike.debutYear = "1967";
      }
      else if (modelLower.includes("triumph bonneville") && parseInt(bike.debutYear) < 1990) {
        bike.manufacturer = "Triumph";
        bike.specs.displacement = "649cc";
        bike.specs.engineType = "Parallel-Twin OHV 4-Stroke";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "Twin Amal carburetors, unit construction";
      }
      else if (modelLower.includes("cb750 four") || modelLower.includes("cb750 classic") || modelLower.includes("cb 750")) {
        bike.manufacturer = "Honda";
        bike.specs.displacement = "736cc";
        bike.specs.engineType = "Inline-4 Cylinder SOHC 4-Stroke";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "First production hydraulic front disc brake, four carburetors, electric start";
        if (bike.debutYear === "2000" || bike.debutYear === "2010" || bike.debutYear === "1000") bike.debutYear = "1969";
      }
      else if (modelLower.includes("kawasaki z1 ") || modelLower.includes("kawasaki z1-") || modelLower === "kawasaki z1" || modelLower.includes("kawasaki 900 super four")) {
        bike.manufacturer = "Kawasaki";
        bike.specs.displacement = "903cc";
        bike.specs.engineType = "Inline-4 Cylinder DOHC 8V";
        bike.specs.cooling = "Air-cooled";
        bike.specs.notableTech = "Double overhead camshaft, 4 Mikuni carburetors, high-flow cylinder heads";
        if (bike.debutYear === "2000" || bike.debutYear === "2010" || bike.debutYear === "1000") bike.debutYear = "1972";
      }
      else if (modelLower.includes("gsx-r750") && parseInt(bike.debutYear) < 1990) {
        bike.manufacturer = "Suzuki";
        bike.specs.displacement = "749cc";
        bike.specs.engineType = "Inline-4 Cylinder DOHC 16V";
        bike.specs.cooling = "Air/Oil-cooled";
        bike.specs.notableTech = "SACS (Suzuki Advanced Cooling System), aluminum perimeter frame, flat-slide carburetors";
        if (bike.debutYear === "2000" || bike.debutYear === "2010" || bike.debutYear === "1000") bike.debutYear = "1985";
      }
      else if (modelLower.includes("nr750") || modelLower.includes("nr 750")) {
        bike.manufacturer = "Honda";
        bike.specs.displacement = "748cc";
        bike.specs.engineType = "90-degree V4 Oval Piston 32V";
        bike.specs.cooling = "Liquid-cooled";
        bike.specs.notableTech = "Oval pistons, 8 valves and 2 spark plugs per cylinder, titanium conrods, carbon bodywork";
        if (bike.debutYear === "2000" || bike.debutYear === "2010" || bike.debutYear === "1000") bike.debutYear = "1992";
      }
      else if (modelLower.includes("rg500 gamma") || modelLower === "suzuki rg500") {
        bike.manufacturer = "Suzuki";
        bike.specs.displacement = "498cc";
        bike.specs.engineType = "Square-4 Cylinder 2-Stroke";
        bike.specs.cooling = "Liquid-cooled";
        bike.specs.notableTech = "Rotary valve square-four engine layout, exact GP500 geometry replica";
        if (bike.debutYear === "2000" || bike.debutYear === "2010" || bike.debutYear === "1000") bike.debutYear = "1985";
      }
    }

    // 2. Generic displacement repair (e.g. 'undefinedcc')
    if (!bike.specs.displacement || bike.specs.displacement.includes("undefined") || bike.specs.displacement === "" || bike.specs.displacement === "cc") {
      const numMatch = bike.modelName.match(/\b(50|125|250|300|350|400|450|500|600|650|750|800|850|900|1000|1100|1200|1300)\b/);
      if (numMatch) {
        bike.specs.displacement = `${numMatch[1]}cc`;
      } else {
        if (bike.categories.includes("Vintage") || bike.categories.includes("Historic")) {
          bike.specs.displacement = "250cc";
        } else {
          bike.specs.displacement = "1000cc";
        }
      }
    }

    // 3. Generic cooling repair for early vintage bikes (pre-1980)
    if (!isNaN(yr) && yr < 1980) {
      const isLiquidCooledException = modelLower.includes("water buffalo") || 
                                     modelLower.includes("gt750") || 
                                     modelLower.includes("tz750") || 
                                     modelLower.includes("kr250") || 
                                     modelLower.includes("kr350") || 
                                     modelLower.includes("siluro") || 
                                     modelLower.includes("gp") || 
                                     modelLower.includes("factory racing");
      if (!isLiquidCooledException && bike.specs.cooling === "Liquid-cooled") {
        bike.specs.cooling = "Air-cooled";
      }
    }

    // 4. Store only unique IDs
    const bikeId = (bike.id || `${bike.manufacturer}-${bike.modelName}-${bike.debutYear}-${bike.specs.displacement}`).toLowerCase();
    if (!seenIds.has(bikeId)) {
      seenIds.add(bikeId);
      corrected.push(bike);
    }
  });

  return corrected;
}

const RAW_DATABASE: Motorcycle[] = [];

baseBikes.forEach(base => {
  if (base.generateYearly) {
    const end = base.endYear || 2026;
    
    // Standard non-historic yearly bikes (like modern MotoGP/Superbikes and historic bases parsed fully)
    let displacements = [base.specs.displacement];
    if (base.specs.displacement.includes(' - ') || base.specs.displacement.includes('/')) {
      if (base.specs.displacement.includes('125cc - 500cc')) displacements = ['125cc', '250cc', '350cc', '500cc'];
      else if (base.specs.displacement.includes('125cc - 851cc')) displacements = ['125cc', '250cc', '350cc', '500cc', '750cc', '851cc'];
      else if (base.specs.displacement.includes('125cc - 250cc')) displacements = ['125cc', '250cc'];
      else if (base.specs.displacement.includes('50cc - 500cc')) displacements = ['50cc', '125cc', '250cc', '350cc', '500cc'];
      else if (base.specs.displacement.includes(' / ')) displacements = base.specs.displacement.split(' / ');
      else if (base.specs.displacement.includes('/')) displacements = base.specs.displacement.split('/');
    }

    let engineTypes = [base.specs.engineType];
    if (base.specs.engineType.includes(' / ')) {
      engineTypes = base.specs.engineType.split(' / ');
    }

    for (let year = base.startYear; year <= end; year++) {
      for (const disp of displacements) {
        for (const eng of engineTypes) {
          RAW_DATABASE.push({
            id: `${base.baseId}-${year}-${disp}-${eng.replace(/\s+/g,'-')}-factory`,
            manufacturer: base.manufacturer,
            modelName: `${base.baseModelName} Factory Racing (${year})`,
            debutYear: year.toString(),
            specs: { ...base.specs, displacement: disp.trim(), engineType: eng.trim() },
            categories: base.categories,
            championships: base.championships,
            iconicRiders: base.iconicRiders,
            achievements: base.achievements,
            description: base.description,
            brandColor: base.brandColor
          });
          RAW_DATABASE.push({
            id: `${base.baseId}-${year}-${disp}-${eng.replace(/\s+/g,'-')}-satellite`,
            manufacturer: base.manufacturer,
            modelName: `${base.baseModelName} Satellite/Privateer (${year})`,
            debutYear: year.toString(),
            specs: { ...base.specs, displacement: disp.trim(), engineType: eng.trim() },
            categories: base.categories,
            championships: base.championships,
            iconicRiders: ["Privateer/Independent Riders"],
            achievements: "Participated as independent entry.",
            description: base.description + " (Customer / Satellite specification)",
            brandColor: base.brandColor
          });
        }
      }
    }
  } else {
    RAW_DATABASE.push({
      id: base.baseId,
      manufacturer: base.manufacturer,
      modelName: base.baseModelName,
      debutYear: base.startYear.toString(),
      specs: base.specs,
      categories: base.categories,
      championships: base.championships,
      iconicRiders: base.iconicRiders,
      achievements: base.achievements,
      description: base.description,
      brandColor: base.brandColor
    });
  }
});

// Reverse it so newest is on top
RAW_DATABASE.reverse();

// Append the user's explicit master list so it has all requested models
USER_MASTER_LIST.forEach(bike => {
  if (!RAW_DATABASE.some(existing => existing.modelName.toLowerCase() === bike.modelName.toLowerCase())) {
    RAW_DATABASE.push({
      ...bike,
      id: `master-${bike.modelName.replace(/\s+/g, '-').toLowerCase()}`
    });
  }
});

// Append the new requested championships
USER_MASTER_LIST2.forEach(bike => {
  RAW_DATABASE.push(bike);
});

// Append ALL historical and modern brands across all series
USER_MASTER_LIST3.forEach(bike => {
  RAW_DATABASE.push(bike);
});

// Append vintage 1900s bikes
VINTAGE_LIST.forEach(bike => {
  RAW_DATABASE.push(bike);
});

// Append massive FIM category expansion
USER_MASTER_LIST5.forEach(bike => {
  RAW_DATABASE.push(bike);
});

// Append generations of famous superbikes from year to year
USER_MASTER_LIST6.forEach((bike, index) => {
  RAW_DATABASE.push({
    ...bike,
    id: `gen-superbike-${bike.manufacturer.toLowerCase()}-${bike.debutYear}-${index}`
  });
});

// Append exotic, exclusive, and unique historical motorcycles (e.g. Vespa Siluro)
USER_MASTER_LIST7.forEach((bike, index) => {
  RAW_DATABASE.push({
    ...bike,
    id: `exotic-unique-${bike.manufacturer.toLowerCase()}-${bike.debutYear}-${index}`
  });
});

export const MOTORCYCLES_DATABASE = cleanAndCorrectMotorcycles(RAW_DATABASE);