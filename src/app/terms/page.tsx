'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Gavel, Users, Target, Shield } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RA</span>
              </div>
              <span className="font-bold text-xl text-gray-900">CV REKA ARSI BANJARNEGARA</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gavel className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              CV REKA ARSI BANJARNEGARA - Keinsinyuran Dan Konsultasi Teknis YBDI
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Selamat datang di CV REKA ARSI BANJARNEGARA. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, 
              termasuk layanan Meta Ads, konsultasi teknis, dan keinsinyuran YBDI. Dengan mengakses atau menggunakan layanan kami, 
              Anda setuju untuk terikat oleh syarat dan ketentuan ini.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh menggunakan layanan kami.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Meta Ads Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Perencanaan dan strategi kampanye iklan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Manajemen budget iklan Facebook dan Instagram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Optimasi kampanye untuk hasil maksimal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Analisis dan reporting kinerja iklan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Konsultasi Teknis & Keinsinyuran</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Konsultasi teknis untuk berbagai proyek engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Desain dan perencanaan teknis YBDI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Analisis feasibility dan studi kelayakan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Supervisi dan manajemen proyek teknis</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Kewajiban Klien</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Akurat</h3>
                <p className="text-gray-600">Klien wajib memberikan informasi yang akurat, lengkap, dan terkini untuk keperluan layanan.</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Pembayaran Tepat Waktu</h3>
                <p className="text-gray-600">Klien harus melakukan pembayaran sesuai dengan jadwal dan ketentuan yang telah disepakati.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Kerjasama</h3>
                <p className="text-gray-600">Klien harus memberikan akses dan informasi yang diperlukan untuk kelancaran proyek.</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Kepatuhan Hukum</h3>
                <p className="text-gray-600">Klien bertanggung jawab untuk memastikan semua materi iklan mematuhi hukum yang berlaku.</p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ketentuan Pembayaran</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Struktur Pembayaran</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Uang muka: 30-50% dari total nilai proyek</li>
                    <li>• Pembayaran tahapan: Sesuai milestone</li>
                    <li>• Pelunasan: Sebelum penyerahan final</li>
                    <li>• Biaya tambahan: Perubahan scope proyek</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Metode Pembayaran</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Transfer Bank</li>
                    <li>• Virtual Account</li>
                    <li>• E-Wallet (tersedia)</li>
                    <li>• Kartu Kredit (untuk layanan tertentu)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800">
                      <strong>Perhatian:</strong> Keterlambatan pembayaran dapat menghentikan sementara layanan yang sedang berjalan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Hak Klien</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Klien memiliki hak penuh atas materi yang disediakan untuk iklan</li>
                  <li>• Hasil akhir proyek teknis menjadi milik klien setelah pelunasan</li>
                  <li>• Dokumentasi dan laporan dapat digunakan untuk keperluan internal</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Hak CV REKA ARSI BANJARNEGARA</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Metodologi, proses, dan strategi yang dikembangkan tetap milik kami</li>
                  <li>• Hak untuk menggunakan case study anonim untuk portofolio</li>
                  <li>• Kekayaan intelektual dari tools dan sistem internal</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                <h3 className="font-semibold text-lg text-gray-900">Penting Diperhatikan</h3>
              </div>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Hasil kampanye Meta Ads dipengaruhi oleh banyak faktor eksternal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Kami tidak menjamin hasil spesifik dari kampanye iklan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Tanggung jawab maksimal terbatas pada nilai kontrak</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengakhiran Kerjasama</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Pengakhiran oleh Klien</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pemberitahuan tertulis 30 hari sebelumnya</li>
                  <li>• Pembayaran untuk pekerjaan yang telah selesai</li>
                  <li>• Biaya pengakhiran sesuai kontrak</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Pengakhiran oleh Kami</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pelanggaran ketentuan oleh klien</li>
                  <li>• Kegagalan pembayaran</li>
                  <li>• Force majeure atau kondisi di luar kontrol</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Setiap sengketa yang timbul dari atau berkaitan dengan syarat dan ketentuan ini akan diselesaikan melalui:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Negosiasi</h4>
                  <p className="text-gray-600">Diskusi antara kedua belah pihak untuk mencapai kesepakatan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mediasi</h4>
                  <p className="text-gray-600">Melalui mediator profesional yang netral</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pengadilan</h4>
                  <p className="text-gray-600">Penyelesaian melalui pengadilan di wilayah hukum Banjarnegara</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">CV REKA ARSI BANJARNEGARA</h3>
                  <p className="text-blue-100">Keinsinyuran Dan Konsultasi Teknis YBDI</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Alamat:</p>
                    <p className="text-blue-100">TAPEN, Desa/Kelurahan Tapen, Kec. Wanadadi, Kab. Banjarnegara, Provinsi Jawa Tengah</p>
                  </div>
                  <div>
                    <p className="font-medium">Kontak:</p>
                    <p className="text-blue-100">Telepon: 085285703497</p>
                    <p className="text-blue-100">Email: legal@rekaarsibanjarnegara.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Agreement */}
          <section className="mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Persetujuan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dengan menggunakan layanan CV REKA ARSI BANJARNEGARA, Anda menyatakan bahwa telah membaca, 
                    memahami, dan menyetujui Syarat dan Ketentuan ini. Anda juga menyatakan bahwa Anda memiliki 
                    kewenangan untuk mengikatkan diri atau entitas yang Anda wakili dalam syarat dan ketentuan ini.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 CV REKA ARSI BANJARNEGARA. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 text-sm">
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}