const base = import.meta.env.BASE_URL;

/* One place for the links the nav, the contact section and the footer all show. */
export const EMAIL = 'Judealmaden2045@gmail.com';
export const GITHUB_URL = 'https://github.com/JudeAlmaden';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/justine-jude-almaden-09b0a438b/';

/*
  Résumé. Put the PDF in public/ and set RESUME_FILE to its name — every Résumé link (nav, contact,
  footer) appears from that one change. It stays empty for now so the site never links to a 404.
*/
const RESUME_FILE = '';
export const RESUME_URL = RESUME_FILE ? `${base}${RESUME_FILE}` : '';
export const RESUME_NAME = 'Jude-Almaden-Resume.pdf';
