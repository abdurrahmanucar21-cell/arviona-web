'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';

const groups=['İç Mekân Kapıları','Mutfak Sistemleri','Banyo Mobilyaları'];

export default function Page(){
 const [model,setModel]=useState('');
 const [summary,setSummary]=useState('');
 const [copied,setCopied]=useState(false);
 const [selectedGroups,setSelectedGroups]=useState([]);
 useEffect(()=>{setModel(new URLSearchParams(window.location.search).get('model')||'')},[]);
 function toggleGroup(group){setSelectedGroups(v=>v.includes(group)?v.filter(x=>x!==group):[...v,group])}
 function prepare(e){
  e.preventDefault();
  if(!selectedGroups.length)return;
  const f=new FormData(e.currentTarget);
  const text=`ARVIONA PROJE / TEKLİF TALEBİ\n\nAd Soyad: ${f.get('name')}\nFirma / Kurum: ${f.get('company')||'-'}\nTelefon: ${f.get('phone')}\nE-posta: ${f.get('email')}\nÜrün Grupları: ${selectedGroups.join(', ')}\nModel: ${f.get('model')||'-'}\nYaklaşık Adet: ${f.get('qty')||'-'}\nProje İli: ${f.get('city')||'-'}\n\nProje Detayı:\n${f.get('detail')||'-'}`;
  setSummary(text);setCopied(false);
 }
 async function copy(){try{await navigator.clipboard.writeText(summary);setCopied(true)}catch{setCopied(false)}}
 const mail=summary?`mailto:teklif@arvionahome.com?subject=${encodeURIComponent('ARVIONA Proje / Teklif Talebi')}&body=${encodeURIComponent(summary)}`:'#';
 return <main><section className="pageHero"><span className="eyebrow">PROJECT REQUEST</span><h1>Projeniz İçin Teklif Alın.</h1><p>Kapı, mutfak ve banyo projeleriniz için bir veya birden fazla ürün grubunu birlikte seçerek talep oluşturabilirsiniz.</p></section><section className="quote"><div><span className="eyebrow">PROJECT BRIEF</span><h2>İhtiyacınızı<br/>tanımlayın.</h2><p>Formu tamamladığınızda talebiniz kurumsal teklif e-postamıza göndermeye hazır hale gelir.</p><div className="notice"><strong>Kurumsal teklif kanalı:</strong><br/>teklif@arvionahome.com</div></div><div><form className="form" onSubmit={prepare}><div className="two"><input name="name" required placeholder="Ad Soyad"/><input name="company" placeholder="Firma / Kurum"/></div><div className="two"><input name="phone" required placeholder="Telefon"/><input name="email" type="email" required placeholder="E-posta"/></div><fieldset className="groupPicker"><legend>Ürün grupları <small>Birden fazla seçebilirsiniz</small></legend><div className="groupOptions">{groups.map(group=><label key={group} className={selectedGroups.includes(group)?'groupOption selected':'groupOption'}><input type="checkbox" checked={selectedGroups.includes(group)} onChange={()=>toggleGroup(group)}/><span>{group}</span></label>)}</div>{!selectedGroups.length&&<small className="groupHint">En az bir ürün grubu seçin.</small>}</fieldset><input name="model" value={model} onChange={e=>setModel(e.target.value)} placeholder="İlgilendiğiniz model / modeller (örn. AL-04)"/><div className="two"><input name="qty" placeholder="Yaklaşık adet"/><input name="city" placeholder="Proje ili"/></div><textarea name="detail" placeholder="Ölçü, proje türü, termin ve diğer detaylar..."></textarea><label className="check"><input type="checkbox" required/><span><Link href="/kvkk">KVKK Aydınlatma Metni</Link>'ni okudum; teklif talebimin yanıtlanması amacıyla iletişim bilgilerimin işlenmesini kabul ediyorum.</span></label><button type="submit" className="btn" disabled={!selectedGroups.length}>Talebi Hazırla →</button></form>{summary&&<div className="statusBox"><strong>Talebiniz hazır.</strong><pre>{summary}</pre><a className="btn" href={mail}>teklif@ adresine gönder →</a><button className="btn" type="button" onClick={copy}>{copied?'Kopyalandı ✓':'Özeti Kopyala'}</button></div>}</div></section></main>}
