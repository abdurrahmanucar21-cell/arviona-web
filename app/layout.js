import './style.css';
import Link from 'next/link';

export const metadata={
  title:{default:'ARVIONA | Kapı · Mutfak · Banyo',template:'%s | ARVIONA'},
  description:'ARVIONA; iç mekân kapıları, mutfak ve banyo koleksiyonlarıyla konut, villa, otel ve profesyonel projeler için tasarım odaklı çözümler sunar.',
  keywords:['ARVIONA','iç mekan kapısı','lake kapı','laminat kapı','mutfak','banyo mobilyası','proje kapıları'],
  robots:{index:true,follow:true},
  openGraph:{title:'ARVIONA | Kapı · Mutfak · Banyo',description:'Modern yaşam alanları ve profesyonel projeler için tasarım odaklı koleksiyonlar.',type:'website',locale:'tr_TR'},
  icons:{icon:'/favicon.ico'}
};

export default function Layout({children}){return <html lang="tr"><body><header className="top"><Link href="/" className="logo" aria-label="ARVIONA ana sayfa">ARVIONA<small>KAPI · MUTFAK · BANYO</small></Link><nav aria-label="Ana menü"><Link href="/urunler">Kapılar</Link><Link href="/mutfak">Mutfak</Link><Link href="/banyo">Banyo</Link><Link href="/projeler">Projeler</Link><Link href="/kurumsal">Kurumsal</Link><Link href="/iletisim">İletişim</Link></nav><Link className="topCta" href="/teklif">Teklif Al →</Link></header>{children}<footer><div className="logo">ARVIONA<small>KAPI · MUTFAK · BANYO</small></div><p>Modern yaşam alanları ve profesyonel projeler için tasarım odaklı çözümler.</p><div className="footerLinks"><Link href="/profesyoneller">Profesyoneller</Link><span> · </span><Link href="/kataloglar">Kataloglar</Link><span> · </span><Link href="/iletisim">İletişim</Link><small className="copyright">© 2026 ARVIONA</small></div></footer></body></html>}