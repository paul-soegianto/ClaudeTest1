// Food Event — Shared Database v1.0
// Edit this file to configure the event, add/remove stalls, and adjust the map.
// Both food-event.html and food-planner.html load this via <script src="food-event-db.js">.
// Runtime changes (menu, advertisement, positions) are stored in localStorage and override these defaults.

const FOOD_EVENT_DB = {
  version: '1.0',

  // ── Event info ───────────────────────────────────────────────────────────────
  event: {
    name:        'Food Festival 2026',
    date:        '15 Maret 2026',
    location:    'Gedung Serbaguna, Jakarta',
    stampTarget: 5,                       // collect stamps from this many stalls to win
    prize:       'Voucher Belanja Rp 200.000',
  },

  // ── Categories ───────────────────────────────────────────────────────────────
  categories: ['Makanan Berat', 'Makanan Ringan', 'Dessert', 'Minuman'],

  // ── Map defaults (editable by planner) ───────────────────────────────────────
  map: { cols: 6, rows: 4, cellSize: 110 },

  // ── Planner credentials ───────────────────────────────────────────────────────
  plannerPassword: 'planner2026',

  // ── Stalls ────────────────────────────────────────────────────────────────────
  // Participant fields: name, owner, password, stampCode, category, color,
  //                     position {col,row}, size {w,h}, advertisement, menu []
  // menu item fields: item, price (Rp), qty (units available today)
  stalls: [
    {
      id: 's1',
      name: 'Warung Nusantara',
      owner: 'Budi Santoso',
      password: 'budi123',
      stampCode: 'WN01',
      category: 'Makanan Berat',
      position: { col: 1, row: 1 },
      size: { w: 1, h: 1 },
      color: '#c0392b',
      advertisement: 'Masakan rumahan terenak se-Jakarta! Nikmati cita rasa Nusantara yang autentik dan mengenyangkan.',
      menu: [
        { item: 'Nasi Goreng Special',   price: 25000, qty: 50 },
        { item: 'Ayam Bakar Madu',       price: 35000, qty: 30 },
        { item: 'Soto Ayam Lamongan',    price: 20000, qty: 40 },
      ],
    },
    {
      id: 's2',
      name: 'Dapur Ibu',
      owner: 'Siti Rahayu',
      password: 'siti456',
      stampCode: 'DI02',
      category: 'Makanan Berat',
      position: { col: 3, row: 1 },
      size: { w: 1, h: 1 },
      color: '#e67e22',
      advertisement: 'Masakan Jawa otentik warisan 3 generasi. Gudeg & rawon terbaik, dijamin kangen!',
      menu: [
        { item: 'Gudeg Jogja',           price: 22000, qty: 60 },
        { item: 'Rawon Surabaya',        price: 28000, qty: 45 },
        { item: 'Opor Ayam',             price: 25000, qty: 35 },
      ],
    },
    {
      id: 's3',
      name: 'Snack Attack',
      owner: 'Kevin Wijaya',
      password: 'kevin789',
      stampCode: 'SA03',
      category: 'Makanan Ringan',
      position: { col: 5, row: 1 },
      size: { w: 1, h: 1 },
      color: '#27ae60',
      advertisement: 'Cemilan kekinian hits banget! Dijamin ketagihan dan cocok buat ngemil bareng teman.',
      menu: [
        { item: 'Cireng Bumbu Rujak',    price: 12000, qty: 100 },
        { item: 'Martabak Mini',         price: 15000, qty: 80  },
        { item: 'Tahu Crispy',           price: 10000, qty: 120 },
      ],
    },
    {
      id: 's4',
      name: 'Camilan Hits',
      owner: 'Rina Dewi',
      password: 'rina321',
      stampCode: 'CH04',
      category: 'Makanan Ringan',
      position: { col: 1, row: 3 },
      size: { w: 1, h: 1 },
      color: '#8e44ad',
      advertisement: 'Snack Korea & Jepang yang lagi viral! Corndog, takoyaki, dan banyak lagi. Daijoubu?',
      menu: [
        { item: 'Corndog Korea',         price: 18000, qty: 70 },
        { item: 'Takoyaki',              price: 20000, qty: 60 },
        { item: 'Keripik Rasa Unik',     price: 15000, qty: 90 },
      ],
    },
    {
      id: 's5',
      name: 'Sweet Corner',
      owner: 'Maya Putri',
      password: 'maya654',
      stampCode: 'SC05',
      category: 'Dessert',
      position: { col: 3, row: 3 },
      size: { w: 1, h: 1 },
      color: '#e91e63',
      advertisement: 'Dessert manis yang bikin happy! Kue artisan dan pudding premium, dibuat fresh setiap hari.',
      menu: [
        { item: 'Kue Lapis Surabaya',    price: 30000, qty: 40 },
        { item: 'Pudding Art',           price: 20000, qty: 55 },
        { item: 'Es Krim Goreng',        price: 18000, qty: 65 },
      ],
    },
    {
      id: 's6',
      name: 'Gelato Bliss',
      owner: 'Fariz Al',
      password: 'fariz987',
      stampCode: 'GB06',
      category: 'Dessert',
      position: { col: 5, row: 3 },
      size: { w: 1, h: 1 },
      color: '#00acc1',
      advertisement: 'Gelato premium dengan rasa lokal & Italia. Made fresh daily — coba durian dan matcha!',
      menu: [
        { item: 'Gelato Durian',         price: 35000, qty: 30 },
        { item: 'Gelato Matcha',         price: 32000, qty: 35 },
        { item: 'Gelato Coklat',         price: 30000, qty: 40 },
      ],
    },
    {
      id: 's7',
      name: 'Minuman Segar',
      owner: 'Doni Pratama',
      password: 'doni147',
      stampCode: 'MS07',
      category: 'Minuman',
      position: { col: 2, row: 2 },
      size: { w: 1, h: 1 },
      color: '#1e88e5',
      advertisement: 'Minuman segar penghilang dahaga! Jus buah asli 100% tanpa pengawet, langsung dari kebun.',
      menu: [
        { item: 'Jus Alpukat',           price: 18000, qty: 80  },
        { item: 'Es Kelapa Muda',        price: 15000, qty: 100 },
        { item: 'Infused Water Jeruk',   price: 12000, qty: 90  },
      ],
    },
    {
      id: 's8',
      name: 'Boba Kingdom',
      owner: 'Nissa Cantika',
      password: 'nissa258',
      stampCode: 'BK08',
      category: 'Minuman',
      position: { col: 4, row: 2 },
      size: { w: 1, h: 1 },
      color: '#7b1fa2',
      advertisement: 'Boba kekinian dengan topping melimpah! Brown sugar boba paling difavoritin, jangan sampai habis!',
      menu: [
        { item: 'Brown Sugar Boba',      price: 22000, qty: 100 },
        { item: 'Matcha Latte Boba',     price: 25000, qty: 70  },
        { item: 'Taro Milk Tea',         price: 22000, qty: 80  },
      ],
    },
  ],
};
