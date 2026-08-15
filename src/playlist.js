const r2Base = import.meta.env.VITE_R2_AUDIO_BASE_URL || '';

function getSongUrl(filename) {
  return `${r2Base}/${encodeURIComponent(filename)}`;
}

export const playlist = [
  {
    id: 1,
    title: "जन गण मन",
    artist: "राष्ट्रगान",
    year: "1911",
    duration: "0:52",
    src: getSongUrl("Jana_Gana_Mana__HD__-_National_Anthem_With_Lyrics_-_Best_Patriotic_Song(128k).m4a"),
    tag: "National Anthem"
  },
  {
    id: 2,
    title: "मेरे देश की धरती",
    artist: "महेन्द्र कपूर",
    year: "1967",
    duration: "7:06",
    src: getSongUrl("Mere_Desh_Ki_Dharti_Lyrical_Video_-_Upkar_1967(128k).m4a"),
    tag: "Assembly Special"
  },
  {
    id: 3,
    title: "ऐ मेरे वतन के लोगों",
    artist: "लता मंगेशकर",
    year: "1963",
    duration: "6:15",
    src: getSongUrl("ऐ_मेरे_वतन_के_लोगों___Aye_Mere_Watan_Ke_Logon__Full_Songs___Desh_Bhakti_Song___Lata_Mangeshkar_Songs(128k).m4a"),
    tag: "Immortal Tribute"
  },
  {
    id: 4,
    title: "जहाँ डाल-डाल पर सोने की चिड़िया",
    artist: "मोहम्मद रफ़ी",
    year: "1965",
    duration: "5:10",
    src: getSongUrl("Jahan_Dal_Dal_Pe_Sone_Ki_Chidiya___Lyrical___Mohammed_Rafi___Sikander-E-Azam___Hansraj_Behl(128k).m4a"),
    tag: "Golden Heritage"
  },
  {
    id: 5,
    title: "वंदे मातरम्",
    artist: "राष्ट्रीय गीत",
    year: "1882",
    duration: "3:15",
    src: getSongUrl("Vande_Mataram__HD__-_National_Song_Of_india_-_Best_Patriotic_Song(128k).m4a"),
    tag: "National Song"
  },
  {
    id: 6,
    title: "यह देश है वीर जवानों का",
    artist: "मोहम्मद रफ़ी & बलबीर",
    year: "1957",
    duration: "4:40",
    src: getSongUrl("Yeh_Desh_Hai_Veer_Jawanon_ka___देश_भक्ति_स्पेशल___Independence_Day_Song___देशभक्ति_गीत(128k).m4a"),
    tag: "Independence Special"
  },
  {
    id: 7,
    title: "अब तुम्हारे हवाले वतन साथियों",
    artist: "मोहम्मद रफ़ी",
    year: "1964",
    duration: "6:05",
    src: getSongUrl("4K_अब_तुम्हारे_हवाले_वतन_साथियों_पेट्रोटिक_गीत___Ab_Tumhare_Hawaale_Watan_Saathiyon_Patriotic_Song(128k).m4a"),
    tag: "Soldiers Tribute"
  },
  {
    id: 8,
    title: "आओ बच्चों तुम्हें दिखाएं",
    artist: "कवि प्रदीप",
    year: "1954",
    duration: "4:15",
    src: getSongUrl("Aao_Bachho_Tumhe_Dikhaye__HD__-_Jagriti_Songs_-_Abhi_Bhattacharya_-_Kavi_Pradeep_-_Patriotic_Song(128k).m4a"),
    tag: "School Assembly"
  },
  {
    id: 9,
    title: "अपनी आजादी को हम हरगिज मिटा सकते नहीं",
    artist: "मोहम्मद रफ़ी",
    year: "1964",
    duration: "5:20",
    src: getSongUrl("Apni_Azadi_Ko_Hum_HD_-_Mohammed_Rafi_Deshbhakti_Songs_-_Dilip_Kumar,_Vyjayanthimala___Leader_1964(128k).m4a"),
    tag: "Freedom Classic"
  },
  {
    id: 10,
    title: "है प्रीत जहां की रीत सदा (भारत का रहने वाला हूँ)",
    artist: "महेन्द्र कपूर",
    year: "1970",
    duration: "6:30",
    src: getSongUrl("Bharat_Ka_Rehnewaala_Hoon__Hai_Preet_Jaha_Ki_Reet____Manoj_Kumar_Desh_Bhakti_Songs___Mahendra_Kapoor(128k).m4a"),
    tag: "Motherland Pride"
  },
  {
    id: 11,
    title: "हम लाये हैं तूफ़ान से कश्ती निकाल के",
    artist: "मोहम्मद रफ़ी",
    year: "1954",
    duration: "4:50",
    src: getSongUrl("Hum_Laye_Hain_Toofan_Se_Kashti_HD_-_Mohammed_Rafi_Old_Songs_-_Jagri_1954_-_Deshbhakti_Song(128k).m4a"),
    tag: "Inspirational Classic"
  },
  {
    id: 12,
    title: "मेरा रंग दे बसंती चोला",
    artist: "मुकेश & महेन्द्र कपूर",
    year: "1965",
    duration: "6:45",
    src: getSongUrl("Mera_Rang_De_Basanti_Chola___मेरा_रंग_दे_बसंती_चोला___With_Lyrics___23rd_March1931Shaheed#deshbhakti(128k).m4a"),
    tag: "Martyr Tribute"
  },
  {
    id: 13,
    title: "ऐ वतन (ऐ वतन मेरे आबाद रहे तू)",
    artist: "अरिजीत सिंह / सुनिधि चौहान",
    year: "2018",
    duration: "5:42",
    src: getSongUrl("Ay_Watan(256k).mp3"),
    tag: "Modern Classic"
  },
  {
    id: 14,
    title: "कदम कदम बढ़ाये जा",
    artist: "चित्रगुप्त / अशोक कुमार",
    year: "1950",
    duration: "3:05",
    src: getSongUrl("Kadam_Kadam_Badhaye_Ja_-_Ashok_Kumar,_Chitalkar,_Samadhi_Song(128k).m4a"),
    tag: "March Past"
  },
  {
    id: 15,
    title: "साबरमती के संत तूने कर दिया कमाल",
    artist: "आशा भोसले & हेमंत कुमार",
    year: "1954",
    duration: "4:30",
    src: getSongUrl("Sabarmati_Ke_Sant_Tune_Kar_diya_Kamaal_-_Asha_Bhosle___Hemant_Kumar___Jagriti___Patriotic_Song(128k).m4a"),
    tag: "Mahatma Tribute"
  },
  {
    id: 16,
    title: "यह माटी सभी की कहानी कहेगी",
    artist: "सी. रामचंद्र / नवरंग",
    year: "1959",
    duration: "4:15",
    src: getSongUrl("Yeh_Mati_Sabhi_ki_kahani_kahegi....Navrang(128k).m4a"),
    tag: "Motherland Love"
  },
  {
    id: 17,
    title: "ऐ मालिक तेरे बंदे हम",
    artist: "लता मंगेशकर",
    year: "1957",
    duration: "4:05",
    src: getSongUrl("aye_malik_tere_bande_ham_2Aankhe12_Hath_1957_V.Shantaram__Sandhya__Lata_BharatVyas_VasantDesai_a_tri(128k).m4a"),
    tag: "School Prayer"
  }
];

