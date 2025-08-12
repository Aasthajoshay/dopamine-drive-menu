import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Chip,
} from '@mui/material';
import {
  AccessTime as ClockIcon,
  People as UsersIcon,
  MenuBook as BookOpenIcon,
  SentimentSatisfied as SmileIcon,
  Favorite as HeartIcon,
  Bolt as ZapIcon,
} from '@mui/icons-material';

const dopamineActivities = [
  {
    id: 1,
    title: "Read Interesting Reddit Posts",
    description: "Discover fascinating stories and discussions",
    category: "Social",
    duration: "10-15 min",
    icon: <UsersIcon />,
    color: "primary",
  },
  {
    id: 2,
    title: "Watch a Sunrise/Sunset",
    description: "Connect with nature and find peace",
    category: "Nature",
    duration: "15-30 min",
    icon: <HeartIcon />,
    color: "secondary",
  },
  {
    id: 3,
    title: "Try a New Coffee Shop",
    description: "Explore your neighborhood and taste new flavors",
    category: "Adventure",
    duration: "30-60 min",
    icon: <SmileIcon />,
    color: "accent",
  },
  {
    id: 4,
    title: "Learn Something New (5 min)",
    description: "Quick YouTube tutorial or interesting article",
    category: "Learning",
    duration: "5-10 min",
    icon: <BookOpenIcon />,
    color: "secondary",
  },
  {
    id: 5,
    title: "Text a Friend",
    description: "Reach out and strengthen connections",
    category: "Social",
    duration: "5 min",
    icon: <UsersIcon />,
    color: "primary",
  },
  {
    id: 6,
    title: "Dance to Your Favorite Song",
    description: "Move your body and boost your energy",
    category: "Movement",
    duration: "3-5 min",
    icon: <ZapIcon />,
    color: "accent",
  },
];

export function DopamineMenu() {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(45deg, #8b5cf6 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
              fontWeight: 700,
            }}
          >
            Dopamine Activity Menu
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
          >
            When boredom strikes, order up some instant mood boosters! Pick an activity that fits your time and energy.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {dopamineActivities.map((activity) => (
            <Grid item xs={12} md={6} lg={4} key={activity.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={activity.category}
                      color={activity.color}
                      size="small"
                      sx={{ fontWeight: 500 }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <ClockIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="caption">{activity.duration}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: 'primary.light',
                        color: 'primary.contrastText',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {activity.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                      {activity.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.5 }}
                  >
                    {activity.description}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                      color: 'white',
                      fontWeight: 600,
                      py: 1.5,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
                      },
                    }}
                  >
                    Let's Do This!
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}