'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  Cpu,
  Building,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Pesan Terkirim!",
          description: "Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.",
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast({
          title: "Error",
          description: result.error || 'Terjadi kesalahan. Silakan coba lagi.',
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error Server",
        description: 'Terjadi kesalahan server. Silakan coba lagi.',
        variant: "destructive",
      })
    }
  }

  const services = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Meta Ads Strategy",
      description: "Strategi iklan Meta yang terukur dan efektif untuk bisnis teknikal dan engineering"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Performance Optimization",
      description: "Optimasi kampanye untuk hasil maksimal dengan ROI terbaik"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Audience Targeting",
      description: "Target audiens yang presisi untuk industri keinsinyuran dan konsultasi teknis"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Analytics & Reporting",
      description: "Analisis mendalam dan reporting komprehensif untuk keputusan bisnis"
    }
  ]

  const technicalServices = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Konsultasi Teknis",
      description: "Solusi teknikal untuk berbagai kebutuhan engineering"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Keinsinyuran",
      description: "Jasa engineering dan desain teknis yang profesional"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "YBDI Consulting",
      description: "Konsultasi khusus untuk proyek YBDI Anda"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🚀 Meta Ads Specialist for Technical Industry
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                CV REKA ARSI BANJARNEGARA
                <span className="block text-2xl md:text-3xl text-blue-600 mt-2">
                  Keinsinyuran & Konsultasi Teknis YBDI
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Solusi terintegrasi Meta Ads dan konsultasi teknis untuk mengakselerasi pertumbuhan bisnis engineering Anda. 
                Kami menggabungkan keahlian teknikal dengan strategi digital marketing yang terbukti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Lihat Portfolio
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Klien Puas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Facebook className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Facebook Ads</div>
                      <div className="text-sm text-gray-600">Targeting presisi</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Instagram Ads</div>
                      <div className="text-sm text-gray-600">Visual yang menarik</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn Ads</div>
                      <div className="text-sm text-gray-600">B2B Professional</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Layanan Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meta Ads & Konsultasi Teknis Terpadu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan solusi lengkap dari strategi digital marketing hingga konsultasi teknis untuk industri engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Konsultasi Teknis YBDI
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Selain layanan Meta Ads, kami juga menyediakan konsultasi teknis khusus untuk kebutuhan 
                  engineering dan proyek YBDI Anda dengan standar profesional tertinggi.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Pelajari Lebih Lanjut
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalServices.map((tech, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      {tech.icon}
                      <h4 className="font-semibold">{tech.title}</h4>
                    </div>
                    <p className="text-sm text-blue-100">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Tentang Kami</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">CV REKA ARSI BANJARNEGARA</span>?
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sebagai perusahaan yang berfokus pada keinsinyuran dan konsultasi teknis YBDI, 
                  kami memahami tantangan unik dalam industri teknikal dan engineering.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Kami menggabungkan keahlian teknis mendalam dengan pemahaman mendalam tentang 
                  Meta Ads untuk memberikan solusi yang benar-benar efektif untuk bisnis Anda.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Target Presisi</h4>
                    <p className="text-sm text-gray-600">Audience yang tepat untuk industri teknikal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ROI Terbaik</h4>
                    <p className="text-sm text-gray-600">Hasil maksimal dengan investasi optimal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Cpu className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teknis Expert</h4>
                    <p className="text-sm text-gray-600">Pemahaman mendalam industri engineering</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Driven</h4>
                    <p className="text-sm text-gray-600">Keputusan berdasarkan analisis data</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Informasi Perusahaan</h3>
                  <p className="text-blue-100">Terpercaya sejak 2014</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Nama Perusahaan</div>
                      <div className="text-gray-600">CV REKA ARSI BANJARNEGARA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Alamat</div>
                      <div className="text-gray-600">TAPEN, Desa/Kelurahan Tapen, Kec. Wanadadi, Kab. Banjarnegara, Provinsi Jawa Tengah</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Telepon</div>
                      <div className="text-gray-600">085285703497</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@rekaarsibanjarnegara.com</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Hubungi Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Siap Mengakselerasi Bisnis Anda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Konsultasikan kebutuhan Meta Ads dan konsultasi teknis Anda dengan tim profesional kami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Kami akan merespons pertanyaan Anda dalam 24 jam
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Jelaskan kebutuhan Anda..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Kirim Pesan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8 border-0 shadow-lg">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
                </CardHeader>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Telepon</div>
                      <div className="text-gray-600">085285703497</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@rekaarsibanjarnegara.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Alamat</div>
                      <div className="text-gray-600">
                        TAPEN, Desa/Kelurahan Tapen, Kec. Wanadadi, Kab. Banjarnegara, Provinsi Jawa Tengah
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-white">Jam Operasional</CardTitle>
                </CardHeader>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RA</span>
                </div>
                <span className="font-bold text-xl">CV REKA ARSI BANJARNEGARA</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Solusi terintegrasi Meta Ads dan konsultasi teknis untuk industri engineering. 
                Keinsinyuran dan Konsultasi Teknis YBDI yang profesional dan terpercaya.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Meta Ads Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Teknis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Keinsinyuran YBDI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV REKA ARSI BANJARNEGARA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}