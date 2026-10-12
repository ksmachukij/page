// List of product brands
const productBrand: string[] = [
  "Accel",
  "Apcoflex",
  "Asahi",
  "Asphalt",
  "Bayer",
  "Buna",
  "Chemlok",
  "Daeho",
  "Daifree",
  "Dutral",
  "Eneos",
  "Esprene",
  "Europhene",
  "Exxon",
  "Flexsys",
  "Goldstar",
  "Granular",
  "Hakuenka",
  "Henan",
  "Heyun",
  "Hosoi",
  "Indopol",
  "IRPC",
  "Jiangsu ningkang",
  "JSR",
  "Keltan",
  "Kolon",
  "Krynac",
  "Kumho",
  "Kyotan",
  "LG",
  "Mitsui",
  "Monsato",
  "Nantong",
  "Nipol",
  "Nocceler",
  "Noswell",
  "Perbunan",
  "Percumyl",
  "Petroflex",
  "Quick Lime",
  "Seido",
  "Sivic",
  "Skyprene",
  "Struktol",
  "Tenma",
  "Therwax",
  "Tokusil",
  "Toso",
  "Ubepol",
  "Uniroyal",
  "Utid",
  "Vestenamer",
  "Vistalon",
  "Vulkanox",
  "Willing",
  "Yoshimoto",
  "Zhongyi",
];

// List of product groups
const productGroup: string[] = [
  "Accelerator",
  "Adhesive",
  "Antioxidant",
  "Butadiene Rubber(BR)",
  "Butyl Reclaimed Rubber(Reclaim Butyl)",
  "Butyl Rubber(IIR)",
  "Calcium Carbonate",
  "Carbon Black",
  "Chloroprene Rubber(CR)",
  "Chlorosulphonated Polyethylene(CSM)",
  "Curing Material",
  "Dispersion",
  "Ethylene Propylene Diene Rubber(EPDM)",
  "Nitrile Butadiene Rubber(SBR)",
  "Oil",
  "Para Aramid",
  "Pigment",
  "Styrene Butadiene Rubber(SBR)",
  "Tackifier",
  "Thermoplastic Polyurethane(TPU)",
];

// List of countries
const countryGroup: string[] = [
  "America",
  "China",
  "German",
  "Holland",
  "India",
  "Indonesia",
  "Japan",
  "Korea",
  "Malaysia",
  "Poland",
  "Russia",
  "Taiwan",
  "Thailand",
];

