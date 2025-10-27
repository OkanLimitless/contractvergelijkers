# Google Ads Campaign - Quick Reference

## 🎯 Campaign Answer: **Multiple Ad Groups (One Per Brand)**

### Why Multiple Ad Groups:
✅ Better Quality Score (8-10 vs 4-6)  
✅ Higher CTR (+30-50% improvement)  
✅ Better conversion tracking  
✅ Easier to optimize per brand  
✅ Dynamic keyword insertion possible  

---

## 📁 Files Created

### 1. `google-ads-campaign.csv`
Ready-to-import campaign file for Google Ads Editor

### 2. `GOOGLE-ADS-CAMPAIGN-SETUP.md`
Complete campaign documentation with:
- All keywords per ad group
- All ad copy (headlines + descriptions)
- Extensions (callouts, sitelinks, call)
- Negative keywords
- Campaign settings

### 3. `IMPORT-INSTRUCTIONS.md`
Step-by-step guide to import via:
- Method 1: Google Ads Editor (fast)
- Method 2: Manual setup (slow)

### 4. This file (`CAMPAIGN-SUMMARY.md`)
Quick reference and cheat sheet

---

## 🚀 Quick Start (5 Minutes)

### Option A: Google Ads Editor (Recommended)
```
1. Download Google Ads Editor
2. Open your account (AW-17637493757)
3. Import → google-ads-campaign.csv
4. Find/Replace: "yourdomain.nl" → "your-actual-domain.nl"
5. Add extensions manually (call, sitelinks, callouts)
6. Post → Done!
```

### Option B: Manual Setup
```
1. Go to ads.google.com
2. New Campaign → Search
3. Follow GOOGLE-ADS-CAMPAIGN-SETUP.md
4. Create 4 ad groups (Eneco, Essent, Vattenfall, Generic)
5. Copy/paste ad copy from setup doc
6. Add extensions
7. Launch!
```

---

## 📊 Campaign Structure

```
Campaign: Branded Keywords - Energy (€20-30/day)
│
├── Ad Group: Eneco
│   ├── Keywords: "eneco bellen", "eneco klantenservice" (€2.00)
│   └── Ads: 2 variations (Eneco-specific)
│
├── Ad Group: Essent  
│   ├── Keywords: "essent bellen", "essent klantenservice" (€2.00)
│   └── Ads: 2 variations (Essent-specific)
│
├── Ad Group: Vattenfall
│   ├── Keywords: "vattenfall bellen", "vattenfall klantenservice" (€2.00)
│   └── Ads: 2 variations (Vattenfall-specific)
│
└── Ad Group: Generic Energy
    ├── Keywords: "energie klantenservice", etc. (€1.80)
    └── Ads: 2 variations (Generic)
```

---

## 🎯 Ad Copy Formula (Compliant)

### Pattern That Works:
```
H1: [YOUR BRAND] + Service Type
    Example: "AdviesNeutraal Service"
    
H2: [THEIR BRAND] + Action
    Example: "Eneco Vragen? Bel Direct"
    
H3: Possessive + Service
    Example: "Onze Klantenservice Helpt"

D1: "Onze/Our" + Service + Brand context + Benefit
    Example: "Onze klantenservice voor Eneco-vragen. Advies of doorverwijzing."
    
D2: Value prop + Trust signal + Hours
    Example: "Hulp nodig? Onze service helpt direct. Ma-vr 8-20u bereikbaar."
```

### Magic Words:
- ✅ **"Onze"** (Our) - shows ownership
- ✅ **"AdviesNeutraal"** - your brand visible
- ✅ **"voor [Brand]-vragen"** - FOR their questions
- ✅ **"of verwijst door"** - or refers to official
- ✅ **"Onafhankelijke"** - independent

### Avoid:
- ❌ "[Brand] Klantenservice" alone (without "Onze" or your brand)
- ❌ Pretending to BE them
- ❌ Using their exact branding/logos

---

## 📞 Extensions (Add Manually)

### Call Extension:
```
Phone: +31850870276
Mobile: Preferred
```

### Sitelinks (Add 4):
```
1. Over Ons → /over-ons
2. Werkwijze → /werkwijze  
3. Veelgestelde Vragen → /veelgestelde-vragen
4. Contact → /contact
```

