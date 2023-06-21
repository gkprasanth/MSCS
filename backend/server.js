const mongoose = require('mongoose');
const express = require('express');
const { mscs } = require('../backend/models/model');
const data = require('./full_DB_Data.json');

const router = require('./routes/routes');
const reg_count = require('./routes/registrationRoute')
const sector_type = require('./routes/sector')

// const router = express.Router();
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use('/totalData', router)
app.use('/reg_count', reg_count)
app.use('/sector_type', sector_type)

// const Data = require(
//     '../backend/models/model'
// ).mscs

app.use(express.json())

const mongoURL = 'mongodb+srv://vishnu:PD6dzndTiXwE1qjF@mscs.goqmvxl.mongodb.net/MSCS_DB'

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use(express.json());

// const realData = {
//   "data": {
//       "data": [
//           {
//               "sr_no": "1",
//               "name_of_society": "saharayn universal multipurose society limited",
//               "address": "At & P.O. Railway Colony, Gorakkhpur, District-Gorakhpur Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "KUSHI NAGAR",
//               "date_of_registration": "",
//               "area_of_operation": "Haryana, UttarPradesh, Himachal, Punjab",
//               "sector_type": "Credit"
//           },
//           {
//               "sr_no": "2",
//               "name_of_society": "JMJ Multi State Agro Cooperative Society Ltd.",
//               "address": "TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala",
//               "state": "KERALA",
//               "district": "THRISSUR",
//               "date_of_registration": "13-10-2022",
//               "area_of_operation": "Bihar, West bengal, Odisha",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "3",
//               "name_of_society": "Devbhoomi Agro Multi State Cooperative Society Ltd.",
//               "address": "S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661",
//               "state": "UTTARAKHAND",
//               "district": "HARIDWAR",
//               "date_of_registration": "04-10-2022",
//               "area_of_operation": "Tamil Nadu, karnataks",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "4",
//               "name_of_society": "Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd.",
//               "address": "Gate No 165, Nimgaon (T), Madha, Solapur, 413210 maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "SOLAPUR",
//               "date_of_registration": "04-10-2022",
//               "area_of_operation": "Haryana, Punajb",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "5",
//               "name_of_society": "Agriculture Development Cooperative Federation",
//               "address": "A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab\n160055",
//               "state": "PUNJAB",
//               "district": "MOGA",
//               "date_of_registration": "22-09-2022",
//               "area_of_operation": "Manipur, Meghalaya",
//               "sector_type": "Federation"
//           },
//           {
//               "sr_no": "6",
//               "name_of_society": "Prosperity Multi State Housing Cooperative Society ltd.",
//               "address": "Jayem Arcade 385 A6, First Floor,\nKamarajar Road, Peelamedu, Coimbatore 641004",
//               "state": "TAMIL NADU",
//               "district": "COIMBATORE",
//               "date_of_registration": "15-09-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Housing"
//           },
//           {
//               "sr_no": "7",
//               "name_of_society": "Greenfield Multi State Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)",
//               "address": "Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana",
//               "state": "TELANGANA",
//               "district": "RANGAREDDY",
//               "date_of_registration": "12-09-2022",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "8",
//               "name_of_society": "Shri Sharda Agro Multi State Co- operative Society Ltd.",
//               "address": "Shri Sharda Agro Multi State Co-operative Society Ltd.",
//               "state": "UTTAR PRADESH",
//               "district": "Gonde",
//               "date_of_registration": "02-09-2022",
//               "area_of_operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "9",
//               "name_of_society": "Nature Delight Multi State Cooperative Dairy & Agro Products Ltd.",
//               "address": "Kalas Gate, No 1189, A/P Kalas, Indapur, Pune 413105 Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "PUNE",
//               "date_of_registration": "31-08-2022",
//               "area_of_operation": "Andhra Pradesh, Telangna",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "10",
//               "name_of_society": "Travancore Cochin Tourism Cooperative Society Ltd",
//               "address": "Idukki, Kerala 685584",
//               "state": "KERALA",
//               "district": "IDUKKI",
//               "date_of_registration": "31-08-2022",
//               "area_of_operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
//               "sector_type": "Tourism"
//           },
//           {
//               "sr_no": "11",
//               "name_of_society": "Janamaitheri Agricultural Cooperative Society Ltd.",
//               "address": "Janamaitheri Agricultural Cooperative Society Ltd.",
//               "state": "KERALA",
//               "district": "THIRUVANANTHAPURAM",
//               "date_of_registration": "16-08-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "12",
//               "name_of_society": "Swaraj Multipurpose Federation of Cooperative Society Ltd",
//               "address": "Shop No 2, Yadav Market, Opposite Radha Ballav mandir, Palla Chowk, Tilak Road,\nFaridabad 121001 Haryana",
//               "state": "HARYANA",
//               "district": "FARIDABAD",
//               "date_of_registration": "16-08-2022",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Federation"
//           },
//           {
//               "sr_no": "13",
//               "name_of_society": "Green Safe Multi State Agriculture Cooperative Society Ltd.",
//               "address": "Coimbatore, Tamil Nadu",
//               "state": "TAMIL NADU",
//               "district": "COIMBATORE",
//               "date_of_registration": "12-08-2022",
//               "area_of_operation": "Haryana, Delhi",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "14",
//               "name_of_society": "Mango Growers cooperative society Ltd. (MANCO)",
//               "address": "Visakhapatnam",
//               "state": "ANDHRA PRADESH",
//               "district": "VISAKHAPATANAM",
//               "date_of_registration": "10-08-2022",
//               "area_of_operation": "Haryana, Delhi, UttarPradesh, ",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "15",
//               "name_of_society": "Srijan Krishi Vipnan Multi State Cooperative Society Ltd.",
//               "address": "Lucknow",
//               "state": "UTTAR PRADESH",
//               "district": "LUCKNOW",
//               "date_of_registration": "29-07-2022",
//               "area_of_operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "16",
//               "name_of_society": "Kamal Multispeciality Cooperative Hospital & Research center Ltd.",
//               "address": "Beed Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "BEED",
//               "date_of_registration": "22-07-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "17",
//               "name_of_society": "Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd.",
//               "address": "Ahmednagar",
//               "state": "MAHARASHTRA",
//               "district": "AHMEDNAGAR",
//               "date_of_registration": "24-06-2022",
//               "area_of_operation": "Haryana, Punjab, Rajasthan",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "18",
//               "name_of_society": "The Urban Care Multi State Agro Cooperative Society Ltd.",
//               "address": "Kerala",
//               "state": "KERALA",
//               "district": "KOZHIKODE",
//               "date_of_registration": "27-06-2022",
//               "area_of_operation": "Haryana, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "19",
//               "name_of_society": "Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)",
//               "address": "Kerala",
//               "state": "KERALA",
//               "district": "THRISSUR",
//               "date_of_registration": "27-06-2022",
//               "area_of_operation": "Gujarat, Rajasthan, Haryana, Delhi",
//               "sector_type": "Fisheries"
//           },
//           {
//               "sr_no": "20",
//               "name_of_society": "Swayam Samruddhi Multi State Cooperative Society Ltd.",
//               "address": "Hyderabad, Telangana",
//               "state": "TELANGANA",
//               "district": "HYDERABAD",
//               "date_of_registration": "15-06-2022",
//               "area_of_operation": "Kerala, karnataka, Maharashtra, Gujarat",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "21",
//               "name_of_society": "Shree Sai Seva Multi Specialty\nCooperative Hospital and Research center ltd",
//               "address": "Ahmednagar, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "AHMEDNAGAR",
//               "date_of_registration": "15-06-2022",
//               "area_of_operation": "Maharashtra, Karnataka, Tamil nadu",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "22",
//               "name_of_society": "Venkateshwara Multi State Multi Specialty Hospital and Research Ltd.",
//               "address": "Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "NASIK",
//               "date_of_registration": "08-06-2022",
//               "area_of_operation": "Haryana, Gujarat, Maharashtra, Delhi",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "23",
//               "name_of_society": "Bharathimanass labour and\nConstruction Cooperative Ltd.",
//               "address": "Manipur",
//               "state": "MANIPUR",
//               "district": "BISHNUPUR",
//               "date_of_registration": "06-06-2022",
//               "area_of_operation": "West bengal, Andhra Pradesh",
//               "sector_type": "Construction"
//           },
//           {
//               "sr_no": "24",
//               "name_of_society": "Kairali Agriculture Multi State Cooperative Society Ltd.",
//               "address": "Kerala",
//               "state": "KERALA",
//               "district": "THRISSUR",
//               "date_of_registration": "06-06-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "25",
//               "name_of_society": "Jewan Kothi Multi State Agro Cooperative Society Ltd.",
//               "address": "Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "BASTI",
//               "date_of_registration": "06-06-2022",
//               "area_of_operation": "Haryana, UttarPradesh, Himachal, Punjab",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "26",
//               "name_of_society": "Bharathimanass Agriculture\nCooperative Ltd. (BHARATHIMANAS)",
//               "address": "Manipur",
//               "state": "MANIPUR",
//               "district": "BISHNUPUR",
//               "date_of_registration": "03-06-2022",
//               "area_of_operation": "Bihar, West bengal, Odisha",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "27",
//               "name_of_society": "Youth Employability Skill Training\nCooperative Educational Society Ltd.",
//               "address": "PATHANAMTHITTA",
//               "state": "KERALA",
//               "district": "ERNAKULAM",
//               "date_of_registration": "02-06-2022",
//               "area_of_operation": "Tamil Nadu, karnataks",
//               "sector_type": "Others"
//           },
//           {
//               "sr_no": "28",
//               "name_of_society": "Jai Ratnagarbha Agriculture Multi State Cooperative Society Ltd.",
//               "address": "Prayag Raj, uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "BAREILLY",
//               "date_of_registration": "28-05-2022",
//               "area_of_operation": "Haryana, Punajb",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "29",
//               "name_of_society": "Shikharji Multi State Agro Processing and Marketing Cooperative Society\nLtd",
//               "address": "Buldana, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "BULDHANA",
//               "date_of_registration": "27-05-2022",
//               "area_of_operation": "Manipur, Meghalaya",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "30",
//               "name_of_society": "News Agriculture Export & Marketing Cooperative society Ltd.",
//               "address": "Kalkaji, Delhi",
//               "state": "NEW DELHI",
//               "district": "NEW DELHI",
//               "date_of_registration": "21-05-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "31",
//               "name_of_society": "Krashnadi Multi State Vehicle Services Cooperative Society Ltd.",
//               "address": "Beed, maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "BEED",
//               "date_of_registration": "12-05-2022",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Others"
//           },
//           {
//               "sr_no": "32",
//               "name_of_society": "Lotus Multi Specialty Cooperative Hospital and Research Center Ltd.",
//               "address": "Osmanabad, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "BEED",
//               "date_of_registration": "27-04-2022",
//               "area_of_operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "33",
//               "name_of_society": "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
//               "address": "Osmanabad, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "OSMANABAD",
//               "date_of_registration": "27-04-2022",
//               "area_of_operation": "Andhra Pradesh, Telangna",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "34",
//               "name_of_society": "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
//               "address": "Kolhaour, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "KOLHAPUR",
//               "date_of_registration": "27-04-2022",
//               "area_of_operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "35",
//               "name_of_society": "Vanashri Cooperative Power & Agro Progressive ltd",
//               "address": "Sangli , Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "SANGLI",
//               "date_of_registration": "26-04-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "36",
//               "name_of_society": "Samrudh Marathwada Multi State\nVehicle Services Cooperative Society Ltd.",
//               "address": "Beed, maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "BEED",
//               "date_of_registration": "20-04-2022",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Others"
//           },
//           {
//               "sr_no": "37",
//               "name_of_society": "Bharathiyajkl Machuwara Samudaay Cooperative Ltd.\n(BHARATHIJKLMASACO)",
//               "address": "Baramulla, Kashmir",
//               "state": "JAMMU AND KASHMIR",
//               "district": "BADGAM",
//               "date_of_registration": "18-04-2022",
//               "area_of_operation": "Haryana, Delhi",
//               "sector_type": "Fisheries"
//           },
//           {
//               "sr_no": "38",
//               "name_of_society": "Prestige Agro Multi State Cooperative Society Ltd",
//               "address": "Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "BULANDSHAHR",
//               "date_of_registration": "01-04-2022",
//               "area_of_operation": "Haryana, Delhi, UttarPradesh, ",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "39",
//               "name_of_society": "Vidhata Hamal Multi State Cooperative Society Ltd",
//               "address": "Bhandara, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "BHANDARA",
//               "date_of_registration": "01-04-2022",
//               "area_of_operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "40",
//               "name_of_society": "Dr Appasahed Urf Sa. Re. Patil\nJayysinghpur Udgaon Sahakari Bank Ltd",
//               "address": "Kolhapur, maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "KOLHAPUR",
//               "date_of_registration": "01-04-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "41",
//               "name_of_society": "Krushisadhna Mahila Multi State Agro Cooperative society Ltd",
//               "address": "Nashik maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "NASIK",
//               "date_of_registration": "01-04-2022",
//               "area_of_operation": "Haryana, Punjab, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "42",
//               "name_of_society": "Seva Sadan Multi Specialty\nCooperative Hospital and Research Center Ltd",
//               "address": "Gate no. 14, Chaitnya Complex, behind Tahsil karyalaya, Shrigonda Dist - Ahmednagar Pin -413701 (Maharashtra)",
//               "state": "MAHARASHTRA",
//               "district": "AHMED NAGAR",
//               "date_of_registration": "21-03-2022",
//               "area_of_operation": "Haryana, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "43",
//               "name_of_society": "Bulandshahr Agro MultiState cooperative Society Ltd",
//               "address": "Mohalla Mahadev, Galimpur Road, Dibai, Bulandshahr, Uttar Pradesh-202393",
//               "state": "UTTAR PRADESH",
//               "district": "BULANDSHAHR",
//               "date_of_registration": "21-03-2022",
//               "area_of_operation": "Gujarat, Rajasthan, Haryana, Delhi",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "44",
//               "name_of_society": "B K Dhanlakshmi Multi State Agro Cooperative Society Limited",
//               "address": "Mayflower signature, Office 7B, 7th Floor, Avinashi Road, Peelumedu, Coimbatore- 641004, Tamil Nadu",
//               "state": "TAMIL NADU",
//               "district": "COIMBATORE",
//               "date_of_registration": "08-03-2022",
//               "area_of_operation": "Kerala, karnataka, Maharashtra, Gujarat",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "45",
//               "name_of_society": "The Walmik Multi State Cooperative Handloom Weavers Cooperative Society Ltd",
//               "address": "Plot No 63, Aoodumbae, Gurudev nagar, Nandanavan, Hanuman Nagar, Nagpur 440009, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "NAGPUR",
//               "date_of_registration": "21-02-2022",
//               "area_of_operation": "Maharashtra, Karnataka, Tamil nadu",
//               "sector_type": "Industrial/Textile"
//           },
//           {
//               "sr_no": "46",
//               "name_of_society": "Ente Naadu Multi State Agro Co- operative Society Ltd.",
//               "address": "ST George High School, Aluva- Munnar Road, Kothamangalam, Ernakulam,\n686691, Kerala",
//               "state": "KERALA",
//               "district": "ERNAKULAM",
//               "date_of_registration": "03-02-2022",
//               "area_of_operation": "Haryana, Gujarat, Maharashtra, Delhi",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "47",
//               "name_of_society": "Rajsidhi Cooperative Cotton & Agro Industries Ltd",
//               "address": "Ahmednagar 414401, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "AHMED NAGAR",
//               "date_of_registration": "12-01-2022",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "48",
//               "name_of_society": "Natural Agro Farming Multi State Cooperative Society Ltd.",
//               "address": "D77, S/F, East of Kailash, New delhi 110065",
//               "state": "NEW DELHI",
//               "district": "SOUTH DELHI",
//               "date_of_registration": "12-01-2022",
//               "area_of_operation": "Kerala, karnataka, Maharashtra, Gujarat",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "49",
//               "name_of_society": "Mansa Development Cooperative Society Ltd",
//               "address": "41 Sukh Sagar, phase 4 colony, near Mittal College, Rasal, Kharod Bhopal 38, Madhya Pradesh",
//               "state": "MADHYA PRADESH",
//               "district": "BHOPAL",
//               "date_of_registration": "12-10-2021",
//               "area_of_operation": "Haryana, Delhi",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "50",
//               "name_of_society": "Om Agro Multi State Cooperative society Ltd",
//               "address": "Ahulana (Gohana) Sonipat Haryana 131301",
//               "state": "HARYANA",
//               "district": "SONIPAT",
//               "date_of_registration": "22-11-2021",
//               "area_of_operation": "Haryana, Delhi",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "51",
//               "name_of_society": "Ramchandra Multi Speciality Cooperative Hospital & Research Center Ltd",
//               "address": "S.No. 2/2, Near SBI bank, Savakar Colony, Islampur, Walwa, Sangli 415409,\nMaharashtra",
//               "state": "MAHARASHTRA",
//               "district": "Sangli",
//               "date_of_registration": "10-11-2021",
//               "area_of_operation": "Haryana, UttarPradesh, Himachal, Punjab",
//               "sector_type": "Health/Hospital"
//           },
//           {
//               "sr_no": "52",
//               "name_of_society": "Mudra Agriculture & Skill Development Multistate Cooperative Society Ltd",
//               "address": "15-A, 3-4-757/22, APHB Building Near Raghavendra Swamy Temple Opposite Telangana Grameena Bank, Barkatputra, Hyderabad 500027",
//               "state": "TELANGANA",
//               "district": "HYDERABAD",
//               "date_of_registration": "12-04-2017",
//               "area_of_operation": "Bihar, West bengal, Odisha",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "53",
//               "name_of_society": "The Bhuj Mercantile Coop. Bank Ltd",
//               "address": "Vyapar Bhawan, Mithakhali 6 Roads, Ahmedabad-380006(Gujarat)",
//               "state": "GUJARAT",
//               "district": "AHMEDABAD",
//               "date_of_registration": "14-09-2021",
//               "area_of_operation": "Tamil Nadu, karnataks",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "54",
//               "name_of_society": "Heaven Multi State Agro Cooperative Society Ltd",
//               "address": "Kh No 403, Babhani Nagar, Andar, Sominath Nagar, Ward No. 7, Deoria Kasiya Bypass Road, Deoria , Uttar Pradesh 274001",
//               "state": "UTTAR PRADESH",
//               "district": "DEORIA",
//               "date_of_registration": "14-09-2021",
//               "area_of_operation": "Haryana, Punajb",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "55",
//               "name_of_society": "The Sutex Cooperative Bank Ltd",
//               "address": "Surjaram, Bachkaniwala Bhawan, Near Navjivan Circle, Udhana Magdalla Road, Surat 395017 Gujarat",
//               "state": "GUJARAT",
//               "district": "SURAT",
//               "date_of_registration": "14-09-2021",
//               "area_of_operation": "Manipur, Meghalaya",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "56",
//               "name_of_society": "The Navbharat Multi State Agro Farming and Marketing Cooperative Society Ltd",
//               "address": "Shop No 112, Floor-I, Sharda Arcade, Paliyad Road, Batod Gujarat",
//               "state": "GUJARAT",
//               "district": "BATOD",
//               "date_of_registration": "09-08-2021",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "57",
//               "name_of_society": "BharathiMana Fishermen development Cooperative Society ltd.\n(BHARATHIMANACO)",
//               "address": "Kha- Potshangham Maning, Leikai, PO & PS Bishnupur 795126 Manipur",
//               "state": "MANIPUR",
//               "district": "Bishnupur",
//               "date_of_registration": "06-07-2021",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Fisheries"
//           },
//           {
//               "sr_no": "58",
//               "name_of_society": "Agrovision Farmer Multi State Cooperative Society Ltd.",
//               "address": "H.No 3, Gate No 1, Krishna Colony, Near Universal School, Gorakhpur Kasya Road, Deoria, Uttar Pradesh 274001",
//               "state": "UTTAR PRADESH",
//               "district": "DEORIA",
//               "date_of_registration": "27-05-2021",
//               "area_of_operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "59",
//               "name_of_society": "Chitrakoot Multi State Agriculture Marketing Cooperative Society Ltd. (CMAMCS)",
//               "address": "H.No 104, Village & Post Sahewa, thana-\nGirwan, Tehsil Atarra, Banda, Uttar Pradesh 210120",
//               "state": "UTTAR PRADESH",
//               "district": "BANDA",
//               "date_of_registration": "29-04-2021",
//               "area_of_operation": "Andhra Pradesh, Telangna",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "60",
//               "name_of_society": "CP Agrotech Multi State Cooperative Society Ltd.",
//               "address": "C/O Manoj Kumar, Mohalla-Kannon Goyan, Kasba- Jhinjhana, Jhinjhana Rural, Shamli, Uttar Pradesh 247773",
//               "state": "UTTAR PRADESH",
//               "district": "MUZAFFARNAGAR",
//               "date_of_registration": "16-03-2021",
//               "area_of_operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "61",
//               "name_of_society": "Simplydesi Selfhelp Products, Processing and Marketing Multi State Cooperative Society Ltd",
//               "address": "52, Ananda Park Extension, East Punjabi Bagh, New Delhi 110026",
//               "state": "NEW DELHI",
//               "district": "WEST DELHI",
//               "date_of_registration": "24-02-2021",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Fisheries"
//           },
//           {
//               "sr_no": "62",
//               "name_of_society": "Bharati North East Fisherman Co-operative Ltd. (BHARATICO)",
//               "address": "C/O Swambha Basumatary, near Simlaguri Post Office, Simlaguri, Dhaliagaon,\nChirang(BTR), Assam 783381",
//               "state": "ASSAM",
//               "district": "BONGAIGAON",
//               "date_of_registration": "15-02-2021",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Fisheries"
//           },
//           {
//               "sr_no": "63",
//               "name_of_society": "Chambal Agriculture Marketing Cooperative Ltd",
//               "address": "525, rajput Nagar, Bharouli road, Bhind, Madhya Pradesh 477001",
//               "state": "MADHYA PRADESH",
//               "district": "BHIND",
//               "date_of_registration": "15-01-2021",
//               "area_of_operation": "Haryana, Delhi",
//               "sector_type": "Marketing"
//           },
//           {
//               "sr_no": "64",
//               "name_of_society": "Sharda Agro Multi State Cooperative Society Ltd",
//               "address": "Bhopal, Madhya Pradesh",
//               "state": "MADHYA PRADESH",
//               "district": "BHOPAL",
//               "date_of_registration": "14-12-2020",
//               "area_of_operation": "Haryana, Delhi, UttarPradesh, ",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "65",
//               "name_of_society": "N E Railway Cooperative Credit Society Ltd,",
//               "address": "Chief Worshop Manager Office, NE Railway, Izzatnagar, Bareilly, Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "BAREILLY",
//               "date_of_registration": "24-11-2020",
//               "area_of_operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
//               "sector_type": "Credit"
//           },
//           {
//               "sr_no": "66",
//               "name_of_society": "Ramraja Multi state Agro Cooperative Society ltd.",
//               "address": "102, Eligent Tower, Royal City, Shivpuri Road, Jhansi, 284003 Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "JHANSI",
//               "date_of_registration": "12-11-2020",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "67",
//               "name_of_society": "Vitthal Rao Shinde Sahakari Sahkar Karkhana Ltd",
//               "address": "Gangamainagar, Post Pimpalner, Taluka Madha, Solapur, 413210 Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "SOLAPUR",
//               "date_of_registration": "05-11-2020",
//               "area_of_operation": "Haryana, Punjab, Rajasthan",
//               "sector_type": "Industrial/Textile"
//           },
//           {
//               "sr_no": "68",
//               "name_of_society": "Ambika Multi State Health Service for the Weaker Section Cooperative Society Ltd",
//               "address": "Sai Illam, Floor-2, 53/2, Bharatheshwarar,\n3rd Street, Kodambakkam, Chennai 600024, Tamil Nadu",
//               "state": "TAMIL NADU",
//               "district": "CHENNAI",
//               "date_of_registration": "14-09-2020",
//               "area_of_operation": "Haryana, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "69",
//               "name_of_society": "The UP Kisan Development cooperative Society Ltd",
//               "address": "65, Bheem Nagar, Vijay Khand 2, Gomti Nagar, Lucknow-226010, Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "LUCKNOW",
//               "date_of_registration": "10-08-2020",
//               "area_of_operation": "Gujarat, Rajasthan, Haryana, Delhi",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "70",
//               "name_of_society": "Farmtrade Agro Multi state Marketing Cooperative Ltd",
//               "address": "B-92. Mayfiels Garden Sector 48, Gurugram- 122002",
//               "state": "HARYANA",
//               "district": "GURGAON",
//               "date_of_registration": "10-08-2020",
//               "area_of_operation": "Kerala, karnataka, Maharashtra, Gujarat",
//               "sector_type": "Marketing"
//           },
//           {
//               "sr_no": "71",
//               "name_of_society": "Bihar State handloom Weavers Cooperative Union Ltd (BISHCOTEX)",
//               "address": "Handloom Bhawan, Rajendra Place, Patna, Bihar",
//               "state": "BIHAR",
//               "district": "PATNA",
//               "date_of_registration": "14-07-2020",
//               "area_of_operation": "Maharashtra, Karnataka, Tamil nadu",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "72",
//               "name_of_society": "Radhika Agricultural Cooperative Society Ltd",
//               "address": "Swami Puran Colony, Nai Basti, Jhansi 284002, Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "JHANSI",
//               "date_of_registration": "24-04-2020",
//               "area_of_operation": "Haryana, Gujarat, Maharashtra, Delhi, West bengal, Andhra Pradesh, Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "73",
//               "name_of_society": "Farm to Foreign Exports Entrepreneur Development Multi State Cooperative Society Ltd",
//               "address": "H.No. 6-9, Gundugolanu(P.O), Bhimadole (Mandal), Andhra Pradesh-534427",
//               "state": "ANDHRA PRADESH",
//               "district": "WEST GODAVARI",
//               "date_of_registration": "16-01-2020",
//               "area_of_operation": "Haryana, UttarPradesh, Himachal, Punjab",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "74",
//               "name_of_society": "Dharitri Jute and Eco Friendly Products Multi State Cooperative Society Ltd",
//               "address": "D.No.12-2-42111, Alapati Nagar, Gudimalkapur, Hyderabad-500028, Telangana",
//               "state": "TELANGANA",
//               "district": "HYDERABAD",
//               "date_of_registration": "12-12-2019",
//               "area_of_operation": "Bihar, West bengal, Odisha",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "75",
//               "name_of_society": "The Malabar Multi State Agro Cooperative Society Limited",
//               "address": "1st Floor, Aiswarya Complex, Thavakkara, Kannur, Kerala- 670002",
//               "state": "KERALA",
//               "district": "KANNUR",
//               "date_of_registration": "20-10-2019",
//               "area_of_operation": "Haryana, Punajb",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "76",
//               "name_of_society": "Sai Raam Multi State Agri Cooperative Society Ltd",
//               "address": "No.6. (D-18), 6th Cross West Extension, Thillai Nagar, Trichy, Tamil Nadu-620008",
//               "state": "TAMIL NADU",
//               "district": "TIRUCHIRAPPALLI",
//               "date_of_registration": "06-12-2019",
//               "area_of_operation": "Manipur, Meghalaya",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "77",
//               "name_of_society": "Prabhavana Multi State Womens\u00e2\u20ac\u2122 Jute and Allied Fibre Products Cooperative Society Ltd",
//               "address": ", House. No 2-2-647/G/18/1, Near Shivam Road, DD Colony, Hyderabad, Telangana\n500013",
//               "state": "TELANGANA",
//               "district": "HYDERABAD",
//               "date_of_registration": "27-09-2019",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "78",
//               "name_of_society": "The Gayatri Cooperative Urban Bank Ltd",
//               "address": "7-1,72, 73,74 Gayatri Towers, Tehsil Chowrasta, Jagtial Town, Dist. Jagtail, Telangana",
//               "state": "TELANGANA",
//               "district": "KARIMNAGAR",
//               "date_of_registration": "23-08-2019",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "79",
//               "name_of_society": "Shri Saibaba Multi State Cooperative Dudh Utpadak & Prakriya Sangh Ltd",
//               "address": "A/p Lohgaon, Tal- Rahata, Dist. Ahmednagar, PIN 413712 Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "Ahmed Nagar",
//               "date_of_registration": "06-08-2019",
//               "area_of_operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
//               "sector_type": "Dairy"
//           },
//           {
//               "sr_no": "80",
//               "name_of_society": "Subhiksha Organic Farmers Multi State Cooperative Society Ltd",
//               "address": "Krushi Nivasa, At Kuruvalli,Thirthahalli, Shimoga, Karnataka 577432",
//               "state": "KARNATAKA",
//               "district": "SHIVAMOGGA",
//               "date_of_registration": "03-07-2019",
//               "area_of_operation": "Andhra Pradesh, Telangna",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "81",
//               "name_of_society": "The Panipat Urban Cooperative Bank Ltd (PUCB)",
//               "address": "510/8, G T Road,Panipat, Haryana 132103",
//               "state": "HARYANA",
//               "district": "PANIPAT",
//               "date_of_registration": "14-05-2019",
//               "area_of_operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "82",
//               "name_of_society": "Green Earth Agro Cooperative Society Ltd",
//               "address": "3/170, Vishwas Khand, Gomti Society , Lucknow 226010, Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "LUCKNOW",
//               "date_of_registration": "03-05-2019",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "83",
//               "name_of_society": "Bihar Cooperative Federation Ltd",
//               "address": "Budh Marg, Patna 800001, Bihar",
//               "state": "BIHAR",
//               "district": "PATNA",
//               "date_of_registration": "03-10-2018",
//               "area_of_operation": "Gujarat, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "84",
//               "name_of_society": "Bharathi Cooperative Housing Society Ltd",
//               "address": "87-A, Perambur High Road, Perambur Post, Chennai 600011 Tamil Nadu",
//               "state": "TAMIL NADU",
//               "district": "CHENNAI",
//               "date_of_registration": "18-05-2018",
//               "area_of_operation": "Haryana, Delhi",
//               "sector_type": "Housing"
//           },
//           {
//               "sr_no": "85",
//               "name_of_society": "The Surat People\u00e2\u20ac\u2122s Cooperative Bank Ltd",
//               "address": "Vasudhara Bhavan, Timalyawad, Nanpura, Surat, Gujarat",
//               "state": "GUJARAT",
//               "district": "SURAT",
//               "date_of_registration": "28-03-2018",
//               "area_of_operation": "Haryana, Delhi, UttarPradesh, ",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "86",
//               "name_of_society": "Sanmati Sahakari Bank Ltd",
//               "address": "9/114, Laxmi Market, Ichalkaranji Kolhapur, Maharashtra 416115",
//               "state": "MAHARASHTRA",
//               "district": "Kolhapur",
//               "date_of_registration": "27-03-2018",
//               "area_of_operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "87",
//               "name_of_society": "Reserve Bank Staff & Officers cooperative Credit Society Ltd",
//               "address": "C/ Reserve Bank of India, Amar Building, 2nd Floor, Sir P Road, Fort, Mumbai,\n400001, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "MUMBAI",
//               "date_of_registration": "13-02-2018",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": "Credit"
//           },
//           {
//               "sr_no": "88",
//               "name_of_society": "Dev Lok Housing Cooperative Ltd",
//               "address": "A-55, Dwarka, Sector-19, New Delhi",
//               "state": "NEW DELHI",
//               "district": "NEW DELHI",
//               "date_of_registration": "02-02-2018",
//               "area_of_operation": "Haryana, Punjab, Rajasthan",
//               "sector_type": "Housing"
//           },
//           {
//               "sr_no": "89",
//               "name_of_society": "Maa Vaishno Agro Multi State Cooperative Society Ltd",
//               "address": "Shop No. 25, Block-A, Old LIC Building, Near BSNL Exchange, Super Market, Lalitpur,\n284403, Uttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "LALITPUR",
//               "date_of_registration": "19-01-2018",
//               "area_of_operation": "Haryana, Rajasthan",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "90",
//               "name_of_society": "Sree Balki Multi State Cooperative Housing Society Ltd",
//               "address": "No. 9, Elango Street, Kabilar, Nagar,\nManavala Nagar, Tiruvallur 602002, Tamil Nadu",
//               "state": "TAMIL NADU",
//               "district": "TIRUVALLUR",
//               "date_of_registration": "05-01-2018",
//               "area_of_operation": "Gujarat, Rajasthan, Haryana, Delhi",
//               "sector_type": "Housing"
//           },
//           {
//               "sr_no": "91",
//               "name_of_society": "Southern Multi State Agro Cooperative Society Ltd,",
//               "address": "27 Gokulam, Mount Pleasant Road, Conoor , Ooty, Tamil Nadu 643102",
//               "state": "TAMIL NADU",
//               "district": "NILGIRIS",
//               "date_of_registration": "19-12-2017",
//               "area_of_operation": "Kerala, karnataka, Maharashtra, Gujarat",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "92",
//               "name_of_society": "Dombivli Nagari Sahakari Bank Ltd",
//               "address": "Plot No P-52, MIDC Phase-II, Kalyan Shil Road, Dombovli (East) Maharashtra 421204",
//               "state": "MAHARASHTRA",
//               "district": "THANE",
//               "date_of_registration": "28-07-2017",
//               "area_of_operation": "Maharashtra, Karnataka, Tamil nadu",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "93",
//               "name_of_society": "Lucknow Division Insurance Employees Cooperative Credit Society Ltd",
//               "address": "Jeevan Prakash Building, 30, Hazratganj , Lucknow, Uttar Pradesh 226001",
//               "state": "UTTAR PRADESH",
//               "district": "LUCKNOW",
//               "date_of_registration": "11-07-2017",
//               "area_of_operation": "Haryana, Gujarat, Maharashtra, Delhi",
//               "sector_type": "Credit"
//           },
//           {
//               "sr_no": "94",
//               "name_of_society": "The Kalyan Janata Sahakari Bank Ltd",
//               "address": "Kalyanam astu, Om Vijaykrishna, Apt, Adharwadi, Kalyan, West, Thane\nMaharashtra 421301",
//               "state": "MAHARASHTRA",
//               "district": "THANE",
//               "date_of_registration": "24-03-2017",
//               "area_of_operation": "West bengal, Andhra Pradesh",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "95",
//               "name_of_society": "The Eastern Railway Employees\nCooperative Bank Limited (Eastern & North East Frontier Railway Employees Co-\noperative Bank Ltd.)",
//               "address": "17, Neta Ji Subhash Road, Kolkata 700001",
//               "state": "WEST BENGAL",
//               "district": "KOLKATA",
//               "date_of_registration": "22-03-2017",
//               "area_of_operation": "Maharashtra, Gujarat, Rajasthan",
//               "sector_type": ""
//           },
//           {
//               "sr_no": "96",
//               "name_of_society": "Purvanchal Krishi Avam Kisan kalyan Multi State Cooperative Society Ltd",
//               "address": "House No. 799, Vill: Taraya Sujan, Post : Tarya Sujan, Block : Seorahi, Tehsil :\nTamkihi Raj, Dist. Kushinagar, Pin 274409,\nUttar Pradesh",
//               "state": "UTTAR PRADESH",
//               "district": "DEORIA",
//               "date_of_registration": "06-03-2017",
//               "area_of_operation": "Gujarat, Rajasthan, Haryana, Delhi",
//               "sector_type": "Agro"
//           },
//           {
//               "sr_no": "97",
//               "name_of_society": "The Ajara Urban Cooperative Bank Limited",
//               "address": "393-B, Main Road Ajara, Kolhapur, 416505, Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "Kolhapur",
//               "date_of_registration": "17-02-2017",
//               "area_of_operation": "Kerala, karnataka, Maharashtra, Gujarat",
//               "sector_type": "Cooperative Bank"
//           },
//           {
//               "sr_no": "98",
//               "name_of_society": "Bihar State Housing Cooperative Federation Ltd",
//               "address": "Lalit Bhawan, Bailey Road, Patna , Bihar 800014",
//               "state": "BIHAR",
//               "district": "PATNA",
//               "date_of_registration": "19-10-2016",
//               "area_of_operation": "Maharashtra, Karnataka, Tamil nadu",
//               "sector_type": "Housing"
//           },
//           {
//               "sr_no": "99",
//               "name_of_society": "The Navodit Cooperative Urban Thrift & Credit Society Ltd",
//               "address": "147, South Amarkali, Delhi 110051",
//               "state": "NEW DELHI",
//               "district": "SHAHDARA",
//               "date_of_registration": "27-09-2016",
//               "area_of_operation": "Haryana, Gujarat, Maharashtra, Delhi",
//               "sector_type": "Credit"
//           },
//           {
//               "sr_no": "100",
//               "name_of_society": "Lokseva Multi State Credit Cooperative Society Ltd",
//               "address": "A/p Tisgaon Pravara, Rahata, Ahmednagar 413712 Maharashtra",
//               "state": "MAHARASHTRA",
//               "district": "Ahmed Nagar",
//               "date_of_registration": "26-09-2016",
//               "area_of_operation": "West bengal, Andhra Pradesh",
//               "sector_type": "Credit"
//           }
//       ]
//   },
//   "registration_counts": {
//       "labels": [
//           "01-04-2022",
//           "04-10-2022",
//           "06-06-2022",
//           "10-08-2020",
//           "12-01-2022",
//           "14-09-2021",
//           "15-06-2022",
//           "16-08-2022",
//           "21-03-2022",
//           "27-04-2022",
//           "27-06-2022",
//           "31-08-2022"
//       ],
//       "counts": [
//           4,
//           2,
//           3,
//           2,
//           2,
//           3,
//           2,
//           2,
//           2,
//           3,
//           2,
//           2
//       ]
//   },
//   "state_district_sector": {
//       "UTTAR PRADESH": {
//           "KUSHI NAGAR": [
//               "Credit"
//           ],
//           "Gonde": [
//               "Agro"
//           ],
//           "LUCKNOW": [
//               "Agro",
//               "Credit"
//           ],
//           "BASTI": [
//               "Agro"
//           ],
//           "BAREILLY": [
//               "Agro",
//               "Credit"
//           ],
//           "BULANDSHAHR": [
//               "Agro"
//           ],
//           "DEORIA": [
//               "Agro"
//           ],
//           "BANDA": [
//               "Agro"
//           ],
//           "MUZAFFARNAGAR": [
//               "Agro"
//           ],
//           "JHANSI": [
//               "Agro"
//           ],
//           "LALITPUR": [
//               "Agro"
//           ]
//       },
//       "KERALA": {
//           "THRISSUR": [
//               "Agro",
//               "Fisheries"
//           ],
//           "IDUKKI": [
//               "Tourism"
//           ],
//           "THIRUVANANTHAPURAM": [
//               "Agro"
//           ],
//           "KOZHIKODE": [
//               "Agro"
//           ],
//           "ERNAKULAM": [
//               "Others",
//               "Agro"
//           ],
//           "KANNUR": [
//               "Agro"
//           ]
//       },
//       "UTTARAKHAND": {
//           "HARIDWAR": [
//               "Agro"
//           ]
//       },
//       "MAHARASHTRA": {
//           "SOLAPUR": [
//               "Health/Hospital",
//               "Industrial/Textile"
//           ],
//           "PUNE": [
//               "Agro"
//           ],
//           "BEED": [
//               "Health/Hospital",
//               "Others"
//           ],
//           "AHMEDNAGAR": [
//               "Health/Hospital"
//           ],
//           "NASIK": [
//               "Health/Hospital",
//               "Agro"
//           ],
//           "BULDHANA": [
//               "Agro"
//           ],
//           "OSMANABAD": [
//               "Health/Hospital"
//           ],
//           "KOLHAPUR": [
//               "Health/Hospital",
//               "Cooperative Bank"
//           ],
//           "SANGLI": [
//               "Agro"
//           ],
//           "BHANDARA": [
//               "Agro"
//           ],
//           "AHMED NAGAR": [
//               "Agro"
//           ],
//           "NAGPUR": [
//               "Industrial/Textile"
//           ],
//           "Sangli": [
//               "Health/Hospital"
//           ],
//           "Ahmed Nagar": [
//               "Dairy",
//               "Credit"
//           ],
//           "Kolhapur": [
//               "Cooperative Bank"
//           ],
//           "MUMBAI": [
//               "Credit"
//           ],
//           "THANE": [
//               "Cooperative Bank"
//           ]
//       },
//       "PUNJAB": {
//           "MOGA": [
//               "Federation"
//           ]
//       },
//       "TAMIL NADU": {
//           "COIMBATORE": [
//               "Housing",
//               "Agro"
//           ],
//           "CHENNAI": [
//               "Agro",
//               "Housing"
//           ],
//           "TIRUCHIRAPPALLI": [
//               "Agro"
//           ],
//           "TIRUVALLUR": [
//               "Housing"
//           ],
//           "NILGIRIS": [
//               "Agro"
//           ]
//       },
//       "TELANGANA": {
//           "RANGAREDDY": [
//               "Agro"
//           ],
//           "HYDERABAD": [
//               "Agro"
//           ],
//           "KARIMNAGAR": [
//               "Cooperative Bank"
//           ]
//       },
//       "HARYANA": {
//           "FARIDABAD": [
//               "Federation"
//           ],
//           "SONIPAT": [
//               "Agro"
//           ],
//           "GURGAON": [
//               "Marketing"
//           ],
//           "PANIPAT": [
//               "Cooperative Bank"
//           ]
//       },
//       "ANDHRA PRADESH": {
//           "VISAKHAPATANAM": [
//               "Agro"
//           ],
//           "WEST GODAVARI": [
//               "Agro"
//           ]
//       },
//       "MANIPUR": {
//           "BISHNUPUR": [
//               "Construction",
//               "Agro"
//           ],
//           "Bishnupur": [
//               "Fisheries"
//           ]
//       },
//       "NEW DELHI": {
//           "NEW DELHI": [
//               "Agro",
//               "Housing"
//           ],
//           "SOUTH DELHI": [
//               "Agro"
//           ],
//           "WEST DELHI": [
//               "Fisheries"
//           ],
//           "SHAHDARA": [
//               "Credit"
//           ]
//       },
//       "JAMMU AND KASHMIR": {
//           "BADGAM": [
//               "Fisheries"
//           ]
//       },
//       "MADHYA PRADESH": {
//           "BHOPAL": [
//               "Agro"
//           ],
//           "BHIND": [
//               "Marketing"
//           ]
//       },
//       "GUJARAT": {
//           "AHMEDABAD": [
//               "Cooperative Bank"
//           ],
//           "SURAT": [
//               "Cooperative Bank"
//           ],
//           "BATOD": [
//               "Agro"
//           ]
//       },
//       "ASSAM": {
//           "BONGAIGAON": [
//               "Fisheries"
//           ]
//       },
//       "BIHAR": {
//           "PATNA": [
//               "Agro",
//               "Housing"
//           ]
//       },
//       "KARNATAKA": {
//           "SHIVAMOGGA": [
//               "Agro"
//           ]
//       },
//       "WEST BENGAL": {
//           "KOLKATA": [
//               ""
//           ]
//       }
//   }
// };

