// IDX Stock Predictor — Sector & Stock Metadata
// Prices are NOT stored here — they are fetched live from Yahoo Finance at runtime.
// Each stock has a `symbol` field (Yahoo Finance ticker with .JK suffix).

const IDX_STOCK_DB = {
  version: '2.0',
  dataSource: 'Yahoo Finance (live)',

  // ── Sectors (IDX Industrial Classification simplified) ─────────────────────
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

  // ── Stock metadata ─────────────────────────────────────────────────────────
  // `symbol` = Yahoo Finance ticker (Indonesian stocks use .JK suffix)
  // Price, change, and volume data is fetched live — do NOT add price fields here.
  stocks: [
    // Keuangan (G)
    { code: 'BBRI', name: 'Bank Rakyat Indonesia', sector: 'G', symbol: 'BBRI.JK' },
    { code: 'BBCA', name: 'Bank Central Asia', sector: 'G', symbol: 'BBCA.JK' },
    { code: 'BMRI', name: 'Bank Mandiri', sector: 'G', symbol: 'BMRI.JK' },
    { code: 'BBNI', name: 'Bank Negara Indonesia', sector: 'G', symbol: 'BBNI.JK' },
    { code: 'BNGA', name: 'Bank CIMB Niaga', sector: 'G', symbol: 'BNGA.JK' },
    { code: 'BTPN', name: 'Bank BTPN Syariah', sector: 'G', symbol: 'BTPN.JK' },
    // Energi & Pertambangan (A, B)
    { code: 'PTBA', name: 'Bukit Asam', sector: 'A', symbol: 'PTBA.JK' },
    { code: 'ITMG', name: 'Indo Tambangraya Megah', sector: 'A', symbol: 'ITMG.JK' },
    { code: 'ADRO', name: 'Adaro Energy', sector: 'A', symbol: 'ADRO.JK' },
    { code: 'ANTM', name: 'Aneka Tambang', sector: 'B', symbol: 'ANTM.JK' },
    { code: 'PGAS', name: 'Perusahaan Gas Negara', sector: 'A', symbol: 'PGAS.JK' },
    { code: 'PGEO', name: 'Pertamina Geothermal', sector: 'A', symbol: 'PGEO.JK' },
    // Manufaktur (C)
    { code: 'ASII', name: 'Astra International', sector: 'C', symbol: 'ASII.JK' },
    { code: 'INDF', name: 'Indofood Sukses Makmur', sector: 'C', symbol: 'INDF.JK' },
    { code: 'GGRM', name: 'Gudang Garam', sector: 'C', symbol: 'GGRM.JK' },
    { code: 'UNVR', name: 'Unilever Indonesia', sector: 'C', symbol: 'UNVR.JK' },
    { code: 'INTP', name: 'Indocement', sector: 'C', symbol: 'INTP.JK' },
    { code: 'TPIA', name: 'Chandra Asri Petrochemical', sector: 'C', symbol: 'TPIA.JK' },
    // Barang Konsumen (D, E)
    { code: 'ICBP', name: 'Indofood CBP Sukses', sector: 'D', symbol: 'ICBP.JK' },
    { code: 'CPIN', name: 'Charoen Pokphand Indonesia', sector: 'D', symbol: 'CPIN.JK' },
    { code: 'MYOR', name: 'Mayora Indah', sector: 'D', symbol: 'MYOR.JK' },
    // Properti (H)
    { code: 'BSDE', name: 'Bumi Serpong Damai', sector: 'H', symbol: 'BSDE.JK' },
    { code: 'PWON', name: 'Pakuwon Jati', sector: 'H', symbol: 'PWON.JK' },
    { code: 'CTRA', name: 'Ciputra Development', sector: 'H', symbol: 'CTRA.JK' },
    // Teknologi (I)
    { code: 'GOTO', name: 'GoTo Gojek Tokopedia', sector: 'I', symbol: 'GOTO.JK' },
    { code: 'TLKM', name: 'Telkom Indonesia', sector: 'I', symbol: 'TLKM.JK' },
    { code: 'EMTK', name: 'Elang Mahkota Teknologi', sector: 'I', symbol: 'EMTK.JK' },
    // Kesehatan (F)
    { code: 'KLBF', name: 'Kalbe Farma', sector: 'F', symbol: 'KLBF.JK' },
    { code: 'SIDO', name: 'Sido Muncul', sector: 'F', symbol: 'SIDO.JK' },
    // Transportasi & Logistik (K, J)
    { code: 'EXCL', name: 'XL Axiata', sector: 'K', symbol: 'EXCL.JK' },
    { code: 'GIAA', name: 'Garuda Indonesia', sector: 'K', symbol: 'GIAA.JK' },
    { code: 'SMDR', name: 'Samudera Indonesia', sector: 'J', symbol: 'SMDR.JK' },
  ],
};
