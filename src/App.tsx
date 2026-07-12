import { useRef } from "react";
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
  Button,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
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


const teaching = [
  "Formal logic and discrete mathematics (University of Illinois Urbana-Champaign, Fall 2024 & Spring 2025)",
];


const publications = {
  conferences: [
    {
      citation: "Williams, D.,* Liu, S., Stede, M., Wachsmuth, H., & Schneider, J. (2026). AMResources: Cataloging argument mining datasets. In M. Elaraby, A. Hautli-Janisz, J. Romberg, E. Musi, F. Ruggeri, & J. Lawrence (Eds.), Proceedings of the 13th Workshop on Argument Mining and Reasoning (pp. 52–58). Association for Computational Linguistics. https://doi.org/10.18653/v1/2026.argmining-1.5",
      pdf: "/papers/ArgMining2026.pdf",
      link: "https://doi.org/10.18653/v1/2026.argmining-1.5"
    },
    {
      citation: "Williams, D.* (2026). That feels convincing: Assessing the quality of pathotic arguments. Argumentation in the Digital Society. Proceedings of the 5th European Conference on Argumentation (ECA 2025). Forthcoming.",
      pdf: "/papers/ECA2025.pdf",
    },
    {
      citation: "Williams, D.* (2026). Decorum in the forum: Emotional interactions in U.S. presidential press conferences. Arguing Democracy. Proceedings of the 2025 NCA/AFA Argumentation Conference (Alta). Forthcoming.",
      pdf: "/papers/Alta2025.pdf",
    },
    {
      citation: "Zheng, H., Williams, D.,* & Ludascher, B. (2025). Using LLMs to model arguments in U.S. Supreme Court briefs: Preliminary report. Proceedings of the International Workshop on Translating Natural Legal Language into Formal Representation (NLL2FR 2025).",
      pdf: "/papers/NLL2FR2025proceedings.pdf",
      link: "https://jurisinformaticscenter.github.io/NLL2FR2025/NLL2FR2025proceedings.pdf"
    },
    {
      citation: "Zheng, H., Williams, D.,* & Ludäscher, B. (2025). Modeling U.S. Supreme Court briefs with computational argumentation. In R. Markovich, L. D. Caro, A. Rapp, & C. Schifanella (Eds.), Legal Knowledge and Information Systems. SAGE Publications. https://doi.org/10.3233/FAIA251631",
      pdf: "/papers/JURIX2025proceedings.pdf",
      link: "https://doi.org/10.3233/FAIA251631"
    },
  ],
  posters:  [
  {
    citation: "Williams, D.,* & Schneider, J. (2026). Emotional Argumentation in Second Look. Talk at The 2026 Symposium of the Applied Rhetoric Collaborative.",
  },
  {
    citation: "Williams, D.,* & Hatt, A. (2026). Don't Argue With Cops? The harms of \"fighting words\". Poster at the University of Wisconsin-Madison May Day Tea 2026.",
    pdf: "/papers/DontArgueWithCops[Poster].pdf",
    link: "https://minds.wisc.edu/items/bd692419-212d-4e28-9b8b-a0f8bb0c31c0"
  },
  {
    citation: "Williams, D.* (2026). Computational Assessment of Pathotic Argumentation Quality. Online Handbook of Argumentation for AI, 5.",
    pdf: "/papers/OHAAI_Vol_5.pdf",
    link: "https://doi.org/10.5281/zenodo.18701005",
  },
  {
    citation: "Williams, D.* (2024). Assessing the Quality of Pathotic Arguments. Poster at the 2024 iSchool Research Showcase at the University of Illinois Urbana-Champaign.",
    pdf: "/papers/uiucposter.pdf"
  }
]
}


export default function App() {

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
              <Typography>{paper.citation}</Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              {paper.pdf && (
              <Button size="small" component={Link} href={paper.pdf} target="_blank">
                PDF
              </Button>
              )}
              {paper.link && (
                <Button size="small" component={Link} href={paper.link} target="_blank">
                  Link
                </Button>
              )}

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
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.teaching)}>Teaching</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center" mb={10}>
          <Grid>
            <Avatar src={profile.profileImage} sx={{ width: 180, height: 180 }} />
          </Grid>

          <Grid>
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
              <Grid key={interest}>
                <Box sx={{ p: 3, borderTop: "3px solid rgba(255,255,255,0.2)" }}>
                  <Typography fontWeight={600}>{interest}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box ref={sectionRefs.publications} mb={10}>
          <Typography variant="h4" fontWeight={700} mb={4}>Publications</Typography>
          <PublicationList title="Conference Papers" items={publications.conferences} />
          <PublicationList title="Non-Refereed/Lightly Refereed Publications, Presentations & Posters" items={publications.posters} />
        </Box>

        <Box ref={sectionRefs.teaching} mb={10}>
          <Typography variant="h4" fontWeight={700} mb={4}>Teaching</Typography>

          <Stack spacing={2}>
            {teaching.map((course) => (
              <Typography key={course}>• {course}</Typography>
            ))}
          </Stack>
        </Box>
        </Container>

    </Box>
  );
}

