# How to Import Your Google Ads Campaign

There are **2 ways** to import this campaign:

---

## Method 1: Google Ads Editor (RECOMMENDED - Fastest)

### Step 1: Download Google Ads Editor
1. Go to: https://ads.google.com/home/tools/ads-editor/
2. Download and install for your OS

### Step 2: Open Your Account
1. Launch Google Ads Editor
2. Click "Add" → "Add account"
3. Sign in with your Google Ads account
4. Select your account (AW-17637493757)
5. Click "Download" to sync

### Step 3: Import the CSV
1. Click **"Import"** from the top menu
2. Select **"Import from file"**
3. Choose `google-ads-campaign.csv`
4. Click **"Import"**
5. Review the import preview
6. Click **"Process"**

### Step 4: Update Your Domain
**IMPORTANT:** Before posting, you MUST update all Final URLs:
1. In Google Ads Editor, go to **"Ads & extensions"** → **"Ads"**
2. Select all ads (Ctrl+A / Cmd+A)
3. Click **"Edit" → "Change final URLs"**
4. Find and replace: `yourdomain.nl` → `your-actual-domain.nl`
5. Click **"OK"**

### Step 5: Add Extensions
The CSV doesn't include extensions, add them manually:

**Call Extension:**
1. Go to "Ads & extensions" → "Call extensions"
2. Click the blue "+" button
3. Phone: +31850870276
4. Select your campaign
5. Save

**Sitelinks:**
1. Go to "Ads & extensions" → "Sitelink extensions"
2. Click the blue "+" button
3. Add each sitelink from GOOGLE-ADS-CAMPAIGN-SETUP.md
4. Save

**Callouts:**
1. Go to "Ads & extensions" → "Callout extensions"
2. Click the blue "+" button
3. Add callouts: "Gratis Advies", "Geen Wachtrij", etc.
4. Save

### Step 6: Post Changes
1. Click **"Post"** button (top right)
2. Review changes
3. Click **"Post"** to upload to Google Ads
4. Wait for sync (1-2 minutes)

✅ **Done!** Your campaign is live.

---

## Method 2: Manual Setup in Google Ads (Slower but Simpler)

### Step 1: Create Campaign
1. Go to https://ads.google.com
2. Click **"+ New Campaign"**
3. Goal: **Leads**
4. Campaign type: **Search**
5. Click **"Continue"**

### Step 2: Campaign Settings
```
Campaign name: Branded Keywords - Energy
Networks: Search (uncheck Display & Search Partners)
Locations: Netherlands
Languages: Dutch
Budget: €20-30 per day
Bidding: Manual CPC
Max CPC: €2.00
```
Click **"Save and Continue"**

### Step 3: Create Ad Groups

**Ad Group 1: Eneco**
1. Ad group name: `Eneco`
2. Add keywords:
   - "eneco bellen"
   - "eneco klantenservice"
   - "bellen met eneco"
   - "eneco klantenservice bellen"
   - "hulp met eneco"
3. Set to **Phrase match**
4. Default bid: €2.00

**Create the ad:**
- Follow ad copy from GOOGLE-ADS-CAMPAIGN-SETUP.md
- Final URL: `https://your-actual-domain.nl/klantenservice`
- Path 1: `klantenservice`
- Path 2: `eneco`

Click **"Save and Continue"**

### Step 4: Repeat for Other Ad Groups
- Repeat Step 3 for: Essent, Vattenfall, Generic Energy
- Use respective keywords and ad copy from the setup guide

### Step 5: Add Extensions
1. Go to **"Ads & extensions"** → **"Extensions"**
2. Click **"+"** button
3. Add Call extension, Sitelinks, Callouts (see setup guide)

### Step 6: Add Negative Keywords
1. Go to **"Keywords"** → **"Negative keywords"**
2. Click **"+"**
3. Add campaign-level negatives:
   - -storing
   - -storingsdienst
   - -noodlijn
   - etc. (see full list in setup guide)

✅ **Done!** Campaign is live.

---

## 🚨 CRITICAL: Before Launching

### ✅ Pre-Launch Checklist

1. **Domain Updated?**
   - [ ] All Final URLs use YOUR .nl domain
   - [ ] Not "yourdomain.nl" placeholder

2. **Conversion Tracking Working?**
   - [ ] Test by clicking phone number on landing page
   - [ ] Check if conversion appears in Google Ads

3. **Extensions Added?**
   - [ ] Call extension (085 087 0276)
   - [ ] Sitelinks (at least 4)
   - [ ] Callouts (at least 4)
   - [ ] Structured snippets

4. **Negative Keywords Added?**
   - [ ] Campaign-level negatives added
   - [ ] At least 10 negatives

5. **Budget Set?**
   - [ ] Daily budget €20-30
   - [ ] Not unlimited

6. **Location Correct?**
   - [ ] Netherlands only
   - [ ] Not worldwide

7. **Network Settings?**
   - [ ] Search Network only
   - [ ] Display Network OFF
   - [ ] Search Partners OFF

---

## 📊 After Launch: First 48 Hours

### Monitor These Daily:

1. **Check for Policy Issues**
   - Go to "Ads & extensions" → Look for red flags
   - If disapproved, review reason immediately

2. **Quality Scores**
   - Go to "Keywords" → Add "Quality Score" column
   - Target: 7-10 (5-6 is acceptable initially)

3. **Search Terms**
   - Go to "Keywords" → "Search terms"
   - Look for irrelevant searches
   - Add as negative keywords

4. **CTR**
   - Should be 8-15% for branded keywords
   - If lower, test new ad copy

5. **Conversions**
   - Are phone clicks tracking?
   - Check conversion report daily

### Week 1 Optimizations:
- Pause keywords with 0 conversions and high cost
- Increase bids on converting keywords by 20%
- Add new negative keywords
- Test new ad variations

---

## 🆘 Troubleshooting

### "Ads Disapproved - Malicious Software"
**Solution:** See main campaign notes about domain trust issues

### "Low Quality Score (1-3)"
**Solution:**
- Check keyword-ad-landing page relevance
- Improve ad headlines to match keywords better
- Make sure domain loads fast and is mobile-friendly

### "No Impressions"
**Solution:**
- Check if campaign is paused
- Check if budget is set
- Increase max CPC bid by 50%
- Check location targeting

### "High CPC (>€3)"
**Solution:**
- Competition is high for exact brand terms
- Use phrase match instead of exact match
- Add more specific long-tail keywords
- Check Quality Score and improve

---

## 📞 Need Help?

If stuck during import:
1. Check Google Ads Editor help: https://support.google.com/google-ads/editor
2. Google Ads support: https://support.google.com/google-ads

---

**Good luck with your campaign! 🚀**

