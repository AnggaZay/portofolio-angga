import { LayoutList, MessageSquareText, BarChart3, CheckCircle2 } from 'lucide-react';

export const IPM_WORKFLOW = [
  { 
    id: "01",
    title: "Project Management", 
    desc: "Sentralisasi seluruh instruksi kerja via Monday.com untuk eliminasi miskomunikasi.", 
    icon: LayoutList
  },
  { 
    id: "02",
    title: "Effective Feedback", 
    desc: "Loop komunikasi real-time yang memangkas waktu rapat birokrasi yang tidak perlu.", 
    icon: MessageSquareText 
  },
  { 
    id: "03",
    title: "Data-Driven Audit", 
    desc: "Evaluasi performa bulanan berbasis data persentase keberhasilan setiap kampanye.", 
    icon: BarChart3 
  },
  { 
    id: "04",
    title: "Quality Standard", 
    desc: "Penerapan standar QC ketat untuk memastikan konsistensi brand identity organisasi.", 
    icon: CheckCircle2 
  },
];