### Callouts (Add 6-8):
```
- Gratis Advies
- Geen Wachtrij
- Direct Bereikbaar
- Onafhankelijk
- Ma-Vr 8-20u
- Ook Weekend
```

---

## 🚫 Negative Keywords (Add These)

```
Campaign Level (add to all):
-storing
-storingsdienst
-noodlijn
-telefoonnummer
-nummer
-adres
-openingstijden
-review
-klacht
```

---

## ⚡ Critical Settings

```
✅ Network: Search ONLY (no Display, no Partners)
✅ Location: Netherlands
✅ Language: Dutch
✅ Budget: €20-30/day
✅ Bidding: Manual CPC max €2.00
✅ Device: Mobile +20% bid adjustment
✅ Ad rotation: Optimize
```

---

## 🎯 Success Metrics

### Week 1 Targets:
- **CTR**: 8-15% (branded keywords)
- **Quality Score**: 7-10
- **Cost per Click**: €1.50-2.00
- **Impressions**: 500-1000/day
- **Clicks**: 50-150/day

### Week 2+ Targets:
- **Conversion Rate**: 15-30%
- **Cost per Lead**: €5-15
- **Phone Calls**: 5-15/day

---

## 🚨 Before Launch Checklist

- [ ] Domain updated in ALL Final URLs (not "yourdomain.nl")
- [ ] Conversion tracking tested and working
- [ ] Call extension added with correct number
- [ ] At least 4 sitelinks added
- [ ] At least 6 callouts added
- [ ] Negative keywords added (min. 10)
- [ ] Budget set to €20-30/day
- [ ] Location set to Netherlands ONLY
- [ ] Network = Search only (Display OFF)
- [ ] Ad copy reviewed for compliance

---

## 📊 Monitoring (First 48 Hours)

### Check Daily:
1. ✅ Policy status (any disapprovals?)
2. ✅ Quality Scores (7+ is good)
3. ✅ Search terms (add negatives)
4. ✅ CTR (8-15% target)
5. ✅ Conversions tracking correctly

### If Disapproved:
- Don't panic
- Read disapproval reason carefully
- Usually: domain trust or ad copy issue
- Appeal or adjust ads
- See IMPORT-INSTRUCTIONS.md troubleshooting

---

## 🎯 Optimization (After Week 1)

### Pause:
- Keywords with 0 conversions + €10+ spent
- Keywords with CTR < 3%
- Irrelevant search terms

### Increase Bids (+20%):
- Keywords with conversions
- Keywords with Quality Score 8-10
- Keywords with CTR > 15%

### Add:
- New negative keywords from search terms
- New ad variations testing different headlines
- More specific long-tail keywords that converted

---

## 💡 Pro Tips

1. **Start Small**: €20/day first week, scale if profitable
2. **Monitor Closely**: First 3 days are critical
3. **Quality Score**: If below 7, improve ad relevance
4. **Search Terms**: Gold mine for negatives and new keywords
5. **Mobile First**: Your audience is mostly mobile
6. **Test Ads**: Always have 2-3 variations running
7. **Extensions**: Boost CTR by 10-15%

---

## 🆘 Common Issues & Solutions

### "No Impressions"
- Budget too low or campaign paused
- Bids too low (increase to €2.50 temporarily)
- Location targeting wrong

### "High CPC (>€3)"
- Use phrase match instead of exact
- Improve Quality Score
- Add more specific keywords

### "Low CTR (<5%)"
- Ad copy not relevant to keyword
- Headlines not compelling
- Add more extensions

### "Ads Disapproved"
- Domain trust issue → use .nl domain
- Ad copy → add more "Onze", "Onafhankelijk"
- See main troubleshooting guide

---

## 📞 Final URLs to Use

```
Primary: https://your-actual-domain.nl/klantenservice
Backup: https://your-actual-domain.nl/energie-advies

Make sure HTTPS works and page loads fast!
```

---

## ✅ You're Ready!

1. **Import the campaign** (5-10 minutes)
2. **Update domain** in all URLs
3. **Add extensions**
4. **Launch**
5. **Monitor daily** for first week

**Good luck! Your campaign is ready to go. 🚀**

---

**Questions?** Re-read:
- GOOGLE-ADS-CAMPAIGN-SETUP.md (detailed guide)
- IMPORT-INSTRUCTIONS.md (step-by-step)

