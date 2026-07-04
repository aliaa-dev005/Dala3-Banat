const phoneNumber = '01108644786';
const perfumes = [
  { name: 'Burberry Her Elixir', description: 'عطر زهري فاكهي غني بالفراولة والفانيليا، يمنحكِ رائحة أنثوية دافئة، ناعمة وثابتة تناسب السهرات والأجواء الباردة.', image: 'd1.jfif' },
  { name: '. Montblanc Legend Spirit', description: 'عطر رجالي منعش يجمع بين الحمضيات والأخشاب العطرية، يمنح إحساسًا بالنظافة والأناقة طوال اليوم.', image: 'd2.jfif' },
  { name: '. Olympéa – Paco Rabanne', description: 'عطر شرقي أنثوي يمزج الفانيليا المالحة مع الزهور البيضاء، ليمنحكِ رائحة جذابة تدوم لساعات طويلة.', image: 'd3.jfif' },
  { name: 'Barakkat Rouge 540', description: ' عطر فاخر مستوحى من Baccarat Rouge 540، يجمع الزعفران والعنبر والأخشاب برائحة راقية وفوحان قوي.', image: 'd4.jfif' },
  { name: 'Bio Soft 66', description: 'بودي ميست منعش للشعر والجسم برائحة فاكهية زهرية ناعمة، يمنح انتعاشًا يدوم ويترك أثرًا أنيقًا.', image: 'd5.jfif' },
  { name: '(العطور الذهبية)', description: 'مجموعة عطور شرقية فاخرة بلمسات العود والعنبر والفانيليا، تمنح حضورًا راقيًا وثباتًا مميزًا في المناسبات', image: 'd6.jfif' },
  { name: 'Jean Paul Gaultier Classique', description: 'عطر شرقي دافئ يمزج زهر البرتقال مع الفانيليا والعنبر، ليمنحكِ أنوثة فاخرة تدوم طوال اليوم.', image: 'd7.jfif' },
  { name: 'Montblanc Legend Red', description: 'عطر رجالي عصري يجمع الحمضيات المنعشة مع الأخشاب الدافئة، ليمنحك طاقة وأناقة في كل مناسبة', image: 'd8.jfif' },
  { name: 'Giorgio Armani Si', description: 'عطر أنثوي فاخر يمزج الكشمش الأسود مع الورد والفانيليا، ليمنحك رائحة راقية تدوم لساعات طويلة.', image: 'd9.jfif' },
  { name: 'Calvin Klein Euphoria', description: 'عطر شرقي زهري غني بالرمان والأوركيد، يمنحكِ رائحة غامضة وجذابة تناسب الأمسيات والمناسبات الخاصة', image: 'd10.jfif' },
  { name: 'Bleu de Chanel', description: 'عطر رجالي فاخر يجمع الحمضيات والبخور والأخشاب، ليمنحك حضورًا أنيقًا وثباتًا مميزًا طوال اليوم.', image: 'd11.jfif' },
  { name: 'Fogg Intense Wood', description: 'عطر خشبي دافئ بلمسات عنبر وتوابل، يمنحك رائحة قوية وأنيقة تناسب الأجواء الباردة والمساء.', image: 'd12.jfif' },
  { name: 'Montblanc Legend Black', description: 'عطر رجالي كلاسيكي يمزج اللافندر والبرغموت مع الأخشاب، ليمنحك رائحة نظيفة وأنيقة تناسب الاستخدام اليومي.', image: 'd13.jfif' },
  { name: 'Hug Scent Acacia', description: 'عطر زهري خشبي ناعم بلمسات عسلية دافئة، يمنحك رائحة هادئة وأنيقة مناسبة لجميع الأوقات.', image: 'd14.jfif' },
  { name: 'Bio Soft 56', description: 'بودي ميست للشعر والجسم برائحة حلوة ومنعشة، يمنح إحساسًا بالنظافة والانتعاش مع ثبات جيد للاستخدام اليومي.', image: 'd15.jfif' },
  { name: 'عطر زهرة القمر', description: 'هدوء وأناقة في كل نبضة.', image: 'd16.jfif' },
  { name: 'عطر سحر الكافيار', description: 'مزيج عميق وريفي من العود والقرنفل.', image: 'd17.jfif' },
  { name: 'عطر أميرة العطور', description: 'رائحة استثنائية تجمع بين الحلاوة والرصانة.', image: 'd18.jfif' },
  { name: 'عطر نسمة الصباح', description: 'رائحة خفيفة ومشرقة تعكس النشاط والنعومة.', image: 'd19.jfif' },
  { name: 'عطر لؤلؤة الليل', description: 'لطيفة وانسيابية مع لمسة من العنبر.', image: 'd20.jfif' }
]
const productsGrid = document.getElementById('productsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const initialCount = 10;
let visibleCount = initialCount;
if (productsGrid) {
  const visiblePerfumes = perfumes.slice(0, visibleCount);
  visiblePerfumes.forEach((perfume) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="image-box">
        <img src="${perfume.image}" alt="${perfume.name}" class="product-image" />
      </div>
      <h3>${perfume.name}</h3>
      <p>${perfume.description}</p>
      <button class="order-btn" data-perfume="${perfume.name}">اطلب الآن عبر واتساب</button>
    `;
    productsGrid.appendChild(card);
  });
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    const nextItems = perfumes.slice(visibleCount, visibleCount + 10);
    nextItems.forEach((perfume) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="image-box">
          <img src="${perfume.image}" alt="${perfume.name}" class="product-image" />
        </div>
        <h3>${perfume.name}</h3>
        <p>${perfume.description}</p>
        <button class="order-btn" data-perfume="${perfume.name}">اطلب الآن عبر واتساب</button>
      `;
      productsGrid.appendChild(card);
    });

    visibleCount += nextItems.length;
    if (visibleCount >= perfumes.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.order-btn');
  if (!button) return;

  const perfumeName = button.getAttribute('data-perfume') || 'عطر';
  const message = `أريد طلب ${perfumeName} من دُلع بنات، يرجى تزويدي بالتفاصيل.`;
  const whatsappNumber = phoneNumber.replace(/^0/, '+20');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});