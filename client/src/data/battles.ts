import { link } from "fs";

export interface Battle {
  id: number;
  name: string;
  period: string;
  date?: string;
  description: string;
  image: string;
  location?: string;
  result?: string;
}

export const battlesByPeriod = {
  "فتح الأندلس": [
    {
      id: 1,
      name: "معركة وادي لكة",
      period: "فتح الأندلس",
      date: "92هـ / 711م",
      description: "الضربة القاضية لحكم القوط",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "وادي لكة",
      result: "انتصار المسلمين وفتح الأندلس",
    },
    {
      id: 2,
      name: "معركة ماردة",
      period: "فتح الأندلس",
      date: "94هـ / 713م",
      description: "بوابة السيطرة على الأندلس",
      image: "https://images.unsplash.com/photo-1583592643761-bf2ecd0e0c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "ماردة",
      result: "انتصار المسلمين",
      link: "https://ar.wikipedia.org/wiki/معركة_ماردة"
    },
    {
      id: 3,
      name: "معركة تولوز",
      period: "فتح الأندلس",
      date: "102 / 721",
      description: "نجح بيلايو وجنوده في هزيمة القوات الإسلامية مستغلين وعورة الجبال...",
      image: "https://images.unsplash.com/photo-1583592643761-bf2ecd0e0c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "ماردة",
      result: "انتصار المسلمين",
      link: "https://ar.wikipedia.org/wiki/معركة_تولوز"
    }
  ],
  "عصر الولاة": [
    {
      id: 4,
      name: "حصار سرقسطة الأول",
      period: "عصر الولاة",
      date: "102هـ / 721م",
      description: "محاولة المسلمين السيطرة على شمال الأندلس",
      image: "https://images.unsplash.com/photo-1559589689-577aabd1f5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "سرقسطة",
      result: "فشل الحصار",
      link: "https://ar.wikipedia.org/wiki/حصار_سرقسطة_الأول"
    },
    {
      id: 5,
      name: "معركة طولوشة",
      period: "عصر الولاة",
      date: "114هـ / 732م",
      description: "حملة المسلمين نحو فرنسا بقيادة عبد الرحمن الغافقي",
      image: "https://images.unsplash.com/photo-1518882579-59a2dcde30d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "طولوشة",
      result: "هزيمة المسلمين ومقتل عبد الرحمن الغافقي",
      link: "https://ar.wikipedia.org/wiki/معركة_طولوشة"
    }
  ],
  "عصر الإمارة الأموية": [
    {
      id: 6,
      name: "معركة المصارة",
      period: "عصر الإمارة الأموية",
      date: "213هـ / 828م",
      description: "تمرد البربر في الجنوب ومحاولة السيطرة عليه",
      image: "https://images.unsplash.com/photo-1618416520370-0b5b68353c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "المصارة",
      result: "انتصار الدولة الأموية في الأندلس",
      link: "https://ar.wikipedia.org/wiki/معركة_المصارة"
    }
  ],
  "عصر الخلافة الأموية": [
    {
      id: 7,
      name: "معركة الخندق",
      period: "عصر الخلافة الأموية",
      date: "350هـ / 961م",
      description: "دفاع قرطبة ضد تحالف مسيحي ضخم",
      image: "https://images.unsplash.com/photo-1589394811101-879b68e86eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "قرطبة",
      result: "انتصار المسلمين وحماية العاصمة",
      link: "https://ar.wikipedia.org/wiki/معركة_الخندق"
    }
  ],
  "عصر ملوك الطوائف": [
    {
      id: 8,
      name: "معركة الزلاقة",
      period: "عصر ملوك الطوائف",
      date: "479هـ / 1086م",
      description: "إنقاذ الأندلس من السقوط على يد المرابطين",
      image: "https://images.unsplash.com/photo-1622469996832-78cc98d2617e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "الزلاقة",
      result: "انتصار المسلمين بقيادة يوسف بن تاشفين",
      link: "https://ar.wikipedia.org/wiki/معركة_الزلاقة"
    }
  ],
  "عصر المرابطين": [
    {
      id: 9,
      name: "معركة أقليش",
      period: "عصر المرابطين",
      date: "503هـ / 1110م",
      description: "صراع المسلمين والمسيحيين في وسط الأندلس",
      image: "https://images.unsplash.com/photo-1535982330050-f1c7ea0f98c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "أقليش",
      result: "انتصار المسلمين",
      link: "https://ar.wikipedia.org/wiki/معركة_أقليش"
    }
  ],
  "عصر الموحدين": [
    {
      id: 10,
      name: "معركة الأرك",
      period: "عصر الموحدين",
      date: "591هـ / 1195م",
      description: "أهم انتصار للمسلمين في الأندلس بعد الزلاقة",
      image: "https://images.unsplash.com/photo-1549887534-578fbebdc305?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "الأرك",
      result: "انتصار المسلمين بقيادة يعقوب المنصور",
      link: "https://ar.wikipedia.org/wiki/معركة_الأرك"
    },
    {
      id: 11,
      name: "معركة العقاب",
      period: "عصر الموحدين",
      date: "609هـ / 1212م",
      description: "نقطة تحول في سقوط الأندلس",
      image: "https://images.unsplash.com/photo-1620332189865-0ebda9b1964d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "العقاب",
      result: "هزيمة المسلمين",
      link: "https://ar.wikipedia.org/wiki/معركة_العقاب"
    }
  ],
  "سقوط الأندلس": [
    {
      id: 12,
      name: "حصار غرناطة",
      period: "سقوط الأندلس",
      date: "897هـ / 1492م",
      description: "نهاية الحكم الإسلامي في الأندلس",
      image: "https://images.unsplash.com/photo-1555072959-0611a4c6a94e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "غرناطة",
      result: "سقوط الأندلس وخروج المسلمين",
      link: "https://ar.wikipedia.org/wiki/حصار_غرناطة"
    }
  ]
};