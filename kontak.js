export default function KontakKami() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Kontak Kami</h1>
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <p>📞 WhatsApp: <a href="https://wa.me/6281234567890" className="text-green-600 underline">+62 812-3456-7890</a></p>
        <p>🏠 Alamat: Jl. Raya Desa No. 10, Kec. Contoh, Kab. Nusantara</p>
        <p>✉️ Email: <a href="mailto:kontak@sahabatkopdes.id" className="text-blue-600 underline">kontak@sahabatkopdes.id</a></p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-md shadow"
        ></iframe>
      </div>
    </main>
  );
}
