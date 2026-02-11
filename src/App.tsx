import { useState, useRef } from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  Paper,
  AppBar,
  Toolbar,
  Grid,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";

const profile = {
  name: "Dr. Your Name",
  title: "Assistant Professor of Something",
  bio: "I study interesting things at the intersection of X and Y. My work focuses on Z. I am especially interested in A, B, and C.",
  profileImage: "/profile.jpg",
};

const links = [
  {
    label: "GitHub",
    url: "https://github.com/yourname",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourname",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "University",
    url: "https://university.edu/~yourname",
    icon: <LanguageIcon fontSize="small" />,
  },
];

const cv = {
  label: "Download CV",
  file: "/cv.pdf",
};

const researchInterests = [
  "Machine Learning",
  "Computational Social Science",
  "AI Ethics",
  "Data Visualization",
  "Human-AI Interaction",
  "Network Science",
];

const news = [
  { date: "2026", text: "Received NSF CAREER Award." },
  { date: "2025", text: "Paper accepted to Top Conference." },
];

const teaching = [
  "Intro to Machine Learning",
  "Data Science Methods",
  "Advanced Topics in AI",
];

const awards = [
  "Best Paper Award - Conference 2025",
  "University Teaching Excellence Award 2024",
];

const papers = [
  {
    title: "Paper Title One",
    authors: "Your Name, Coauthor A, Coauthor B",
    venue: "Conference / Journal, 2025",
    pdf: "/papers/paper1.pdf",
  },
  {
    title: "Paper Title Two",
    authors: "Your Name, Coauthor C",
    venue: "Conference / Journal, 2024",
    pdf: "/papers/paper2.pdf",
  },
];

export default function App() {
  const [openPdf, setOpenPdf] = useState<string | null>(null);
  const [pdfTitle, setPdfTitle] = useState<string>("");

  const sectionRefs = {
    research: useRef<HTMLDivElement>(null),
    publications: useRef<HTMLDivElement>(null),
    news: useRef<HTMLDivElement>(null),
    teaching: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOpenPdf = (file: string, title: string) => {
    setOpenPdf(file);
    setPdfTitle(title);
  };

  const handleClosePdf = () => {
    setOpenPdf(null);
    setPdfTitle("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(168,85,247,0.08), transparent 40%), #020617",
      }}
    >
      {/* Top Navigation */}
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ backdropFilter: "blur(10px)" }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 600 }}>
            {profile.name}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.research)}>
              Research
            </Button>
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.publications)}>
              Publications
            </Button>
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.news)}>
              News
            </Button>
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.teaching)}>
              Teaching
            </Button>
            <Button color="inherit" onClick={() => scrollTo(sectionRefs.awards)}>
              Awards
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Profile */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6 }} elevation={6}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
            <Avatar
              src={profile.profileImage}
              sx={{ width: 160, height: 160 }}
            />

            <Box>
              <Typography variant="h3" fontWeight={700}>
                {profile.name}
              </Typography>
              <Typography color="text.secondary" mb={2}>
                {profile.title}
              </Typography>
              <Typography sx={{ maxWidth: 650, mb: 3 }}>
                {profile.bio}
              </Typography>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                {links.map((link) => (
                  <Button
                    key={link.label}
                    startIcon={link.icon}
                    component={Link}
                    href={link.url}
                    target="_blank"
                    variant="outlined"
                  >
                    {link.label}
                  </Button>
                ))}

                <Button
                  startIcon={<DescriptionIcon />}
                  component={Link}
                  href={cv.file}
                  target="_blank"
                  variant="contained"
                >
                  {cv.label}
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Paper>

        {/* Research Interests */}
        <Box ref={sectionRefs.research} mb={8}>
          <Typography variant="h4" mb={3} fontWeight={600}>
            Research Interests
          </Typography>

          <Grid container spacing={2}>
            {researchInterests.map((interest) => (
              <Grid item xs={12} sm={6} md={4} key={interest}>
                <Paper sx={{ p: 3, borderRadius: 3 }} elevation={2}>
                  <Typography fontWeight={500}>{interest}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Publications */}
        <Box ref={sectionRefs.publications} mb={8}>
          <Typography variant="h4" mb={3} fontWeight={600}>
            Publications
          </Typography>

          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <List>
                {papers.map((paper, idx) => (
                  <ListItem
                    key={paper.title}
                    divider={idx !== papers.length - 1}
                  >
                    <ListItemText
                      primary={
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Typography fontWeight={600}>
                            {paper.title}
                          </Typography>

                          <Button
                            size="small"
                            startIcon={<DescriptionIcon />}
                            onClick={() =>
                              handleOpenPdf(paper.pdf, paper.title)
                            }
                          >
                            Preview
                          </Button>

                          <Button
                            size="small"
                            component={Link}
                            href={paper.pdf}
                            target="_blank"
                          >
                            PDF
                          </Button>
                        </Stack>
                      }
                      secondary={
                        <>
                          <Typography variant="body2">
                            {paper.authors}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {paper.venue}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>

        {/* News */}
        <Box ref={sectionRefs.news} mb={8}>
          <Typography variant="h4" mb={3} fontWeight={600}>
            News & Updates
          </Typography>

          <Stack spacing={2}>
            {news.map((n, i) => (
              <Paper key={i} sx={{ p: 2, borderRadius: 3 }} elevation={2}>
                <Stack direction="row" spacing={2}>
                  <Chip label={n.date} />
                  <Typography>{n.text}</Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Teaching */}
        <Box ref={sectionRefs.teaching} mb={8}>
          <Typography variant="h4" mb={3} fontWeight={600}>
            Teaching
          </Typography>

          <Stack spacing={2}>
            {teaching.map((course) => (
              <Paper key={course} sx={{ p: 2, borderRadius: 3 }} elevation={2}>
                <Typography>{course}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Awards */}
        <Box ref={sectionRefs.awards} mb={8}>
          <Typography variant="h4" mb={3} fontWeight={600}>
            Awards & Recognition
          </Typography>

          <Stack spacing={2}>
            {awards.map((award) => (
              <Paper key={award} sx={{ p: 2, borderRadius: 3 }} elevation={2}>
                <Typography>{award}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* PDF Preview */}
      <Dialog open={Boolean(openPdf)} onClose={handleClosePdf} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ display: "flex" }}>
          <Box flexGrow={1}>{pdfTitle}</Box>
          <IconButton onClick={handleClosePdf}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ height: "80vh" }}>
          {openPdf && (
            <iframe
              src={openPdf}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="PDF Preview"
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

