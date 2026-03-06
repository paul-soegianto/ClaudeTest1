// IDX Stock Predictor — Data & Sector Definitions
// Edit to add real API endpoints. Current data is demo/mock for offline use.

const IDX_STOCK_DB = {
  version: '1.0',

  // ── Sectors (IDX Industrial Classification simplified) ─────────────────────
  // Maps user-facing industry names to IDX-IC sector/sub-sector codes
  sectors: [
    { id: 'G', name: 'Keuangan (Financial)', desc: 'Banking, insurance, investment', codes: ['G'] },
    { id: 'A', name: 'Energi & Pertambangan (Mining)', desc: 'Oil, gas, coal, metals', codes: ['A', 'B'] },
    { id: 'C', name: 'Manufaktur (Manufacturing)', desc: 'Industrial goods, machinery', codes: ['C'] },
    { id: 'D', name: 'Barang Konsumen', desc: 'Food, F&B, consumer goods', codes: ['D', 'E'] },
    { id: 'H', name: 'Properti & Real Estat', desc: 'Property, real estate', codes: ['H'] },
    { id: 'I', name: 'Teknologi', desc: 'Technology, software', codes: ['I'] },
    { id: 'F', name: 'Kesehatan', desc: 'Healthcare, pharma', codes: ['F'] },
    { id: 'K', name: 'Transportasi & Logistik', desc: 'Transport, logistics', codes: ['K', 'J'] },
    { id: 'OTHER', name: 'Lainnya (Others)', desc: 'Tampilkan semua sektor', codes: [] },
  ],

  // ── Demo stock data (mock for offline demo) ───────────────────────────────
  // Real implementation: replace with fetch from API (Invezgo, OHLC.dev, etc.)
  // Fields: code, name, sector, price, change1d, change5d, change30d,
  //         volume, buyVolume, sellVolume, lastUpdate
  stocks: [
    // Keuangan (G)
    { code: 'BBRI', name: 'Bank Rakyat Indonesia', sector: 'G', price: 5600, change1d: 0.9, change5d: 2.1, change30d: 5.2, volume: 45e6, buyVolume: 28e6, sellVolume: 17e6, lastUpdate: '2025-03-06' },
    { code: 'BBCA', name: 'Bank Central Asia', sector: 'G', price: 10250, change1d: 0.3, change5d: 1.2, change30d: 4.1, volume: 32e6, buyVolume: 21e6, sellVolume: 11e6, lastUpdate: '2025-03-06' },
    { code: 'BMRI', name: 'Bank Mandiri', sector: 'G', price: 6950, change1d: 1.2, change5d: 2.8, change30d: 6.5, volume: 38e6, buyVolume: 25e6, sellVolume: 13e6, lastUpdate: '2025-03-06' },
    { code: 'BBNI', name: 'Bank Negara Indonesia', sector: 'G', price: 5350, change1d: 0.5, change5d: 1.5, change30d: 3.8, volume: 22e6, buyVolume: 14e6, sellVolume: 8e6, lastUpdate: '2025-03-06' },
    { code: 'BNGA', name: 'Bank Cimb Niaga', sector: 'G', price: 1825, change1d: -0.2, change5d: 0.8, change30d: 2.1, volume: 15e6, buyVolume: 9e6, sellVolume: 6e6, lastUpdate: '2025-03-06' },
    { code: 'BTPN', name: 'Bank BTPN', sector: 'G', price: 2450, change1d: 0.8, change5d: 1.9, change30d: 4.2, volume: 18e6, buyVolume: 11e6, sellVolume: 7e6, lastUpdate: '2025-03-06' },
    // Energi & Pertambangan (A, B)
    { code: 'PTBA', name: 'Bukit Asam', sector: 'A', price: 3850, change1d: 1.5, change5d: 3.2, change30d: 8.1, volume: 52e6, buyVolume: 35e6, sellVolume: 17e6, lastUpdate: '2025-03-06' },
    { code: 'ITMG', name: 'Indo Tambangraya', sector: 'A', price: 27800, change1d: 2.1, change5d: 4.5, change30d: 11.2, volume: 8e6, buyVolume: 5.2e6, sellVolume: 2.8e6, lastUpdate: '2025-03-06' },
    { code: 'ADRO', name: 'Adaro Energy', sector: 'A', price: 2525, change1d: 1.8, change5d: 3.8, change30d: 9.5, volume: 85e6, buyVolume: 52e6, sellVolume: 33e6, lastUpdate: '2025-03-06' },
    { code: 'ANTM', name: 'Aneka Tambang', sector: 'B', price: 2050, change1d: 2.5, change5d: 5.1, change30d: 12.3, volume: 95e6, buyVolume: 62e6, sellVolume: 33e6, lastUpdate: '2025-03-06' },
    { code: 'PGAS', name: 'Perusahaan Gas Negara', sector: 'A', price: 1580, change1d: 0.6, change5d: 1.4, change30d: 3.2, volume: 42e6, buyVolume: 26e6, sellVolume: 16e6, lastUpdate: '2025-03-06' },
    { code: 'PTK', name: 'Pertamina Geothermal', sector: 'A', price: 1825, change1d: 1.1, change5d: 2.3, change30d: 5.8, volume: 28e6, buyVolume: 18e6, sellVolume: 10e6, lastUpdate: '2025-03-06' },
    // Manufaktur (C)
    { code: 'ASII', name: 'Astra International', sector: 'C', price: 4850, change1d: 0.7, change5d: 1.8, change30d: 4.2, volume: 65e6, buyVolume: 40e6, sellVolume: 25e6, lastUpdate: '2025-03-06' },
    { code: 'INDF', name: 'Indofood CBP', sector: 'C', price: 11250, change1d: 0.4, change5d: 1.1, change30d: 3.5, volume: 12e6, buyVolume: 8e6, sellVolume: 4e6, lastUpdate: '2025-03-06' },
    { code: 'GGRM', name: 'Gudang Garam', sector: 'C', price: 26250, change1d: 1.2, change5d: 2.5, change30d: 5.8, volume: 4e6, buyVolume: 2.6e6, sellVolume: 1.4e6, lastUpdate: '2025-03-06' },
    { code: 'UNVR', name: 'Unilever Indonesia', sector: 'C', price: 3850, change1d: -0.3, change5d: 0.5, change30d: 1.8, volume: 18e6, buyVolume: 10e6, sellVolume: 8e6, lastUpdate: '2025-03-06' },
    { code: 'INTP', name: 'Indocement', sector: 'C', price: 8750, change1d: 1.0, change5d: 2.2, change30d: 5.1, volume: 8e6, buyVolume: 5e6, sellVolume: 3e6, lastUpdate: '2025-03-06' },
    { code: 'TPIA', name: 'Chandra Asri', sector: 'C', price: 6850, change1d: 1.5, change5d: 3.0, change30d: 6.8, volume: 22e6, buyVolume: 14e6, sellVolume: 8e6, lastUpdate: '2025-03-06' },
    // Barang Konsumen (D, E)
    { code: 'ICBP', name: 'Indofood CBP Sukses', sector: 'D', price: 11250, change1d: 0.5, change5d: 1.2, change30d: 3.2, volume: 14e6, buyVolume: 9e6, sellVolume: 5e6, lastUpdate: '2025-03-06' },
    { code: 'CPIN', name: 'Charoen Pokphand', sector: 'D', price: 5425, change1d: 1.0, change5d: 2.1, change30d: 4.8, volume: 25e6, buyVolume: 16e6, sellVolume: 9e6, lastUpdate: '2025-03-06' },
    // Properti (H)
    { code: 'BSDE', name: 'Bumi Serpong Damai', sector: 'H', price: 1425, change1d: 0.7, change5d: 1.5, change30d: 3.5, volume: 55e6, buyVolume: 35e6, sellVolume: 20e6, lastUpdate: '2025-03-06' },
    { code: 'PWON', name: 'Pakuwon Jati', sector: 'H', price: 462, change1d: 1.3, change5d: 2.5, change30d: 6.2, volume: 125e6, buyVolume: 78e6, sellVolume: 47e6, lastUpdate: '2025-03-06' },
    // Teknologi (I)
    { code: 'GOTO', name: 'GoTo Gojek Tokopedia', sector: 'I', price: 78, change1d: 2.6, change5d: 5.2, change30d: 12.5, volume: 850e6, buyVolume: 520e6, sellVolume: 330e6, lastUpdate: '2025-03-06' },
    { code: 'TLKM', name: 'Telkom Indonesia', sector: 'I', price: 3850, change1d: 0.5, change5d: 1.2, change30d: 3.0, volume: 35e6, buyVolume: 22e6, sellVolume: 13e6, lastUpdate: '2025-03-06' },
    // Kesehatan (F)
    { code: 'KLBF', name: 'Kalbe Farma', sector: 'F', price: 1485, change1d: 0.3, change5d: 0.9, change30d: 2.2, volume: 28e6, buyVolume: 17e6, sellVolume: 11e6, lastUpdate: '2025-03-06' },
  ],
};
