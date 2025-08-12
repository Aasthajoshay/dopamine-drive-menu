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
  
  Bolt as ZapIcon,
} from '@mui/icons-material';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const healthyMeals = [
  {
    id: 1,
    title: "Power Smoothie Bowl",
    description: "Açaí, banana, berries, granola, and coconut flakes",
    category: "Breakfast",
    prepTime: "5 min",
    energy: "High",
    benefits: ["Antioxidants", "Fiber", "Vitamins"],
    color: "secondary",
  },
   {
    id: 6,
    title: "Green Brain Salad",
    description: "Spinach, walnuts, blueberries, feta, olive oil",
    category: "Lunch",
    prepTime: "7 min",
    energy: "Sustained",
    benefits: ["Omega-3", "Antioxidants", "Brain Health"],
    color: "primary",
  },
  
   {
    id: 3,
    title: "Golden Turmeric Latte",
    description: "Almond milk, turmeric, ginger, cinnamon, honey",
    category: "Drink",
    prepTime: "5 min",
    energy: "Calming",
    benefits: ["Anti-inflammatory", "Warming", "Immune Boost"],
    color: "accent",
  },
  {
    id: 4,
    title: "Quinoa Buddha Bowl",
    description: "Quinoa, roasted vegetables, chickpeas, tahini dressing",
    category: "Lunch",
    prepTime: "15 min",
    energy: "High",
    benefits: ["Complete Protein", "Iron", "Magnesium"],
    color: "accent",
  },
  {
    id: 5,
    title: "Energy Balls",
    description: "Dates, almonds, cocoa powder, coconut",
    category: "Snack",
    prepTime: "10 min",
    energy: "Quick Boost",
    benefits: ["Natural Sugar", "Healthy Fats", "Minerals"],
    color: "secondary",
  },
 {
    id: 2,
    title: "Avocado Toast Deluxe",
    description: "Whole grain bread, avocado, tomatoes, hemp seeds",
    category: "Snack",
    prepTime: "3 min",
    energy: "Medium",
    benefits: ["Healthy Fats", "Protein", "Fiber"],
    color: "primary",
  },
 
];

export function HealthyMeals() {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(45deg, #10b981 0%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
              fontWeight: 700,
            }}
          >
            Try Our Dope-a-Meal
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
          >
            Fuel your brain and body with these delicious, nutrient-packed meals and snacks designed to boost your productivity!
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {healthyMeals.map((meal) => (
            <Grid item xs={12} md={6} lg={4} key={meal.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                  border: '1px solid #d1fae5',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={meal.category}
                      color={meal.color}
                      size="small"
                      sx={{ fontWeight: 500 }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <ClockIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="caption">{meal.prepTime}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: 'secondary.light',
                        color: 'secondary.contrastText',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmojiNatureIcon/>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                      {meal.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.5 }}
                  >
                    {meal.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <ZapIcon sx={{ fontSize: '1rem', color: 'accent.main' }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: 'accent.main' }}>
                      {meal.energy} Energy
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                    {meal.benefits.map((benefit, index) => (
                      <Chip
                        key={index}
                        label={benefit}
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                      color: 'white',
                      fontWeight: 600,
                      py: 1.5,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                      },
                    }}
                  >
                    Get Recipe
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