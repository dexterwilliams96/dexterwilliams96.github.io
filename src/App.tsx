import { useState, useRef } from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";

/**
 * ---------- CONTENT CONFIG ----------
 */

const profile = {
  name: "Dexter Williams",
  title: "Information Science PhD Student | UW-Madison",
  bio: "I am a second-year information science PhD student at the University of Wisconsin-Madison, advised by Professor Jodi Schneider. My research focuses on argument mining and computational argumentation, I am particularly interested in the role of emotion on argument quality and persuasion.",
  profileImage: "/profile.jpg",
};

/** Name used for bolding in author lists */
const AUTHOR_NAME = "Dexter Williams";

const links = [
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=u_P89YUAAAAJ",
    icon: <SchoolIcon fontSize="small" />,
  },
  {
    label: "GitHub",
    url: "https://github.com/dexterwilliams96",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dexter-williams-1a84b21b1/",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "UW-Madison Profile",
    url: "https://ischool.wisc.edu/staff/williams-dexter/",
    icon: <LanguageIcon fontSize="small" />,
  },
];

const cv = {
  label: "Download CV",
  file: "/cv.pdf",
};

const researchInterests = [
  "Argument Mining",
  "Computational Argumentation",
  "Emotion",
  "AI and Law",
];

//const news = [
  //{ date: "2024", text: "New collaboration started with external research group." },
//];

const teaching = [
  "Formal logic and discrete mathematics (University of Illinois Urbana-Champaign, Fall 2024 & Spring 2025)",
];

//const awards = [
//];

/** Example Publications with BibTeX + Citation Info */

const publications = {
  journals: [
  ],

  conferences: [
  ],

  workshops: [
    {
      citation: {
        authors: "Heng Zheng, Dexter Williams, and Bertram Ludäscher",
        year: "2025",
        title: "Using LLMs to Model Arguments in U.S. Supreme Court Briefs: Preliminary Report",
        venue: "International Workshop on Translating Natural Legal Language into Formal Representation (NLL2FR 2025)",
      },
      pdf: "/papers/NLL2FR2025proceedings.pdf",
      bibtex: `@inproceedings{Zheng2025,
            title={Using {LLMs} to Model Arguments in {U}.{S}. Supreme Court Briefs: {P}reliminary Report},
            author={Zheng, Heng and Williams, Dexter and Ludäscher, Bertram},
            booktitle={Proceedings of the International Workshop on Translating Natural Legal Language into Formal Representation (NLL2FR 2025)},
            year={2025}
          }`,
    },
  ],

  other: [
    {
      citation: {
        authors: "Heng Zheng, Dexter Williams, and Bertram Ludäscher",
        year: "2025",
        title: "Modeling U.S. Supreme Court Briefs with Computational Argumentation",
        venue: "Thirty-eighth International Conference on Legal Knowledge and Information Systems (JURIX 2025)"
      },
      pdf: "/papers/JURIX2025proceedings.pdf",
      bibtex: `@incollection{zheng_modeling_2025,
            title = {Modeling {U}.{S}. Supreme Court Briefs with Computational Argumentation},
            url = {https://ebooks.iospress.nl/doi/10.3233/FAIA251631},
            doi = {10.3233/FAIA251631},
            language = {en},
            urldate = {2026-02-11},
            booktitle = {Legal {Knowledge} and {Information} {Systems}},
            publisher = {IOS Press},
            author={Zheng, Heng and Williams, Dexter and Ludäscher, Bertram},
            year = {2025},
            doi = {10.3233/FAIA251631},
            pages = {439--441},
      }`,

    }
  ],
};

/** ---------- HELPERS ---------- */

function formatAuthors(authors: string) {
  return authors.split(" and ").map((a, i) => (
    <span key={i}>
      {a.trim() === AUTHOR_NAME ? <b>{a.trim()}</b> : a.trim()}
      {i < authors.split(" and ").length - 1 ? ", " : ""}
    </span>
  ));
}

function CitationText({ citation }: any) {
  return (
    <Typography sx={{ lineHeight: 1.7 }}>
      {formatAuthors(citation.authors)} ({citation.year}). {citation.title}. <i>{citation.venue}</i>.
    </Typography>
  );
}

/** ---------- COMPONENT ---------- */

