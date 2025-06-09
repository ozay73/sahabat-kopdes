export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <header className="text-center py-10">
        <img
          src="/logo-jasa-antar-rumah.png"
          alt="Logo Sahabat Kopdes Merah Putih"
          className="mx-auto mb-4 w-24 h-24 object-contain rounded-full border-2 border-blue-600 shadow"
        />
        <h1 className="text-4xl font-bold text-blue-600">Sahabat Kopdes Merah Putih</h1>
        <p className="mt-2 text-lg">Melayani antar-jemput orang, anak, barang & bantuan kerja rumah</p>
        <p className="mt-1 text-sm text-gray-500 italic">Bermitra dengan Koperasi Desa Merah Putih</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Layanan Kami</h2>
          <ul className="space-y-2">
            <li>🚗 Antar jemput orang & anak</li>
            <li>📦 Antar barang</li>
            <li>🧹 Bersih-bersih rumah</li>
            <li>🛍️ Belanja harian</li>
            <li>🔧 Siap bantu berbagai urusan harian</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Formulir Pemesanan</h2>
          <form 
            className="space-y-4"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <input type="text" name="nama" placeholder="Nama Anda" className="w-full p-2 border rounded" required />
            <input type="text" name="lokasi" placeholder="Alamat / Lokasi Jemput" className="w-full p-2 border rounded" required />
            <input type="text" name="layanan" placeholder="Layanan yang diinginkan" className="w-full p-2 border rounded" required />
            <input type="datetime-local" name="jadwal" className="w-full p-2 border rounded" required />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Kirim</button>
          </form>
        </div>
      </section>

      <section className="text-center mt-12">
        <p>Hubungi kami langsung lewat WhatsApp:</p>
        <a
          href="https://wa.me/6281234567890"
          className="inline-block mt-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
          target="_blank"
        >
          Chat WhatsApp
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; 2025 Sahabat Kopdes Merah Putih. All rights reserved. <br />
        Bermitra dengan <strong>Koperasi Desa Merah Putih</strong>
      </footer>
    </main>
  );
}
