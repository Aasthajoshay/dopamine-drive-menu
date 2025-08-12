import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Psychology as BrainIcon,
  Bolt as ZapIcon,
  Favorite as HeartIcon,
} from '@mui/icons-material';
import heroImage from "../assets/hero-dopamine.jpg";

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <ZapIcon sx={{ fontSize: '2rem', color: '#fef3c7' }} />,
      title: 'Instant Mood Boost',
      description: 'Quick activities to spark joy and creativity',
    },
    {
      icon: <HeartIcon sx={{ fontSize: '2rem', color: '#fbb6ce' }} />,
      title: 'Brain Fuel',
      description: 'Nutritious meals to power your focus',
    },
    {
      icon: <BrainIcon sx={{ fontSize: '2rem', color: '#c4b5fd' }} />,
      title: 'Science-Backed',
      description: 'Activities designed to boost dopamine naturally',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9) 0%, rgba(168, 85, 247, 0.8) 50%, rgba(245, 158, 11, 0.7) 100%)',
          zIndex: 1,
        },
      }}
    >
     <Container
  maxWidth="xl"
  sx={{
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // vertically center the whole stack
    minHeight: '100vh', // take full height
    textAlign: 'center',
  }}
>
  {/* Grouped content */}
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
   <Chip
  icon={<BrainIcon />}
  label="Boost Your Productivity"
  sx={{
    mt: 8, // adds space above
    mb: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontWeight: 600,
  }}
/>


    <Typography
      variant="h1"
      sx={{
        color: 'white',
        fontWeight: 700,
        fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
      }}
    >
      Your Personal
      <br />
      <Box
        component="span"
        sx={{
          background: 'linear-gradient(45deg, #ffffff 0%, #fef3c7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Dopamine Menu
      </Box>
    </Typography>

    <Typography
      variant="h5"
      sx={{
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '800px',
        mx: 'auto',
        mb: 5,
        lineHeight: 1.6,
        fontSize: { xs: '1.1rem', md: '1.5rem' },
      }}
    >
      Beat boredom and fuel your brain with curated activities and healthy meals designed to boost your mood and productivity.
    </Typography>
  </Box>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 6, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<ZapIcon />}
            onClick={() => scrollToSection('activities')}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            Browse Activities
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<HeartIcon />}
            onClick={() => scrollToSection('meals')}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            Explore Meals
          </Button>
        </Box>

        {/* Features */}
        <Grid container spacing={2} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