const productList = [
  {
    "name": "CBS-G",
    "group": "Accelerator"
  },
  {
    "name": "CBS-P",
    "group": "Accelerator"
  },
  {
    "name": "DPG-G",
    "group": "Accelerator"
  },
  {
    "name": "MBT-G",
    "group": "Accelerator"
  },
  {
    "name": "MBTS-G",
    "group": "Accelerator"
  },
  {
    "name": "TMTD-P",
    "group": "Accelerator"
  },
  {
    "name": "Accel-22S",
    "group": "Accelerator"
  },
  {
    "name": "BZ-P",
    "group": "Accelerator"
  },
  {
    "name": "Chemlok 205",
    "group": "Adhesive"
  },
  {
    "name": "Chemlok 220",
    "group": "Adhesive"
  },
  {
    "name": "Chemlok 6411",
    "group": "Adhesive"
  },
  {
    "name": "Amspec",
    "group": "Antioxidant"
  },
  {
    "name": "WingstayL",
    "group": "Antioxidant"
  },
  {
    "name": "Sungtight-S",
    "group": "Antioxidant"
  },
  {
    "name": "N330-TCB",
    "group": "Carbon Black"
  },
  {
    "name": "N550-TCB",
    "group": "Carbon Black"
  },
  {
    "name": "N660",
    "group": "Carbon Black"
  },
  {
    "name": "774-TCB",
    "group": "Carbon Black"
  },
  {
    "name": "Acetylene Black AB50P",
    "group": "Carbon Black"
  },
  {
    "name": "GU",
    "group": "Calcium Carbonate"
  },
  {
    "name": "USG",
    "group": "Calcium Carbonate"
  },
  {
    "name": "UR-T",
    "group": "Calcium Carbonate"
  },
  {
    "name": "233",
    "group": "Calcium Carbonate"
  },
  {
    "name": "255",
    "group": "Calcium Carbonate"
  },
  {
    "name": "Calstone Blue",
    "group": "Calcium Carbonate"
  },
  {
    "name": "YCC-303",
    "group": "Calcium Carbonate"
  },
  {
    "name": "Titanium Oxide R902",
    "group": "Pigment"
  },
  {
    "name": "Titanium Oxide R101",
    "group": "Pigment"
  },
  {
    "name": "Titanium Oxide R103",
    "group": "Pigment"
  },
  {
    "name": "Magnesium Oxide-30",
    "group": "Curing Material"
  },
  {
    "name": "Magnesium Oxide-150",
    "group": "Curing Material"
  },
  {
    "name": "Magnesium Oxide-B",
    "group": "Curing Material"
  },
  {
    "name": "Oxide WhiteSeal-UT",
    "group": "Curing Material"
  },
  {
    "name": "Zinc Oxide CS-30",
    "group": "Curing Material"
  },
  {
    "name": "Sulphur Powder",
    "group": "Curing Material"
  },
  {
    "name": "Colloidal Sulphur",
    "group": "Curing Material"
  },
  {
    "name": "Calcium Sulfate",
    "group": "Curing Material"
  },
  {
    "name": "Kyowaad 500 SH",
    "group": "Curing Material"
  },
  {
    "name": "Brown Factice No.21",
    "group": "Dispersion"
  },
  {
    "name": "White Factice#2",
    "group": "Dispersion"
  },
  {
    "name": "Stearic Acid(1860) Bead",
    "group": "Dispersion"
  },
  {
    "name": "Zinc Stearate TW",
    "group": "Dispersion"
  },
  {
    "name": "Silicone 35",
    "group": "Dispersion"
  },
  {
    "name": "Silicone 60C",
    "group": "Dispersion"
  },
  {
    "name": "Silicone Element14 PDMS 350-Momentive",
    "group": "Dispersion"
  },
  {
    "name": "Para-Aramid HP500",
    "group": "Para Aramid"
  },
  {
    "name": "DOP",
    "group": "Oil"
  },
  {
    "name": "DINP",
    "group": "Oil"
  },
  {
    "name": "DBP",
    "group": "Oil"
  },
  {
    "name": "AC617A AC Polyethylene",
    "group": "Oil"
  },
  {
    "name": "DHT-4A",
    "group": "Oil"
  },
  {
    "name": "H220",
    "group": "Thermoplastic Polyurethane(TPU)"
  },
  {
    "name": "H320",
    "group": "Thermoplastic Polyurethane(TPU)"
  },
  {
    "name": "1507",
    "group": "Styrene Butadiene Rubber(SBR)"
  },
  {
    "name": "150B",
    "group": "Butadiene Rubber(BR)"
  },
  {
    "name": "1280",
    "group": "Butadiene Rubber(BR)"
  },
  {
    "name": "3325C",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "N220S",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "N220SH",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "N230S",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "N230SL",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "N230SV",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "N217SH",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "N230SV",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "210S",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "4105",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "6240",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "6280",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "7030",
    "group": "Nitrile Butadiene Rubber(SBR)"
  },
  {
    "name": "B-30",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "R-10",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "G-40S1",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "G-40T",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "Y-30HA",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "Y-30S",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "Y-20E",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "TSR-48",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "E-33",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "Latex SL-360",
    "group": "Chloroprene Rubber(CR)"
  },
  {
    "name": "EPT 4021H",
    "group": "Ethylene Propylene Diene Rubber(EPDM)"
  },
  {
    "name": "EP-33",
    "group": "Ethylene Propylene Diene Rubber(EPDM)"
  },
  {
    "name": "RBRR-111",
    "group": "Butyl Reclaimed Rubber(Reclaim Butyl)"
  },
  {
    "name": "1066",
    "group": "Butyl Rubber(IIR)"
  },
  {
    "name": "Butyl IIR1953",
    "group": "Butyl Rubber(IIR)"
  },
  {
    "name": "268-S",
    "group": "Butyl Rubber(IIR)"
  },
  {
    "name": "BK-1675N",
    "group": "Butyl Rubber(IIR)"
  },
  {
    "name": "TS-430",
    "group": "Chlorosulphonated Polyethylene(CSM)"
  },
  {
    "name": "TS-530",
    "group": "Chlorosulphonated Polyethylene(CSM)"
  },
  {
    "name": "Gum Resin",
    "group": "Tackifier"
  },
  {
    "name": "Coumarone Resin G90",
    "group": "Tackifier"
  },
  {
    "name": "Resitop PGA-9401",
    "group": "Tackifier"
  }
]

