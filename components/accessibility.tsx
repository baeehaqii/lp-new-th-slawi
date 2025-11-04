import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "3 menit dari SMPIT Luqman Al-Hakim",
        "4 menit dari SMA N 2 Slawi",
        "10 menit dari MAN 1 Tegal",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "5 menit dari Rumah Sakit Dr. Soeselo",
        "9 menit Rumah Sakit Harapan Sehat Slawi",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "10 menit Toserba Yogya Slawi",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "1 menit dari Alun-alun Hanggawana Slawi",
        "6 menit dari Polres Tegal",
        "8 menit dari Stasiun Slawi",
        "8 menit dari Terminal Dukuhsalam Slawi",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
