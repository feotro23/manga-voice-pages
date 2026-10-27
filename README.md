# Manga Voice sample pages

Page images used as sample data by **Manga Voice**, a Power Apps course project by Drew Page (Minneapolis College). The app links to these files; nothing here is sold.

## Give My Regards to Black Jack, by SHUHO SATO

- `black-jack/vol01/`: volume 1, pages 3 to 58 (episode 1, "Night of the Intern"), English edition, rendered as 1200 px tall JPEGs.
- Source: the free data published by Sato Manga Works Ltd. at <https://densho810.com/free/>. The workflow in `.github/workflows/extract-black-jack.yml` downloads it from that page and renders the pages, so nothing is copied from printed books.
- Used under the "Give My Regards to Black Jack" Terms of Use (free secondary use, effective 15 September 2012, revised 31 August 2017).
- Title: Give My Regards to Black Jack. Author: SHUHO SATO.

## Ubunchu!, by Hiroshi Seo

- `ubunchu/ch12/`: chapter 12, "Rule of a sister distro! Mint-chan", English edition, pages 1 to 16, resized to 1200 px tall JPEGs.
- Original manga: Hiroshi Seo ([aerialline.com](https://aerialline.com)), first printed in Ubuntu Magazine Japan, published by ASCII Media Works Inc., licensed [CC BY-NC-SA 2.1 JP](https://creativecommons.org/licenses/by-nc-sa/2.1/jp/deed.en).
- English translation: Tarek Saier ([sirtetris.com](https://sirtetris.com)). Cleaning and typesetting: PublicDesert ([github.com/publicdesert/ubunchu_english](https://github.com/publicdesert/ubunchu_english)). Licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
- The resized copies here are shared under CC BY-NC-SA 4.0.

## Pepper&Carrot, by David Revoy

Not stored here. The app loads its pages straight from <https://www.peppercarrot.com> ("Pepper&Carrot by David Revoy, www.peppercarrot.com", [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).

## Sample data (`data/seed.json`)

The rows the app's Excel workbook is loaded with: series, chapters, pages, characters, voice lines and sample reader activity. An Office Script in the workbook reads this file and writes the rows into its tables.

- Pepper&Carrot lines follow the official English transcripts (CC BY 4.0, David Revoy).
- Ubunchu! lines follow the English edition by Tarek Saier and PublicDesert, lightly copy-edited (CC BY-NC-SA 4.0).
- Give My Regards to Black Jack lines are an adaptation written for this project, not the printed English text, under the free secondary use terms for SHUHO SATO's work.
- Sample accounts and their emails are made up (example.com). The three credit accounts are not run by the artists.