const componentText = [
  {
    "Name": "Header_Home_Btn",
    "TH": "หน้าแรก",
    "EN": "Home"
  },
  {
    "Name": "Header_AboutUs_Btn",
    "TH": "เกี่ยวกับเรา",
    "EN": "About Us"
  },
  {
    "Name": "Header_ContactUs_Btn",
    "TH": "ติดต่อเรา",
    "EN": "Contact Us"
  },
  {
    "Name": "Header_Product_Btn",
    "TH": "สินค้า",
    "EN": "Product"
  },
  {
    "Name": "Header_ReqSales_Btn",
    "TH": "ติดต่อเซลส์",
    "EN": "Request Sales"
  },
  {
    "Name": "ViewMore_Btn",
    "TH": "ดูเพิ่มเติม",
    "EN": "View More"
  },
  {
    "Name": "OurPrd_MoreInfo_Btn",
    "TH": "รายละเอียดเพิ่มเติม",
    "EN": "More Info"
  },
  {
    "Name": "Card_Subs_Header",
    "TH": "อยากรู้จักเรามากขึ้น?",
    "EN": "Do you want to know more about us?"
  },
  {
    "Name": "SendMsg_Btn",
    "TH": "ส่งข้อความหาเรา",
    "EN": "Send Us A Message"
  },
  {
    "Name": "ViewProf_Btn",
    "TH": "ดูโปรไฟล์ของเรา",
    "EN": "View Our Profile"
  },
  {
    "Name": "Filter_Reset_Btn",
    "TH": "ล้างตัวกรอง",
    "EN": "Reset Filters"
  },
  {
    "Name": "Filter_Header",
    "TH": "ตัวกรอง",
    "EN": "Filters"
  },
  {
    "Name": "Filter_SearchName",
    "TH": "ค้นหาชื่อ",
    "EN": "Search Name"
  },
  {
    "Name": "SortBy",
    "TH": "เรียงตาม",
    "EN": "Sort By"
  },
  {
    "Name": "SortBy_Name",
    "TH": "ชื่อ",
    "EN": "Name"
  },
  {
    "Name": "SortBy_Group",
    "TH": "กลุ่ม",
    "EN": "Group"
  },
  {
    "Name": "PrdDetails_Back_Btn",
    "TH": "กลับหน้าค้นหา",
    "EN": "Back To Search"
  },
  {
    "Name": "Card_FAQ",
    "TH": "คำถามที่พบบ่อย",
    "EN": "Frequently Ask Questions"
  },
  {
    "Name": "Form_FirstName",
    "TH": "ชื่อ",
    "EN": "First Name"
  },
  {
    "Name": "Form_LastName",
    "TH": "นามสกุล",
    "EN": "Last Name"
  },
  {
    "Name": "Form_Email",
    "TH": "อีเมลล์",
    "EN": "Email"
  },
  {
    "Name": "Form_PhoneNumber",
    "TH": "หมายเลขโทรศัพท์",
    "EN": "Phone Number"
  },
  {
    "Name": "Form_Radio_Select",
    "TH": "เลือกหัวข้อ",
    "EN": "Select Topic"
  },
  {
    "Name": "Form_Radio_General",
    "TH": "สอบถามทั่วไป",
    "EN": "General Inquiry"
  },
  {
    "Name": "Form_Radio_Product",
    "TH": "สอบถามผลิตภัณฑ์",
    "EN": "Product Inquiry"
  },
  {
    "Name": "Form_Radio_ReqSales",
    "TH": "ติดต่อเซลส์",
    "EN": "Request Sales"
  },
  {
    "Name": "Form_Radio_Others",
    "TH": "อื่นๆ",
    "EN": "Others"
  },
  {
    "Name": "Form_Msg",
    "TH": "ข้อความ",
    "EN": "Message"
  },
  {
    "Name": "Form_Send_Btn",
    "TH": "ส่ง",
    "EN": "Send"
  }
];