export default function App() {
  const [openPdf, setOpenPdf] = useState<string | null>(null);
  const [pdfTitle, setPdfTitle] = useState<string>("");
  const [openBibtex, setOpenBibtex] = useState<string | null>(null);

  const sectionRefs = {
    research: useRef<HTMLDivElement>(null),
    publications: useRef<HTMLDivElement>(null),
    news: useRef<HTMLDivElement>(null),
    teaching: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const PublicationList = ({ title, items }: any) => (
    <Box mb={5}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>

      <List disablePadding>
        {items.map((paper: any, idx: number) => (
          <ListItem key={idx} divider={idx !== items.length - 1} sx={{ px: 0, py: 2, alignItems: "flex-start" }}>
            <Box flex={1}>
              <CitationText citation={paper.citation} />
            </Box>

            <Stack direction="row" spacing={1}>
              <Button size="small" onClick={() => setOpenPdf(paper.pdf)}>
                Preview
              </Button>
              <Button size="small" component={Link} href={paper.pdf} target="_blank">
                PDF
              </Button>
              <Button size="small" onClick={() => setOpenBibtex(paper.bibtex)}>
                BibTeX
              </Button>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ minHeight: "100vh", background: "#020617" }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1, fontWeight: 700 }}>{profile.name}</Typography>

          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.publications)}>Publications</Button>
            {/*<Button color="inherit" onClick={() => scrollTo(sectionRefs.news)}>News</Button>*/}
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.teaching)}>Teaching</Button>
            {/*<Button color="inherit" onClick={() => scrollTo(sectionRefs.awards)}>Awards</Button>*/}
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center" mb={10}>
          <Grid item xs={12} md={4}>
            <Avatar src={profile.profileImage} sx={{ width: 180, height: 180 }} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h2" fontWeight={800} mb={2}>
              {profile.name}
            </Typography>

            <Typography color="text.secondary" mb={3}>
              {profile.title}
            </Typography>

            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 700 }}>
              {profile.bio}
            </Typography>

            <Stack direction="row" spacing={2} mt={4} flexWrap="wrap">
              {links.map((link) => (
                <Button key={link.label} startIcon={link.icon} component={Link} href={link.url} target="_blank" variant="outlined">
                  {link.label}
                </Button>
              ))}

              <Button startIcon={<DescriptionIcon />} component={Link} href={cv.file} target="_blank" variant="contained">
                {cv.label}
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 8 }} />

        <Box ref={sectionRefs.research} mb={10}>
          <Typography variant="h4" fontWeight={700} mb={4}>Research Areas</Typography>

          <Grid container spacing={3}>
            {researchInterests.map((interest) => (
              <Grid item xs={12} sm={6} md={4} key={interest}>
                <Box sx={{ p: 3, borderTop: "3px solid rgba(255,255,255,0.2)" }}>
                  <Typography fontWeight={600}>{interest}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box ref={sectionRefs.publications} mb={10}>
          <Typography variant="h4" fontWeight={700} mb={4}>Publications</Typography>

          {/*<PublicationList title="Journal Articles" items={publications.journals} />*/}
          {/*<PublicationList title="Conference Papers" items={publications.conferences} />*/}
          <PublicationList title="Workshop Papers" items={publications.workshops} />
          <PublicationList title="Posters & Other" items={publications.other} />
        </Box>

        {/*<Box ref={sectionRefs.news} mb={10}>
          <Typography variant="h4" fontWeight={700} mb={4}>News</Typography>

          <Stack spacing={2}>
            {news.map((n, i) => (
              <Box key={i} sx={{ borderLeft: "3px solid rgba(255,255,255,0.3)", pl: 2 }}>
                <Typography fontWeight={600}>{n.date}</Typography>
                <Typography>{n.text}</Typography>
              </Box>
            ))}
          </Stack>
          </Box>*/}

        <Box ref={sectionRefs.teaching} mb={10}>
          <Typography variant="h4" fontWeight={700} mb={4}>Teaching</Typography>

          <Stack spacing={2}>
            {teaching.map((course) => (
              <Typography key={course}>• {course}</Typography>
            ))}
          </Stack>
        </Box>

        {/*<Box ref={sectionRefs.awards} mb={10}>
          <Typography variant="h4" fontWeight={700} mb={4}>Awards & Recognition</Typography>

          <Stack spacing={2}>
            {awards.map((award) => (
              <Typography key={award}>• {award}</Typography>
            ))}
          </Stack>
          </Box>*/}
        </Container>

      {/* PDF Preview */}
      <Dialog open={Boolean(openPdf)} onClose={() => setOpenPdf(null)} maxWidth="lg" fullWidth>
        <DialogTitle>
          PDF Preview
        </DialogTitle>

        <DialogContent sx={{ height: "80vh" }}>
          {openPdf && (
            <iframe src={openPdf} width="100%" height="100%" style={{ border: "none" }} title="PDF Preview" />
          )}
        </DialogContent>
      </Dialog>

      {/* BibTeX Dialog */}
      <Dialog open={Boolean(openBibtex)} onClose={() => setOpenBibtex(null)} maxWidth="md" fullWidth>
        <DialogTitle>BibTeX</DialogTitle>
        <DialogContent>
          <Box component="pre" sx={{ whiteSpace: "pre-wrap", fontSize: 13 }}>
            {openBibtex}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

