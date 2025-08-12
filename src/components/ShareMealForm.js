import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Grid,
  Paper,
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  CameraAlt as CameraIcon,
  Close as XIcon,
} from '@mui/icons-material';
import { useSnackbar } from 'notistack';

export function ShareMealForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    prepTime: "",
    ingredients: "",
    instructions: "",
    benefits: []
  });
  const [newBenefit, setNewBenefit] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar('Meal shared successfully! 🎉', { variant: 'success' });
    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      prepTime: "",
      ingredients: "",
      instructions: "",
      benefits: []
    });
  };

  const addBenefit = () => {
    if (newBenefit.trim() && !formData.benefits.includes(newBenefit.trim())) {
      setFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, newBenefit.trim()]
      }));
      setNewBenefit("");
    }
  };

  const removeBenefit = (benefit) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter(b => b !== benefit)
    }));
  };

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(45deg, #f59e0b 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
              fontWeight: 700,
            }}
          >
            Share Your Healthy Meal
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ lineHeight: 1.6 }}
          >
            Help others boost their productivity by sharing your favorite healthy recipes!
          </Typography>
        </Box>

        <Card
          sx={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)',
            border: '1px solid #fed7aa',
            boxShadow: '0 20px 40px rgba(245, 158, 11, 0.15)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <CameraIcon sx={{ color: 'accent.main' }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Submit Your Recipe
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Share the meals that fuel your best work and help you stay energized throughout the day.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Meal Title"
                    placeholder="e.g., Power Breakfast Bowl"
                    value={formData.title}
                    onChange={handleInputChange('title')}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Category</InputLabel>
                    <Select
                      value={formData.category}
                      onChange={handleInputChange('category')}
                      label="Category"
                    >
                      <MenuItem value="breakfast">Breakfast</MenuItem>
                      <MenuItem value="lunch">Lunch</MenuItem>
                      <MenuItem value="dinner">Dinner</MenuItem>
                      <MenuItem value="snack">Snack</MenuItem>
                      <MenuItem value="drink">Drink</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Short Description"
                    placeholder="Brief description of your meal"
                    value={formData.description}
                    onChange={handleInputChange('description')}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Prep Time"
                    placeholder="e.g., 10 min"
                    value={formData.prepTime}
                    onChange={handleInputChange('prepTime')}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Ingredients"
                    placeholder="List all ingredients with measurements..."
                    value={formData.ingredients}
                    onChange={handleInputChange('ingredients')}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Preparation Instructions"
                    placeholder="Step-by-step instructions..."
                    value={formData.instructions}
                    onChange={handleInputChange('instructions')}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                    Health Benefits
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <TextField
                      placeholder="e.g., High Protein"
                      value={newBenefit}
                      onChange={(e) => setNewBenefit(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addBenefit())}
                      sx={{ flexGrow: 1 }}
                    />
                    <Button variant="outlined" onClick={addBenefit}>
                      Add
                    </Button>
                  </Box>
                  {formData.benefits.length > 0 && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {formData.benefits.map((benefit, index) => (
                        <Chip
                          key={index}
                          label={benefit}
                          onDelete={() => removeBenefit(benefit)}
                          deleteIcon={<XIcon />}
                          color="secondary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                    Photo (Optional)
                  </Typography>
                  <Paper
                    sx={{
                      border: '2px dashed #d1d5db',
                      borderRadius: 2,
                      p: 4,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'accent.main',
                        backgroundColor: 'rgba(245, 158, 11, 0.05)',
                      },
                    }}
                  >
                    <UploadIcon sx={{ fontSize: '3rem', color: 'text.secondary', mb: 1 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Click to upload or drag and drop
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      PNG, JPG up to 5MB
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                      color: 'white',
                      fontWeight: 600,
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                      },
                    }}
                  >
                    Share My Recipe
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}