app.get('/', async (req,res)=>{
      try{
        console.log("CAME HERE");

        // RUN THE CODE BELOW TO POPULATE AND IMPORT THE DATA TO MONGODB. (RUN IT ONLY ONCE TO AVOID UPLOADING MULTIPLE TIMES.)
        //start
        // let c = 0;
        // await Data.deleteMany({})
        // console.log(realData, realData.data);
        // const json_data = realData["data"].data;
        // for await(let i of json_data){
        //   let date = null;
        //   let stringDate = i.date_of_registration;
        //   if(stringDate){
        //     var dateString = "2022-10-13";
        //     var dateParts = dateString.split("-");
        //     var year = parseInt(dateParts[0]);
        //     var month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
        //     var day = parseInt(dateParts[2]);
        //     date = new Date(year, month, day);
        //     console.log(date)
        //   }

        //   await Data.create({
        //     sr_no : i.sr_no,
        //     name_of_society : i.name_of_society,
        //     address : i.address,
        //     state : i.state,
        //     district : i.district,
        //     date_of_registration : date,
        //     area_of_operation : i.area_of_operation,
        //     sector_type : i.sector_type
        //   })
        //   console.log(i.sr_no);
        //       console.log("CREATED FOR " + c++);
        // }
        // //end
        // let {data : Data2, ...rest} = realData;
        // let data = await mscs.find({});
        // return res.json({
        //     status : "SUCCESS",
        //     data : data, 
        //     ...rest
        // })

        let totalData = await mscs.find({});

        res.json({
            status : "SUCCESS",
            data : totalData,
        })
    }
    catch(err)
    {
      console.log(err);
    }
}
)




app.listen(3000, (err, res) =>{
  console.log("Listening on port 3000");
});

module.exports = router;