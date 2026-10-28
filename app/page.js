import Link from "next/link";
import Image from "next/image";

const collections=[
  ["/urunler","/door-category.webp","İÇ MEKÂN KAPILARI","Lake ve laminat kapı koleksiyonları; proje ölçülerine ve dekor seçimlerine göre yapılandırılır."],
  ["/mutfak","/kitchen-category.webp","MUTFAK SİSTEMLERİ","Modern, minimal ve proje tipi mutfak çözümleri; kapak ve gövde dekorlarıyla kişiselleştirilir."],
  ["/banyo","/bath-category.webp","BANYO DOLAPLARI","Kompakt ve proje tipi banyolar için modern depolama ve dolap çözümleri."]
];

const tools=[
  ["/urunler","/door-category.webp","Kapınızı Tasarlayın","Kapı kanadı, kasa ve pervaz dekorlarını birlikte değerlendirin."],
  ["/mutfak#tasarla","/kitchen-category.webp","Mutfağınızı Tasarlayın","Mutfak modelini seçin; kapak ve gövde dekorlarını karşılaştırın."],
  ["/banyo#tasarla","/bath-category.webp","Banyo Dolabınızı Tasarlayın","Banyo dolabı ön yüzü ve gövde kombinasyonunuzu oluşturun."]
];

export default function Home(){return <main className="zHome approvedHome">
  <section className="zHero approvedHero">
    <Image src="/hero.webp" alt="ARVIONA kapı, mutfak ve banyo sistemleri" fill priority quality={100} sizes="100vw"/>
    <div className="zHeroShade"/>
    <div className="zHeroCopy"><span>ARVIONA · KITCHEN · DOOR SYSTEMS · INTERIOR</span><h1>Kapı, Mutfak ve Banyo İçin <em>Modern Çözümler</em></h1><p>İç mekân kapıları, mutfak sistemleri ve banyo dolaplarında tasarım, üretim ve proje çözümleri.</p><div className="zHeroActions"><Link href="#koleksiyonlar">Koleksiyonları Keşfet →</Link><Link className="ghost" href="#tasarim-araci">Tasarım Aracı</Link></div></div>
  </section>

  <section className="approvedCategories" id="koleksiyonlar">{collections.map(([href,img,title,text])=><Link href={href} className="approvedCategory" key={href}><div className="approvedCategoryImage"><Image src={img} alt={`ARVIONA ${title}`} fill quality={100} sizes="(max-width:900px) 100vw,33vw"/></div><div className="approvedCategoryCopy"><span>ARVIONA</span><h2>{title}</h2><p>{text}</p><b>Keşfet →</b></div></Link>)}</section>

  <section className="approvedPartners"><span>PELİLAM</span><span>ASD LAMİNAT</span><span>ÇAMSAN ENTEGRE</span><span>KASTAMONU ENTEGRE</span><span>YILDIZ ENTEGRE</span><span>GENTAŞ</span></section>

  <section className="approvedDesign"><div className="approvedDesignCopy"><span>PROJE ÇÖZÜMLERİ</span><h2>Üretimden<br/>Mekâna</h2><p>Konut, villa, otel ve toplu yapı projelerinde kapı, mutfak ve banyo dolabı ihtiyaçlarını aynı tasarım dili altında çözüyoruz.</p><Link href="/projeler">Projeleri İncele →</Link></div><div className="approvedDesignVisual"><Image src="/project-concept.webp" alt="ARVIONA proje uygulaması" fill quality={100} sizes="(max-width:900px) 100vw,65vw"/></div></section>

  <section className="approvedTools" id="tasarim-araci"><div className="approvedToolsIntro"><span>TASARIM ARACI</span><h2>Ürününüzü Gerçek Mekânda Kurgulayın</h2><p>Kapı, mutfak ve banyo dolabı için model ve dekor alternatiflerini karşılaştırın.</p></div>{tools.map(([href,img,title,text])=><Link href={href} className="toolVisualCard" key={href}><div className="toolVisual"><Image src={img} alt={title} fill quality={95} sizes="(max-width:900px) 100vw,25vw"/></div><div><h3>{title}</h3><p>{text}</p><b>Tasarlamaya Başla →</b></div></Link>)}</section>

  <section className="approvedTrust"><div><b>01</b><span>İç Mekân<br/>Kapıları</span></div><div><b>02</b><span>Mutfak<br/>Sistemleri</span></div><div><b>03</b><span>Banyo<br/>Dolapları</span></div><div><b>04</b><span>Proje Odaklı<br/>Üretim</span></div></section>
</main>}