const productList2 = [
  {
    "name": "Para Aramid",
    "image": "",
    "subcategory": []
  },
  {
    "name": "Synthetic Rubber",
    "image": "",
    "subcategory": []
  },
  {
    "name": "Accelerator",
    "image": "",
    "subcategory": []
  },
  {
    "name": "Antioxidant & Antiozonant",
    "image": "",
    "subcategory": []
  },
  {
    "name": "Tackifier",
    "image": "",
    "subcategory": []
  },
  {
    "name": "Filler",
    "image": "",
    "subcategory": []
  },
  {
    "name": "Processing Aid",
    "image": "",
    "subcategory": []
  },
  {
    "name": "Curing Material",
    "image": "",
    "subcategory": []
  }
]

const contentSystem = [
  {
    "Name": "Home_Title",
    "TH": "ผู้นำเข้าและตัวแทนจำหน่ายเคมีภัณฑ์อุตสาหกรรมการผลิตยาง กาว และพลาสติก",
    "EN": "Distributor and importer of chemicals for the production of rubber, adhesives, and plastics."
  },
  {
    "Name": "Home_Dual1_Heading",
    "TH": "บริการจัดหาสินค้าตามความต้องการ",
    "EN": "Sourcing Materials According to Your Unique Requirements"
  },
  {
    "Name": "Home_Dual1_SubHeading",
    "TH": "ประสบการณ์กว่า 30 ปี บริษัทมีพัทธมิตรผู้ผลิตต่างประเทศหลากหลาย ทั้งญี่ปุ่น, เกาหลี, จีน, รัสเซีย, อเมริกา, เยอรมนี และอินเดีย",
    "EN": "With 30+ years of expertise, our company works with international manufacturing partners across Japan, Korea, China, Russia, the USA, Germany, and India."
  },
  {
    "Name": "Home_Dual2_Heading",
    "TH": "มีสต๊อกสินค้าในคลังพร้อมบริการ",
    "EN": "We keep products in stock to ensure prompt service and delivery."
  },
  {
    "Name": "Home_Dual2_SubHeading",
    "TH": "บริษัทมีสต๊อกสินค้าในคลังพร้อมบริการภายใต้พื้นที่ใช้สอยกว่า 3,200 ตร.ม.",
    "EN": "The company operates a storage area of over 3,200 square meters, with products in stock and ready for service."
  },
  {
    "Name": "Home_OurPartner_Header",
    "TH": "พาร์ทเนอร์ของเรา",
    "EN": "Our Partner"
  },
  {
    "Name": "Home_OurProduct_Header",
    "TH": "สินค้าของเรา",
    "EN": "Our Product"
  },
  {
    "Name": "About_Page_S1_Header",
    "TH": "เรื่องราวของเรา",
    "EN": "Our Story"
  },
  {
    "Name": "About_Page_S1_P1",
    "TH": "บริษัท เค.เอส. มาชูกิจ จำกัด เป็นผู้นำในการจัดจำหน่ายสินค้าหลายประเภททั้งเคมีภัณฑ์และยางสังเคราะห์คุณภาพสูงที่จัดหาจากซัพพลายเออร์ทั้งในประเทศและต่างประเทศ ก่อตั้งเมื่อวันที่ 11 เมษายน 2537 ด้วยทุนจดทะเบียนเริ่มต้น 5 ล้านบาท ภายใต้การนำของนายกำกร คงสวัสดิ์วรกุล กรรมการผู้จัดการ ซึ่งได้ทุ่มเทเวลาทั้งหมดในการทำงานในอุตสาหกรรมเคมีและยาง",
    "EN": "K.S. MACHUKIJ CO., LTD. is a leading distributor of a wide range of chemical products and high-quality synthetic rubbers sourced from both local and international suppliers. Founded on April 11th, 1994, with an initial registered capital of 5 million baht, the company has grown significantly under the leadership of Mr. Komkorn Kongsawadvorakul, the company director, who has dedicated his entire career to the rubber and chemical industries."
  },
  {
    "Name": "About_Page_S1_P2",
    "TH": "ตลอดระยะเวลาหลายปีที่ผ่านมา บริษัท เค.เอส. มาชูกิจ เติบโตอย่างรวดเร็วภายใต้การบริหารของผู้บริหารรุ่นใหม่ ซึ่งมีการเพิ่มทุนจดทะเบียนเป็น 50 ล้านบาทเพื่อรองรับการขยายตัวของธุรกิจ",
    "EN": "Over the years, K.S. MACHUKIJ has experienced substantial growth, driven by a new generation of management. The company’s registered capital has been increased to 50 million baht to support its expanding business operations."
  },
  {
    "Name": "About_Page_S1_P3",
    "TH": "เพื่อรองรับความต้องการที่เปลี่ยนแปลงของตลาดและตอบสนองความต้องการของลูกค้าอย่างมีประสิทธิภาพ บริษัท เค.เอส. มาชูกิจ ได้ย้ายไปยังสำนักงานที่ทันสมัย ซึ่งมีพื้นที่ใช้สอยรวมกว่า 2,000 ตารางเมตร และยังมีคลังสินค้าขนาด 1,500 ตารางเมตร ตั้งอยู่ที่เลขที่ 123/1 หมู่ 12 ถนนพุทธสาคร ตำบลสวนหลวง อำเภอกระทุ่มแบน จังหวัดสมุทรสาคร ประเทศไทย",
    "EN": "To better support the evolving needs of the market and to meet customer demands more efficiently, K.S. MACHUKIJ has relocated to a modern, encompassing a total floor area of 2,000 square meters. The new facility also includes a 1,500-square-meter warehouse, strategically located at No. 123/1 Moo 12, Phutthasakorn Road, SuanLuang Sub-district, Kratumbaen District, Samutsakorn Province, Thailand."
  },
  {
    "Name": "About_Page_S1_P4",
    "TH": "ปัจจุบันบริษัทอยู่ภายใต้การบริหารของรุ่นใหม่ นายอนุวิชษ์ เตชะทวีกิจกุล และนางสาวธมลวรรณ เตชะทวีกิจกุล ที่สานต่อมรดกของนายกำกร คงสวัสดิ์วรกุล โดยยังคงยึดมั่นในหลักการของความซื่อสัตย์ คุณภาพ และความพึงพอใจของลูกค้า ด้วยวิสัยทัศน์ที่ทันสมัยและมุ่งมั่นในการพัฒนา บริษัท เค.เอส. มาชูกิจ จึงพร้อมที่จะเป็นผู้นำที่แข็งแกร่งในอุตสาหกรรมการจัดจำหน่ายยางสังเคราะห์และเคมีภัณฑ์ยางในอนาคตอันใกล้",
    "EN": "The business is now under the leadership of the next generation, Mr. Anuvich Techataveekijkul and Miss Thamolwon Techataveekijkul, who continue to build on the legacy of Mr. Komkorn Kongsawadvorakul by maintaining the company’s commitment to integrity, quality, and customer satisfaction. With a forward-thinking and modern approach to business, K.S. MACHUKIJ is poised to become a dominant leader in the synthetic rubber and rubber chemicals distribution industry."
  },
  {
    "Name": "About_Page_S1_P5",
    "TH": "เพื่อให้สอดคล้องกับมาตรฐานสากล บริษัทได้มีการนำระบบการจัดการคุณภาพ ISO 9001:2015 มาใช้เป็นกรอบแนวทางในการดำเนินงาน ซึ่งช่วยให้ทุกกิจกรรมและกระบวนการดำเนินการได้อย่างมีประสิทธิภาพ โดยมีการจัดการความเสี่ยง การตรวจสอบคุณภาพ และการประเมินผลอย่างต่อเนื่องในทุกขั้นตอนของการดำเนินการ",
    "EN": "In line with global standards, the company has adopted the ISO 9001:2015 Quality Management System as a framework to guide operations. This ensures that all activities and processes are executed efficiently, with risk management, quality control inspections, and continuous evaluation integrated into every step of the operation."
  },
  {
    "Name": "About_Page_S1_P6",
    "TH": "จากประสบการณ์ที่สะสมมานานกว่า 20 ปี บริษัท เค.เอส. มาชูกิจ มีความมั่นใจในการให้บริการลูกค้ามากกว่า 500 ราย โดยสามารถรับประกันให้ลูกค้าทุกท่านได้รับบริการที่ต่อเนื่องและมั่นคง ทีมงานที่มีความมุ่งมั่นจำนวน 40 คนพร้อมให้บริการและจัดหาสินค้าเพื่อตอบสนองความต้องการของลูกค้าอย่างเต็มที่และมีประสิทธิภาพ",
    "EN": "With over two decades of accumulated expertise, K.S. MACHUKIJ serves more than 500 clients, providing consistent and reliable service. The company’s dedicated team of 40 full-time employees across various departments ensures that customer needs are met with the highest level of professionalism and efficiency."
  },
  {
    "Name": "About_Page_Dual_1",
    "TH": "ปัจจุบัน บริษัทกำลังดำเนินการก่อสร้างคลังสินค้าเพิ่มเติมขนาด 1,200 ตารางเมตร ซึ่งคาดว่าจะแล้วเสร็จในเดือนกุมภาพันธ์ 2563 การขยายตัวครั้งนี้มีเป้าหมายเพื่อรองรับการเติบโตของธุรกิจ และเพื่อให้สามารถจัดเก็บสินค้าที่มากขึ้นเพื่อตอบสนองความต้องการของลูกค้ากลุ่มที่หลากหลายมากยิ่งขึ้น",
    "EN": "Currently, the company is in the process of constructing an additional 1,200-square-meter warehouse, expected to be completed by February 2020. This expansion is strategically planned to accommodate business growth, ensuring an increased product capacity to meet the demands of a broader customer base."
  },
  {
    "Name": "About_Page_Team_header",
    "TH": "พบกับสมาชิกในทีมของเรา",
    "EN": "Meet Our Team"
  },
  {
    "Name": "About_Page_Team_position",
    "TH": "ตำแหน่ง",
    "EN": "Position"
  },
  {
    "Name": "About_Page_Team_fl1",
    "TH": "อนุวิชษ์ เตชะทวีกิจกุล",
    "EN": "Anuvich Techataveekijkul"
  },
  {
    "Name": "About_Page_Team_p1",
    "TH": "ผู้อำนวยการบริหาร",
    "EN": "Director Executive"
  },
  {
    "Name": "About_Page_Team_fl2",
    "TH": "ธมลวรรณ เตชะทวีกิจกุล",
    "EN": "Thamolwan Techataveekijkul"
  },
  {
    "Name": "About_Page_Team_p2",
    "TH": "ผู้อำนวยการบริหาร",
    "EN": "Director Executive"
  },
  {
    "Name": "About_Page_Team_fl3",
    "TH": "สัณห์พิชญ์ เตชะทวีกิจกุล",
    "EN": "Sonpich Techataveekijkul"
  },
  {
    "Name": "About_Page_Team_p3",
    "TH": "ผู้อำนวยการบริหาร",
    "EN": "Director Executive"
  },
  {
    "Name": "About_Page_Mission_Header",
    "TH": "พันธกิจของเรา:",
    "EN": "Our Mission:"
  },
  {
    "Name": "About_Page_Mission_li1",
    "TH": "เป็นผู้นำในการจัดจำหน่ายวัตถุดิบสำหรับอุตสาหกรรมยาง",
    "EN": "To be a leading distributor of raw materials for the rubber industry."
  },
  {
    "Name": "About_Page_Mission_li2",
    "TH": "เป็นผู้มีบทบาทในการส่งเสริมการใช้วัตถุดิบในอุตสาหกรรมยางอย่างมีประสิทธิภาพและนวัตกรรม",
    "EN": "To be a key influencer in promoting efficient and innovative raw material usage within the rubber sector."
  },
  {
    "Name": "About_Page_Mission_li3",
    "TH": "เพื่อสนับสนุนและตอบสนองความต้องการของอุตสาหกรรมยางด้วยวิธีการที่เหมาะสมและมีประสิทธิภาพ",
    "EN": "To turn the needs and requirements of the rubber industry into practical and effective solutions."
  },
  {
    "Name": "About_Page_Mission_li4",
    "TH": "เสริมสร้างความสามารถในการแข่งขันของอุตสาหกรรมยางผ่านผลิตภัณฑ์และบริการของเรา",
    "EN": "To enhance the competitiveness and capabilities of the rubber industry through our products and services."
  },
  {
    "Name": "About_Page_Objective_Header",
    "TH": "วัตถุประสงค์ของเรา:",
    "EN": "Our Objectives:"
  },
  {
    "Name": "About_Page_Objective_li1",
    "TH": "คัดสรรและนำเสนอผลิตภัณฑ์คุณภาพสูงที่มีคุณสมบัติตรงกับความต้องการเฉพาะของลูกค้า",
    "EN": "To identify and provide high-quality products with specifications tailored to meet the specific needs of our customers"
  },
  {
    "Name": "About_Page_Objective_li2",
    "TH": "เสนอวิธีการที่ครบวงจรเพื่อสนับสนุนและเพิ่มประสิทธิภาพการดำเนินงานและความสามารถในการแข่งขันของลูกค้า",
    "EN": "To offer integrated solutions that support and enhance our customers' operational efficiency and overall competitiveness"
  },
  {
    "Name": "About_Page_Objective_li3",
    "TH": "รักษาความสม่ำเสมอในการพัฒนาและดำเนินกระบวนการที่ถูกต้อง รวดเร็ว และต่อเนื่อง",
    "EN": "To maintain consistency in developing and implementing processes that are accurate, timely, and continuously improving"
  },
  {
    "Name": "About_Page_Objective_li4",
    "TH": "รับประกันการส่งมอบทุกคำสั่งซื้ออย่างครบถ้วน ถูกต้อง โดยเลือกเส้นทางการขนส่งที่คุ้มค่า และให้บริการหลังการขายที่ยอดเยี่ยม",
    "EN": "To ensure every order is fulfilled completely and accurately, optimizing logistics routes for cost-efficiency while delivering exceptional service and reliable after-sales support"
  },
  {
    "Name": "About_Page_Objective_li5",
    "TH": "มอบคุณค่าผ่านทีมการตลาดมืออาชีพที่ให้บริการด้วยความสุภาพและใส่ใจในทุกรายละเอียด",
    "EN": "To provide added value through a professional marketing team, delivering exceptional service with courtesy and consideration"
  },
  {
    "Name": "About_Page_Objective_li6",
    "TH": "ให้ความสำคัญ ส่งเสริม และพัฒนาความสามารถของพนักงานทุกคนเพื่อเสริมสร้างวัฒนธรรมของความไว้วางใจและการพัฒนาอย่างต่อเนื่อง",
    "EN": "To prioritize, empower, and continuously develop our staff to maintain a culture of trust and advancement"
  },
  {
    "Name": "ContactUs_Page_Heading",
    "TH": "ติดต่อเรา",
    "EN": "Contact Us"
  },
  {
    "Name": "ContactUs_Page_SubHeading",
    "TH": "เราต้องการให้บริการที่ดีที่สุดแก่คุณ",
    "EN": "We want to ensure the best service for you"
  },
  {
    "Name": "ContactUs_Page_Sales",
    "TH": "ฝ่ายขาย",
    "EN": "Sales"
  },
  {
    "Name": "ContactUs_Page_AccFi",
    "TH": "ฝ่ายบัญชี/การเงิน",
    "EN": "Account/Finance"
  },
  {
    "Name": "ContactUs_LocationInfo",
    "TH": "สำนักงานใหญ่",
    "EN": "HEADQUARTERS"
  },
  {
    "Name": "ContactUs_LocationInfo_Addr",
    "TH": "123/1 หมู่ 12 ถ.พุทธสาคร ต. สวนหลวง อ. กระทุ่มแบน จ. สมุทรสาคร 74110",
    "EN": "123/1 Moo 12 Puttha Sakhon Rd.,Suan Luang Sub-District, Kratum Bean District, Samut Sakhon 74110"
  },
  {
    "Name": "ContactUs_LocationInfo_Hour",
    "TH": "เวลาทำการ: จ. - ศ., 08:30 - 17:00",
    "EN": "Office Hour: Mon - Fri, 08:30 - 17:00"
  },
  {
    "Name": "PrdDetails_Relate",
    "TH": "สินค้าที่เกี่ยวข้อง",
    "EN": "Related Products",
  },
  {
    "Name": "ProductPage_Header",
    "TH": "ค้นหาสินค้าของพวกเรา",
    "EN": "Explore Our Product"
  },
  {
    "Name": "ProductPage_SubHeader",
    "TH": "เคมีภัณฑ์ยางและวัสดุพิเศษ",
    "EN": "Rubber chemicals & specialty materials"
  }
]

// Export the modules
export {
  productBrand,
  productGroup,
  countryGroup,
  productList,
  productList2,
  componentText,
  contentSystem,
};
