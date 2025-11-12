"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762964976/th-slwi-47-1_afpm6g.avif"
                alt="Sapphire Townhouse Slawi"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Town House Slawi</h2>
              <p className="about-description">
                Berada di Jl. DR. Soetomo, Kalisapu, Sapphire Town House Slawi menawarkan pengalaman tinggal di perumahan Slawi yang benar-benar menyatu dengan pusat kotanya. Letaknya dekat Alun-alun Hanggawana, sekolah unggulan, pusat perbelanjaan, dan akses transportasi, sehingga aktivitas harian terasa lebih mudah. 
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Tegal</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">10000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">5+</div>
              <div className="about-stat-label">CCTV Kawasan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Town House Slawi</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_40/v1761458310/01_2_-_Photo_B_mumjol.avif"
                  alt="Sapphire Town House Slawi"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di Jl. DR. Soetomo, Kalisapu, Sapphire Town House Slawi menawarkan pengalaman tinggal di perumahan Slawi yang benar-benar menyatu dengan pusat kotanya. Letaknya dekat Alun-alun Hanggawana, sekolah unggulan, pusat perbelanjaan, dan akses transportasi, sehingga aktivitas harian terasa lebih mudah. Dua tahap sebelumnya yang sudah terjual habis juga menunjukkan tingginya kepercayaan pembeli terhadap kawasan ini. Dirancang dengan lingkungan yang rapi dan sistem keamanan modern, proyek ini menghadirkan kenyamanan, prestise, dan nilai hunian yang terus dicari banyak keluarga di Kabupaten Tegal.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>5 menit ke fasilitas kesehatan</li>
                  <li>3 menit ke fasilitas pendidikan</li>
                  <li>10 menit ke fasilitas perbelanjaan</li>
                  <li>1 menit ke pusat Slawi</li>
                  <li>8 menit ke fasilitas transportasi umum</li>
                  <li>Berada di jalan utama Slawi–Tegal, akses mudah ke Brebes dan Tegal</li>
                  <li>Lingkungan strategis dan terus berkembang</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti dan one gate system</li>
                  <li>Taman bermain dan area rekreasi keluarga</li>
                  <li>Ruang terbuka hijau yang luas</li>
                  <li>Fasilitas pendukung yang lengkap di dalam area perumahan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
