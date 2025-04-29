export interface Character {
  id: number;
  name: string;
  role: string;
  period: string;
  image: string;
  description: string;
  date?: string;
}

export const charactersByPeriod = {
  "فتح الأندلس": [
    {
      id: 1,
      name: "موسى بن نصير",
      role: "القائد ابن القائد",
      period: "فتح الأندلس",
      date: "19-97 هـ = 640-716 م",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLxl7iCgVjMjI4tAM3KOQqyVJA0It8f4MLw&s",
      description: "القائد العسكري الذي خطط للفتح وأشرف على عملياته. قام بتوحيد المناطق المفتوحة وتنظيم إدارتها."
    },
    {
      id: 2,
      name: "طارق بن زياد",
      role: "القائد العسكري",
      period: "فتح الأندلس",
      date: "50-102 هـ = 670-720م",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "القائد العسكري الذي قاد الفتح الإسلامي للأندلس في عام 711م. اشتهر بخطبته الشهيرة وحرق السفن."
    },
    {
      id: 3,
      name: "عبد العزيز بن موسى بن نصير",
      role: "والي الأندلس",
      period: "فتح الأندلس",
      date: "95-97 هـ = 714-716 م",
      image: "https://images.unsplash.com/photo-15666247590190-511a09f6ddbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "أول والٍ للأندلس، عمل على استقرار الحكم الإسلامي وتنظيم شؤون البلاد."
    },
    {
      id: 4,
      name: "السمح بن مالك الخولاني",
      role: "القائد العسكري",
      period: "فتح الأندلس",
      date: "100-102هـ = 718-721 م",
      image: "https://images.unsplash.com/photo-1575287027515-bd7d166fd555?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "قائد عسكري بارز في فترة الفتح الإسلامي للأندلس."
    },
    {
      id: 5,
      name: "عبدالرحمن بن عبدالله الغافقي",
      role: "القائد العسكري",
      period: "فتح الأندلس",
      image: "https://images.unsplash.com/photo-10567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "قائد عسكري شجاع قاد العديد من المعارك في الأندلس."
    },
    {
      id: 6,
      name: "عنبسة بن سحيم",
      role: "القائد العسكري",
      period: "فتح الأندلس",
      date: "103-107 هـ = 721-725م",
      image: "https://images.unsplash.com/photo-1564979268369-42032c5ca998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "قائد عسكري ساهم في توسيع الفتوحات الإسلامية في الأندلس."
    }
  ],
  "عهد الولاة": [
    {
      id: 7,
      name: "عقبة بن الحجاج",
      role: "والي الأندلس",
      period: "عهد الولاة",
      date: "118-123هـ",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "من أشهر ولاة الأندلس في العصر الأموي، عرف بحكمته وعدله."
    },
    {
      id: 8,
      name: "الصميل بن حاتم ويوسف الفهري",
      role: "والي الأندلس",
      period: "عهد الولاة",
      image: "https://images.unsplash.com/photo-1576478476200-7c4c16e2e87f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "من الولاة البارزين في فترة عهد الولاة في الأندلس."
    },
    {
      id: 9,
      name: "عبد الملك بن قطن القهري",
      role: "والي الأندلس",
      period: "عهد الولاة",
      date: "1140-118هـ",
      image: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "تولى حكم الأندلس في فترة مهمة من تاريخها."
    }
  ],
  "عصر الخلافة الأموية": [
    {
      id: 10,
      name: "عبد الرحمن الداخل",
      role: "مؤسس الدولة الأموية",
      period: "عصر الخلافة الأموية",
      date: "113-172 هـ = 731-788م",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "مؤسس الدولة الأموية في الأندلس، لُقب بصقر قريش."
    }
    // Continue with all other characters...
  ]
  // Continue with all other periods...
};