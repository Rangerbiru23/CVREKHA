'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'

export default function PrivacyPolicy() {
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
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
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
              Selamat datang di CV REKA ARSI BANJARNEGARA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan 
              layanan Meta Ads dan konsultasi teknis kami.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Informasi Pribadi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Nama lengkap dan informasi kontak (email, telepon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Informasi perusahaan dan jabatan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Alamat fisik dan alamat penagihan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Informasi pembayaran dan faktur</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Informasi Teknis</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Alamat IP dan lokasi geografis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Jenis perangkat dan browser yang digunakan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Data penggunaan website dan Meta Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Cookie dan teknologi pelacakan lainnya</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Bagaimana Kami Menggunakan Informasi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Untuk Layanan</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Menyediakan layanan Meta Ads</li>
                  <li>• Konsultasi teknis dan keinsinyuran</li>
                  <li>• Manajemen kampanye digital</li>
                  <li>• Analisis dan reporting</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Untuk Komunikasi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mengirim update layanan</li>
                  <li>• Newsletter dan informasi produk</li>
                  <li>• Respon pertanyaan dan dukungan</li>
                  <li>• Notifikasi penting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Perlindungan Data</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                CV REKA ARSI BANJARNEGARA berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</div>
                  <span>Enkripsi data selama transmisi dan penyimpanan</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</div>
                  <span>Akses terbatas hanya untuk staf yang berwenang</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</div>
                  <span>Keamanan fisik dan digital server data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">4</div>
                  <span>Audit keamanan berkala</span>
                </li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Hak Anda Sebagai Pengguna</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Akses</h3>
                <p className="text-gray-600">Anda berhak mengakses dan mengetahui data pribadi yang kami simpan tentang Anda.</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Koreksi</h3>
                <p className="text-gray-600">Anda dapat memperbarui atau memperbaiki data pribadi yang tidak akurat.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Penghapusan</h3>
                <p className="text-gray-600">Anda dapat meminta penghapusan data pribadi Anda dari sistem kami.</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-2">Hak Pembatasan</h3>
                <p className="text-gray-600">Anda dapat membatasi pemrosesan data pribadi Anda dalam kondisi tertentu.</p>
              </div>
            </div>
          </section>

          {/* Third Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Pihak Ketiga</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kami menggunakan layanan pihak ketiga untuk mendukung operasi kami, termasuk:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Meta Platforms:</strong> Untuk layanan iklan Facebook dan Instagram</li>
                <li>• <strong>LinkedIn:</strong> Untuk iklan B2B dan profesional</li>
                <li>• <strong>Google Analytics:</strong> Untuk analisis website</li>
                <li>• <strong>Payment Gateway:</strong> Untuk pemrosesan pembayaran</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data pribadi Anda, 
              silakan hubungi kami:
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
                    <p className="text-blue-100">Email: privacy@rekaarsibanjarnegara.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Pembaruan Kebijakan</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami 
              atau perubahan hukum yang berlaku. Versi terbaru akan selalu tersedia di website kami.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 CV REKA ARSI BANJARNEGARA. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link href="/terms" className="text-blue-600 hover:text-blue-800 text-sm">
                Terms & Conditions
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